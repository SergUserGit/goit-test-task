//import logo from "./logo.svg";
import "./App.css";
import CardTwitter from "./components/CardTwitter/CardTwitter";
import TweeterList from "./components/TweeterList/TweeterList";
import React, { useState, useEffect } from "react";

let page = 1;

function App() {
  const countOfPagePagination = 3;

  const [imageTweet, SetImageTweet] = useState([]);

  useEffect(() => {
    const URL = "https://6454b382a74f994b33468a7b.mockapi.io/tweet";
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Немає даних по запиту`));
      })
      .then((data) => {
        SetImageTweet((state) => data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <div>
      <TweeterList tweetsList={imageTweet} />
    </div>
  );
}
//<div className="App">
//      <p>152</p>
//    </div>
//  <header className="App-header">
//    <img src={logo} className="App-logo" alt="logo" />
//    <p>
//      Edit <code>src/App.js</code> and save to reload.
//    </p>
//    <a
//      className="App-link"
//      href="https://reactjs.org"
//      target="_blank"
//      rel="noopener noreferrer"
//    >
//      Learn React
//    </a>
//  </header>
export default App;
