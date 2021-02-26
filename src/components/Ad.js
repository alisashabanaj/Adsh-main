import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/ad-1.jpeg";
import PropTypes from "prop-types";
export default function Ad({ ad }) {
  const { name, slug, images, price } = ad;

  return (
    <article className="ad">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single ad" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per ad</p>
        </div>
        <Link to={`/ads/${slug}`} className="btn-primary ad-link">
          Features
        </Link>
      </div>
      <p className="ad-info">{name}</p>
    </article>
  );
}

Ad.propTypes = {
  ad: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
