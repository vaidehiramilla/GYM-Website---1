import React from "react";
import style from "./Footer.module.css";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer_title}>
        <h2 className={style.head2}>WAVES GYM</h2>

        <p className={style.para}>
          Our mission is to build a community that empowers our clients to
          become a better version of themselves with every session
        </p>

        <div className={style.iconDiv}>
          <a href="https://www.facebook.com" target="_blank"><ImFacebook2 className={style.icons} /></a>
          <a href="https://www.linkedin.com" target="_blank"><BsLinkedin className={style.icons} /></a>
          <a href="https://www.whatsapp.com" target="_blank"><ImWhatsapp className={style.icons} /></a>
          <a href="https://www.youtube.com" target="_blank"><ImYoutube className={style.icons} /></a>
        </div>
      </div>

      <div className={style.footer_content}>
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Program</li>
          <li>Training </li>
          <li>Pricing </li>
        </ul>
        <ul>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Testimonials</li>
          <li>Work Culture</li>
          <li>Blogs</li>
        </ul>
        <ul>
          <li>Press Room</li>
          <li>Events</li>
          <li>Amazing Offers</li>
          <li>Group Program</li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>
  );
}