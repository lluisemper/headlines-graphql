import React, { useState, useEffect } from 'react';
import './App.css';
import HeadLineList from './Components/HeadLineList/HeadLineList.js';
import SearchBar from './Components/SearchBar/SearchBar';
import breakingNews from './pictures/breaking.png';
import apiService from './apiService';

function bySearchQuery(query) {
  const regex = new RegExp(query)
  return headline => regex.test(headline.headline)
}

function App() {

  const [headlines, setHeadline] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const headlinesToShow = searchQuery
    ? headlines.filter(bySearchQuery(searchQuery))
    : headlines

  useEffect(() => {
    apiService.fetchdata()
      .then(result => {
        setHeadline(result.data.headline)
      })
      .catch((err) => console.error(err))
  }, []);

  console.log('headlinesToShow', headlinesToShow);
  return (

    <div className="App">
      {headlinesToShow !== undefined && headlinesToShow.length !== 0
        ? <div className="App">
          <img src={breakingNews} className="breakingNews" alt=''></img>
          <SearchBar onSearchQueryUpdate={setSearchQuery}></SearchBar>
          <HeadLineList headlines={headlinesToShow} />
        </div>
        :
        <div className="login">
          <div className="login-text">
            <a href="http://localhost:4000/auth/google" >We would like to log in with Google to see our amazing headlines</a>
          </div>
        </div>}
    </div>
  );
}

export default App;
