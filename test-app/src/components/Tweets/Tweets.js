import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import TweeterList from "../TweeterList/TweeterList";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Tweets.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

let page = 1;

function Tweets() {
  const options = ["followings show all", "follow", "followings"];
  const defaultOption = options[0];

  const navigate = useNavigate();

  const countOfPagePagination = 3;

  const [imageTweet, SetImageTweet] = useState([]);
  const [countOfElement, SetCountOfElement] = useState(3);
  const [visibleLoadMore, SetvisibleLoadMore] = useState(true);
  const [tweetFilter, SetTweetFilter] = useState("followings show all");

  function getCopyArray(Array, indexFirst, IndexLast) {
    return Array.slice(indexFirst, IndexLast);
  }

  function onClickLoadeMoreBtn() {
    page += 1;
    const firstElement = page * countOfPagePagination;
    SetCountOfElement(firstElement);
    if (firstElement >= imageTweet.length) {
      SetvisibleLoadMore(false);
    }
  }

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

  const onGoBackClick = () => {
    navigate("/");
  };

  function onSelectDropdown(option) {
    SetTweetFilter(option.value);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "16px",
        paddingBottom: "24px",
      }}
    >
      <div className={css.customOptions}>
        <button
          className={css.buttonBack}
          type="button"
          onClick={onGoBackClick}
        >
          <span>Back</span>
        </button>
        <Dropdown
          options={options}
          value={defaultOption}
          className={css.dropdown}
          menuClassName={css.dropdownMenu}
          controlClassName={css.dropdownControl}
          onChange={onSelectDropdown}
        />
      </div>
      <TweeterList
        tweetsList={getCopyArray(imageTweet, 0, countOfElement)}
        filter={tweetFilter}
      />
      {visibleLoadMore && (
        <ButtonLoadMore onClickLoadeMoreBtn={onClickLoadeMoreBtn} />
      )}
    </div>
  );
}
export default Tweets;
