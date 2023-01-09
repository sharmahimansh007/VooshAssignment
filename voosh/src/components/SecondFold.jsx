import React from "react";
import "../css/SecondFold.css";
import Button from "./Button";

export const SecondFold = ({ user }) => {
  return (
    <div id="second_fold_container">
      <div id="second_fold_title">Book A Demo Now</div>
      <div>
        <div id="form">
          <div className="input_text">
            Name
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="text"
            placeholder="Ex. John Doe"
          />
          <div className="input_text">
            Email
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="email"
            placeholder="Ex. mail@website.com"
          />
          <div className="input_text">
            Company Name
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="text"
            placeholder="Ex. XYZ PVT LTD"
          />
          <div className="input_text">
            Your Title
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="text"
            placeholder="Ex. Operational Head"
          />
          <div className="input_text">
            Password
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="password"
            placeholder="qwery@123"
          />
          <input id="submit_button" type="submit" value="Book Demo" />
        </div>
      </div>
    </div>
  );
};
