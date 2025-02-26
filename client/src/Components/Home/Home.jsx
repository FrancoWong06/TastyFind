import React from "react";

import "./Home.css";

import { IoSearch } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="title">
          <h1>Discover Your Next Favorite Meal</h1>
          <p>Find the perfect restaurant in any area with just a few clicks.</p>
        </div>

        <div className="find-area">
          <form className="input-form">
            <input
              type="text"
              placeholder="Enter an area or postcode"
              className="findFood-input"
            />
            <button className="find-button">
              {" "}
              <IoSearch />
              Find Restaurants
            </button>
          </form>
        </div>

        <div className="features">
          <div className="feature">
            <TiTick className="feature-icon" />
            <h3>Easy to Use</h3>
            <p>Simple search and intuitive interface</p>
          </div>

          <div className="feature">
            <BsStars className="feature-icon" />
            <h3>Curated Selection</h3>
            <p>Handpicked restaurants for every taste</p>
          </div>

          <div className="feature">
            <MdTimeline className="feature-icon" />
            <h3>Real-time Updates</h3>
            <p>Latest info on availability and offers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
