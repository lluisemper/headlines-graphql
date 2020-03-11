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
    apiService.fetchdata().then(result => {
      setHeadline(result.data.headline)
    });
  }, []);

  return (
    <div className="App">
      <div className="login">
      <a href="http://localhost:4000/auth/google" >login</a>
      </div>
      <img src={breakingNews} className="breakingNews"></img>
      <SearchBar onSearchQueryUpdate={setSearchQuery}></SearchBar>
      {headlinesToShow && <HeadLineList headlines={headlinesToShow} />}

    </div>
  );
}

export default App;
