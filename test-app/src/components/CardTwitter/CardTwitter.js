import css from "./CardTwitter.module.css";
import cardLogo from "../../images/card_logo.png";
import cardSign from "../../images/card_sign.png";
import cardLine from "../../images/card_line.png";
import cardAvatarEllipse from "../../images/card_avatar_ellipse.png";
import cardAvatar from "../../images/card_avatar.jpg";

const CardTwitter = function () {
  return (
    <div className={css.cardTwitter}>
      <img className={css.cardLogo} src={cardLogo} alt="logo" />
      <img className={css.cardSign} src={cardSign} alt="sign" />
      <img src={cardLine} alt="line" />
      <img
        className={css.cardAvatarEllipse}
        src={cardAvatarEllipse}
        alt="card avatar ellipse"
      />
      <img className={css.cardAvatar} src={cardAvatar} alt="card avatar" />
      <p className={css.countTweets}>777 tweets</p>
      <p className={css.countFollowers}>100,500 Followers</p>
      <div className={css.btnFollowBlock}>
        <button className={css.btnFollow} type="button">
          Follow
        </button>
      </div>
    </div>
  );
};

export default CardTwitter;
