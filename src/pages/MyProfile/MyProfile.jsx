import React from "react";
import "./MyProfile.css";
import Rating from "@mui/material/Rating";
import EditIcon from "../../assets/Profile/edit.svg";
import LocationImage from "../../assets/Profile/Location.svg";
import CallImage from "../../assets/Profile/Phone.svg";
import EmailImage from "../../assets/Profile/email.svg";
import FacebookImage from "../../assets/Profile/facebook.svg";
import LinkedInImage from "../../assets/Profile/linkedIn.svg";
import XImage from "../../assets/Profile/x.svg";
import InstagramImage from "../../assets/Profile/instagram.svg";
import ImagePin from "../../assets/Profile/pirest.svg";
import Header from "./Components/ProfileHeader/ProfileHeader";
import Sections from "./Components/ProfileSections/section";
const MyProfile = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="profile-main">
      <div className="profile-main-left">
        <Header />
        <Sections />
      </div>
      <div className="profile-main-right">
        <div className="profile-right-rating">
          <h1>Rating</h1>
          <Rating name="read-only" value={value} readOnly />
        </div>
        <div className="profile-right-contact">
          <h1>Contact </h1>
          <img className="icon" src={EditIcon} alt="EditIcon" />
        </div>
        <div className="profile-right-contact-details">
          <div className="profile-contact-data">
            <img className="icon" src={LocationImage} alt="LocationImage" />
            <p>Dhaka,Bangladesh</p>
          </div>
          <div className="profile-contact-data">
            <img className="icon" src={CallImage} alt="CallImage" />
            <p>+880 19658743*</p>
          </div>
          <div className="profile-contact-data">
            <img className="icon" src={EmailImage} alt="EmailImage" />
            <p>demo@gmail.com</p>
          </div>
          <div className="profile-contact-socialmedia-icons">
            <img className="icon" src={FacebookImage} alt="FacebookImage" />
            <img className="icon" src={LinkedInImage} alt="LinkedInImage" />
            <img className="icon" src={XImage} alt="XImage" />
            <img className="icon" src={InstagramImage} alt="InstagramImage" />
            <img className="icon" src={ImagePin} alt="ImagePin" />
          </div>
        </div>
        <div className="profile-right-contact">
          <h1>Skill </h1>
          <img className="icon" src={EditIcon} alt="EditIcon" />
        </div>
        <div className="profile-right-skill-list">
          <p>HTML/CSS</p>
          <p>JavaScript (ES6+)</p>
          <p>Responsive Design</p>
          <p>CSS Preprocessing</p>
          <p>Version Control/Git</p>
          <p>Frontend Security</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
