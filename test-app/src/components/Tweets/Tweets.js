import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import TweeterList from "../TweeterList/TweeterList";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let page = 1;

function Tweets() {
  const navigate = useNavigate();

  const countOfPagePagination = 3;

  const [imageTweet, SetImageTweet] = useState([]);
  const [countOfElement, SetCountOfElement] = useState(3);
  const [visibleLoadMore, SetvisibleLoadMore] = useState(true);

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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "16px",
        paddingBottom: "24px",
      }}
    >
      <button type="button" onClick={onGoBackClick}>
        <span>Back</span>
      </button>
      <TweeterList tweetsList={getCopyArray(imageTweet, 0, countOfElement)} />
      {visibleLoadMore && (
        <ButtonLoadMore onClickLoadeMoreBtn={onClickLoadeMoreBtn} />
      )}
    </div>
  );
}
export default Tweets;
