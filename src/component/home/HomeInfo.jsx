import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h2>
          Step into style with our exclusive collection of sneakers and footwear.
        </h2>
        <p>
          Discover the perfect blend of comfort, design, and performance with our curated selection of shoes. From classic kicks to the latest trends, we've got something for every sneaker enthusiast. Elevate your game with shoes that are built for both fashion and function.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Our Products</Link>
      </button>
    </article>
  );
}

export default HomeInfo;
