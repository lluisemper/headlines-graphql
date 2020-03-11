const { getHeadline, fetchHeadlines } = require('../scraper/fetch-headlines')
const { newspapers } = require('../scraper/newspapers');
const { storeInDB } = require('../scraper/store-headlines');
const mockData = require('./mockData');
const HeadlineSchema = require('../server/models/headlines');

//for this test to work first serve ./newspaperStatic.html (npx serve Tests) 
describe("Test getHeadline", function () {
  const laVanGuardia = newspapers.find(obj => obj.newspaper === 'la-vanguardia');
  it("getHeadline should return the correct", async function () {
    const result = await getHeadline('http://192.168.1.172:5000/newspaperStatic', laVanGuardia.path);
    expect(result).toEqual(`El contagio por coronavirus en centros
                        de mayores provoca cierres`);
  });
});

describe("Test if all headlines return a headline", function () {
  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("all headline should contain a non-empty string", async function () {
    const result = await fetchHeadlines(newspapers);
    let empty = null;
    for (headline in result.headlines) {
      if (result.headlines[headline].headline === '' || undefined) {
        empty = headline;
      }
    }
    expect(empty).toBe(null);
  });
});

describe("Test for store-headLines", function () {
  let inDatabase = false;
  beforeEach((done) => {
    storeInDB(mockData.mockData).then((res) => {
      HeadlineSchema.find({ headline: 'test' }, (err, headline) => {
        if (headline[0].headline === 'test') {
          inDatabase = true;
          done();
        }
      });
    })
  });

  it("headline should be stored in the database", function () {
    expect(inDatabase).toBe(true);
  });

  afterEach(() => {
    HeadlineSchema.find({ headline: 'test' }).deleteOne().exec();
  })
});

