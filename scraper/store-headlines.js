const HeadlineSchema = require("../server/models/headlines");
const fetchHeadLines = require("./fetch-headlines").fetchHeadlines;
require('dotenv').config()
const { newspapers } = require('./newspapers.js');
const mongoose = require("../server/db");
const _ = require("underscore");
const hashSum = require("hash-sum");

function getHeadlines (data) {

  let headlines = fetchHeadLines(data).then(data => {
    const dataArr = [];

    _.each(data.headlines, (value, key) => {
      const newHash = hashSum(`${key}${value}`);
      dataArr.push({
        hash: newHash,
        day: data.day,
        month: data.month,
        year: data.year,
        time: data.time,
        newspaper: key,
        headline: value.headline, //not all the scraper headlines work properly, check database. 
        locale: value.country, //we need to add the brittish one
        url: value.url
      });
    });
    return dataArr;
  })
  return headlines;
};

function storeInDB (dataArr) {
  return new Promise((resolve => {
    promiseAll(dataArr).then(arr => {
      const promises = []
      for (let j = 0; j < arr.length; j++) {
        if (arr[j]) {
          const doc = new HeadlineSchema({ ...dataArr[j] });
          const prom = new Promise((res, rej) => {
            doc.save(function (err, item) {
              console.log('SAVED');

              if (err) rej(err);
              res(item)
            });
          });
          promises.push(prom)
          // promises.push(doc.save())
        } else console.log('Duplicate found')
      }
      resolve(Promise.all(promises))
    }).then(items => {
      console.log('==================>>>>>>>>>>  ITEMS INSERTED : ', items.length, '   <<<<<<<<<<==================')
      mongoose.connection.close();
    }).catch(err => console.log(err));
  }))

};

function promiseAll (arr) {
  const promises = [];
  console.log(arr, '------');

  for (let i = 0; i < arr.length; i++) {
    promises.push(hashExists(arr[i].hash));
  }
  return Promise.all(promises);
}

async function hashExists (thisHash) {
  return HeadlineSchema.exists({ hash: thisHash }).then(val => {
    if (!val) return true;
    return false;
  });
}


getHeadlines(newspapers).then(data => storeInDB(data));

module.exports = { storeInDB }