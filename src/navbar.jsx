import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {BiRun} from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './navbar.module.css';
import { getUsers } from './utils/localStorage';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate()


  const users = getUsers();

  const isLoginExists = users.some( (item)=> (
    item.isLogin === true
    // console.log(item)
  ))

  let itr = users.find( (item)=>{
    return item.isSubscribed === true
  })

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  function renderMenuLinks() {
    return (
      <div className={styles.menuLinks}>
        <a href='#aboutus' className={styles.link}>AboutUs</a>
        {/* <NavLink className={styles.link} to="/aboutus">
          AboutUs
        </NavLink> */}
        <a href='#program' className={styles.link}>Program</a>
        {/* <NavLink className={styles.link} to="/program">
          Program
        </NavLink> */}
        <a href='#training' className={styles.link}>Training</a>
        {/* <NavLink className={styles.link} to="/training">
          Training
        </NavLink> */}
        <a href='#pricing' className={styles.link}>Pricing</a>
        {/* <NavLink className={styles.link} to="/pricing">
          Pricing
        </NavLink> */}
        <div className={styles.joinBtn}>
        <div className={styles.linkJoin} >
          
          {
            isLoginExists ? itr ? "Subscribed" : <p onClick={()=>navigate('/pricing')}>SubscribeNow</p>  : <p onClick={()=>navigate('/login')}>joinUs</p>
          }
        </div>
      </div>

      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.gymContainer}>
        <NavLink className={styles.linkGym} to="/">
        <BiRun />Waves Gym 
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.desktopLinks}>{renderMenuLinks()}</div>
        <div className={styles.mobileMenu}>
          <GiHamburgerMenu className={styles.hamburger} onClick={handleMenuClick} />
          {showMenu && renderMenuLinks()}
        </div>
      </div>
    </div>
  );
}



