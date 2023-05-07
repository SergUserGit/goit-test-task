import css from "./TweeterList.module.css";
import TweeterListItem from "../TweeterListItem/TweeterListItem";

const TweeterList = function ({ tweetsList, filter }) {
  return (
    <ul className={css.twitterList}>
      {tweetsList.map(({ tweets, followers, id, avatar }) => (
        <TweeterListItem
          key={id}
          tweetsCount={tweets}
          followersCount={followers}
          avatarSrc={avatar}
          idItem={id}
          tweetFilter={filter}
        />
      ))}
    </ul>
  );
};

export default TweeterList;
