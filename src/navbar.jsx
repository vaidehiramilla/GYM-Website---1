import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgGym } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import {GiBiceps} from 'react-icons/gi'
import styles from './navbar.module.css';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  function renderMenuLinks() {
    return (
      <div className={styles.menuLinks}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/aboutus">
          About Us
        </NavLink>
        <NavLink className={styles.link} to="/program">
          Program
        </NavLink>
        <NavLink className={styles.link} to="/training">
          Training
        </NavLink>
        <NavLink className={styles.link} to="/pricing">
          Pricing
        </NavLink>
        <div className={styles.joinBtn}>
        <NavLink className={styles.linkJoin} to='login'>
          Join Us
        </NavLink>
      </div>

      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.gymContainer}>
        <NavLink className={styles.linkGym} to="/">
        <GiBiceps />responsivenessGym
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
