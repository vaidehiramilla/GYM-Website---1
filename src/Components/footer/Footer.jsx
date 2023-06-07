import style from "./Footer.module.css";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.footer_title}>
        <h2 className={style.head2}>WAVES GYM</h2>

        <p className={style.para}>
          Our mission is to build a community that empowers our clients to
          become a better version of themselves with every session
        </p>

        <div className={style.iconDiv}>
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><ImFacebook2 className={style.icons} /></a>
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin className={style.icons} /></a>
          <a href="https://www.whatsapp.com" rel="noreferrer" target="_blank"><ImWhatsapp className={style.icons} /></a>
          <a href="https://www.youtube.com"  rel="noreferrer" target="_blank"><ImYoutube className={style.icons} /></a>
        </div >
      </div > 

      <div className={style.footer_content}>
        <ul>
          <li className={style.navLinks} onClick={()=>navigate('/')}>Home</li>
          <li className={style.navLinks} onClick={()=>navigate('/aboutus')}>About </li>
          <li className={style.navLinks} onClick={()=>navigate('/program')}>Program</li>
          <li className={style.navLinks} onClick={()=>navigate('/training')}>Training </li>
          <li className={style.navLinks} onClick={()=>navigate('/pricing')}>Pricing </li>
        </ul>
        <ul>
          <li className={style.navLinks}>Our Team</li>
          <li className={style.navLinks}>Careers</li>
          <li className={style.navLinks}>Testimonials</li>
          <li className={style.navLinks}>Work Culture</li>
          <li className={style.navLinks}>Blogs</li>
        </ul>
        <ul>
          <li className={style.navLinks}>Press Room</li>
          <li className={style.navLinks}>Events</li>
          <li className={style.navLinks}>Amazing Offers</li>
          <li className={style.navLinks}>Group Program</li>
          <li className={style.navLinks}>Gallery</li>
        </ul>
      </div>
    </div>
  );
}