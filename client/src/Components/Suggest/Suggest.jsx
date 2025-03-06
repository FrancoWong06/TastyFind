import React, { useState } from "react";
import "./Suggest.css";
import { FaLocationDot } from "react-icons/fa6";

export default function Suggest() {
  const [suggest, setSuggest] = useState({
    name: "",
    type: "",
    address: "",
    reason: "",
    userName: "",
    userEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuggest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(suggest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Suggestion:", suggest);
    resetSuggestForm()
  };

  const resetSuggestForm = () => {
    setSuggest({
      name: "",
      type: "",
      address: "",
      reason: "",
      userName: "",
      userEmail: "",
    });
  };

  return (
    <div className="suggest-container">
      <div className="suggest">
        <div className="suggest-title">
          <h1>Suggest a Restaurant</h1>
          <p>
            Know a great restaurant that should be on TastyFind? Help us grow
            our collection by suggesting it below.
          </p>
        </div>

        <div className="suggest-form-container">
          <form className="suggest-form" onSubmit={handleSubmit}>
            <div className="suggest-form-title">
              <h3>Restaurant Details</h3>
              <hr />
            </div>

            <div className="suggest-name-address">
              <div className="suggest-name">
                <p>Restaurant Name *</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter restaurant name"
                  value={suggest.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="suggest-type">
                <p>Cuisine Type *</p>
                <select
                  name="type"
                  id="type"
                  value={suggest.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Cuisine</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="American">American</option>
                  <option value="Thai">Thai</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="suggest-address">
              <p>Address *</p>
              <div className="address">
                <FaLocationDot className="suggest-icon" />
                <input
                  type="text"
                  name="address"
                  placeholder="Full restaurant address"
                  value={suggest.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="suggest-reason">
              <p>Why do you recommend this restaurant? *</p>
              <textarea
                name="reason"
                id="reason"
                value={suggest.reason}
                onChange={handleChange}
                required
              />
            </div>

            <div className="user-info-title">
              <h3>Your Information</h3>
              <hr />
            </div>

            <div className="user-info">
              <div className="user-name">
                <p>Your Name *</p>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  value={suggest.userName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="user-email">
                <p>Your Email *</p>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter your email"
                  value={suggest.userEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button className="suggest-btn" type="submit">
              Submit Restaurant Suggestion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
