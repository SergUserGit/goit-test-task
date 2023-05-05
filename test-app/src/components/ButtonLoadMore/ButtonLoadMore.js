import css from "./ButtonLoadMore.module.css";
import React from "react";

const ButtonLoadMore = ({ onClickLoadeMoreBtn }) => {
  const loadClick = () => {
    onClickLoadeMoreBtn();
  };

  return (
    <button onClick={loadClick} className={css.buttonLoadeMore}>
      Load more
    </button>
  );
};

export default ButtonLoadMore;
