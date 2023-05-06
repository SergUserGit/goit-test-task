import css from "./TweeterList.module.css";
import TweeterListItem from "../TweeterListItem/TweeterListItem";

const TweeterList = function ({ tweetsList }) {
  return (
    <ul className={css.twitterList}>
      {tweetsList.map(({ tweets, followers, id, avatar }) => (
        <TweeterListItem
          key={id}
          tweetsCount={tweets}
          followersCount={followers}
          avatarSrc={avatar}
          idItem={id}
        />
      ))}
    </ul>
  );
};

export default TweeterList;
