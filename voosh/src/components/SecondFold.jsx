import React, { useEffect, useState } from "react";
import "../css/SecondFold.css";
// import Button from "./Button";

export const SecondFold = ({ user, setUser }) => {

 const [userData, setUserData] = useState({
  name : "",
  email : "",
  companyName : "",
  title : "",
  password : ""
 })

 const handleChange = ({target}) => {
  setUserData({...userData, [target.name]:target.value});

 }

 const submitData = (event) => {
  event.preventDefault();
  setUser(userData)

 }

 const logout = () => {
  setUser({});
 }

 
 useEffect(() => {
  if(user.name){
    alert("Hii "+user.name+". Your are logged in")
   }
 },[])

  return (
    <div id="second_fold_container">
      <div className="second_fold_title">Book A Demo Now</div>
      <div>
      {user.name ? <div className="second_fold_title text">Your Demo request is Successfully submitted <br /> <button onClick={logout} className="newDemo">Book New Demo</button></div> :  <form onSubmit={submitData} id="form">
          <div className="input_text">
            Name
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            required
            type="text"
            placeholder="Ex. John Doe"
            value={userData.name}
            name="name"
            onChange={handleChange}
          />
          <div className="input_text">
            Email
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="email"
            placeholder="Ex. mail@website.com"
            required
            value={userData.email}
            name="email"
            onChange={handleChange}
            
          />
          <div className="input_text">
            Company Name
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="text"
            placeholder="Ex. XYZ PVT LTD"
            required
            name="companyName"
            onChange={handleChange}
            value={userData.companyName}
          />
          <div className="input_text">
            Your Title
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="text"
            placeholder="Ex. Operational Head"
            required
            name="title"
            onChange={handleChange}
            value={userData.title}
          />
          <div className="input_text">
            Password
            <span className="star_css">*</span>
          </div>
          <input
            className="input_field"
            type="password"
            placeholder="qwery@123"
            required
            value={userData.password}
            onChange={handleChange}
            name="password"
            
          />
          <input id="submit_button" type="submit" value="Book Demo" />
        </form>}
      </div>
    </div>
  );
};
