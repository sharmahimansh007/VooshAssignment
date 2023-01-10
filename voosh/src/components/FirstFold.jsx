import React from "react";
import Button from "./Button";

import "../css/FirstFold.css";

export const FirstFold = () => {
  return (
    <div id="first_fold_container">
      {/* <NavBar /> */}
      <div className="left">
        <h1 className="common_css">
          Consolidate your restaurants' insights in one place. Unlock growth.
        </h1>
        <p className="common_css">
          Your one stop solution to view mission-critical data and insights from
          all your locations in one place.
        </p>
        <img
          className="common-css amazon_img"
          src="https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp"
          alt=""
        />
        <Button title="Book Demo" href="#second_fold_container" />
        <img className="common-css swiggy_img" src="https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp" alt="" />
      </div>
      <div className="right">
        <img
          className="other_img common-css"
          src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp"
          alt=""
        />
        <img
          className="grub_img common-css"
          src="https://voosh.in/static/media/page1_6.2213ad7f35bd24758114.webp"
          alt=""
        />
        <img
          className="uber_img common-css"
          src="https://voosh.in/static/media/page1_4.a2a22e7f5e42a50552ae.webp"
          alt=""
        />
        <img className="zomato_img common-css" src="https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp" alt="" />
        <img
          className="width-100"
          src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
          height="100%"
          alt=""
        />
        
      </div>
    </div>
  );
};
