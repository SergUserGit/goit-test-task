import css from "./TweeterListItem.module.css";
import cardLogo from "../../images/card_logo.png";
import cardSign from "../../images/card_sign.png";
import cardLine from "../../images/card_line.png";
import cardAvatarEllipse from "../../images/card_avatar_ellipse.png";
import React, { useState, useEffect, useCallback } from "react";

const arrayStateFollow = JSON.parse(localStorage.getItem("stateFollow")) ?? [];

const TweeterListItem = ({
  tweetsCount,
  followersCount,
  avatarSrc,
  idItem,
  tweetFilter,
}) => {
  const [tweetFollow, SetTweetFollow] = useState(false);

  const getStatus = useCallback(
    (id) => {
      const stateObject = arrayStateFollow.find((value, index) => {
        return value.idButton === idItem;
      });
      if (stateObject !== undefined) {
        if (stateObject.stateFollow === "false") {
          return false;
        } else {
          return true;
        }
      }
      return false;
    },
    [idItem]
  );

  useEffect(() => {
    const status = getStatus(idItem);
    SetTweetFollow(status);
  }, [idItem, getStatus]);

  function onClickFollow(button) {
    const isFollow = button.target.dataset.follow;
    if (isFollow === "false") {
      SetTweetFollow(true);
    } else {
      SetTweetFollow(false);
    }
    const idButton = button.target.dataset.id;

    const stateObject = arrayStateFollow.find((value, index) => {
      return value.idButton === idButton;
    });

    if (stateObject === undefined) {
      const stateObject = {
        idButton: idButton,
        stateFollow: isFollow === "false" ? "true" : "false",
      };
      arrayStateFollow.push(stateObject);
    } else {
      stateObject.stateFollow = isFollow === "false" ? "true" : "false";
    }
    localStorage.setItem("stateFollow", JSON.stringify(arrayStateFollow));
  }

  function getStyleItem() {
    if (tweetFilter === "follow") {
      if (!tweetFollow) {
        return "list-item";
      } else {
        return "none";
      }
    } else if (tweetFilter === "followings") {
      if (tweetFollow) {
        return "list-item";
      } else {
        return "none";
      }
    }
    return "list-item";
  }

  const styleItem = {
    display: getStyleItem(),
  };

  return (
    <li style={styleItem} className={css.cardTwitter}>
      <img className={css.cardLogo} src={cardLogo} alt="logo" />
      <img className={css.cardSign} src={cardSign} alt="sign" />
      <img src={cardLine} alt="line" />
      <img
        className={css.cardAvatarEllipse}
        src={cardAvatarEllipse}
        alt="card avatar ellipse"
      />
      <img className={css.cardAvatar} src={avatarSrc} alt="card avatar" />
      <p className={css.countTweets}>{tweetsCount} tweets</p>
      <p className={css.countFollowers}>
        {tweetFollow ? followersCount + 1 : followersCount} Followers
      </p>
      <div className={css.btnFollowBlock}>
        <button
          data-id={idItem}
          data-follow={tweetFollow ? "true" : "false"}
          onClick={onClickFollow}
          className={tweetFollow ? css.btnFollowing : css.btnFollow}
          type="button"
        >
          {tweetFollow ? "Following" : "Follow"}
        </button>
      </div>
    </li>
  );
};

export default TweeterListItem;
