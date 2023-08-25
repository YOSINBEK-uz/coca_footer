import React from 'react'
import "./Footer.css"
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Footerlogo from "./Footer_Images/Footer_logo.png"
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_box1">
        <div className="Footer_mini1">
          <h1>Think beyond the wave</h1>
          <p>Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
        </div>
        <div className="Footer_mini2">
          <button>Try for free</button>
        </div>
      </div>
      <div className="Footer_box2">
        <div className="Footer_box2_mini1">
          <img src={Footerlogo} alt="" />
          <h1>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</h1>
        </div>
        <div className="Footer_box2_mini2">
          <div className="Footer_box2_mini2_text1">
            <h1>Company</h1>
            <p>About</p>
            <p>Pricing</p>
            <p>Jobs</p>
            <p>Blog</p>
          </div>
          <div className="Footer_box2_mini2_text2">
            <h1>Product</h1>
            <p>Sales Software</p>
            <p>Marketplace</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="Footer_box2_mini2_text3">
            <h1>Discover</h1>
            <p>CRM Comparision</p>
            <p>Partner Program</p>
            <p>What is CRM</p>
            <p>Resource</p>
          </div>
          <div className="Footer_box2_mini2_text4">
            <h1>Help Center</h1>
            <p>Community</p>
            <p>Knowledge Base</p>
            <p>Academy</p>
            <p>Support</p>
          </div>

        </div>
      </div>
      <div className="Footer_box3">
        <div className="Footer_iconlar">
          <h1>
          <BsFacebook  />  
          </h1>
          <h1>
            <BsTwitter  />
          </h1>
          <h1>
             <BsInstagram  />
          </h1>
         <h1>
          <BsLinkedin  />
         </h1>
          
        </div>
        <div className="Footer_box3_text">
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
          <h1>Support</h1>
        </div>
        <h1>© Copyright 2023,t All Rights Reserved</h1>
      </div>
    </div>
  )
}

export default Footer