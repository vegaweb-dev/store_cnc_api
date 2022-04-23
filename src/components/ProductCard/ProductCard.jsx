import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { addMinutes, differenceInSeconds } from "date-fns";
import PropTypes from "prop-types";
import { getCountDownDifferenceFormattedBetween } from "../../utils";
import "./product-card.css";

const ProductCard = ({ id, image, title, price }) => {
  const [countDown, setCountDown] = useState("00:00:00");
  const [isUnavailable, setIsUnavailable] = useState(false);
  const expirationDate = useMemo(() => addMinutes(new Date(), id), [id]);
  const showCountdown = differenceInSeconds(expirationDate, new Date()) > 0;

  useEffect(() => {
    let intervalId;
    if (showCountdown) {
      intervalId = setInterval(
        () =>
          setCountDown(
            getCountDownDifferenceFormattedBetween(expirationDate, new Date()),
          ),
        1000,
      );
    } else {
      setIsUnavailable(true);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [expirationDate, showCountdown]);

  return (
    <div className="product-card">
      <div className="product-card__img-container">
        <img className="product-card__img" src={image} alt={title} />
        <div className="product-card__details">
          <Link
            className={`product-card__btn ${isUnavailable ? "is-disabled" : ""}`}
            to={`/product-details/${id}`}
          >
            {isUnavailable ? "Unavailable" : "Go To Details"}
          </Link>
        </div>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__footer">
          <span>{`$${price}`}</span>
          <Link
            className={`product-card__mobile-btn ${isUnavailable ? "is-disabled" : ""}`}
            to={`/product-details/${id}`}
          >
            {isUnavailable ? "Unavailable" : "Go To Details"}
          </Link>
        </div>
        <div className="product-card__count-down">
          {isUnavailable ? "Not available, sorry :(" : `${countDown} until unavailable`}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
