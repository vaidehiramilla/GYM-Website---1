import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'
import {BiRun} from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './navbar.module.css';
import { getUsers } from './utils/localStorage';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // const [logOut, setLogout] = useState(false);

  const navigate = useNavigate()


  const users = getUsers();

  const isLoginExists = users.some( (item)=> (
    item.isLogin === true
    // console.log(item)
  ))

  function handleLogout() {
    const user = users.filter( (item)=> {
      item.isLogin = false
      // item.isSubscribed = false
      return item
    })
    localStorage.setItem('users', JSON.stringify(user))
    navigate('./')
  }

  let itr = users.find( (item)=>{
    return item.isSubscribed === true
  })

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  function renderMenuLinks() {
    return (
      <div className={styles.menuLinks}>
      <Link
        className={styles.link}
        to="aboutus"
        smooth={true}
        duration={700}
      >
        AboutUs
      </Link>
      <Link
        className={styles.link}
        to="program"
        smooth={true}
        duration={700}
      >
        Program
      </Link>
      <Link
        className={styles.link}
        to="training"
        smooth={true}
        duration={700}
      >
        Training
      </Link>
      <Link
        className={styles.link}
        to="pricing"
        smooth={true}
        duration={700}
      >
        Pricing
      </Link>
        <div className={styles.joinBtn}>
        <div className={styles.linkJoin} >
          
          {
            isLoginExists ? itr ? "Subscribed" : <p onClick={()=>navigate('/pricing')}>SubscribeNow</p>  : <p onClick={()=>navigate('/login')}>joinUs</p>
          }
        </div>
        <div >
          {
            
            isLoginExists && <button className={styles.linkJoin2} onClick={handleLogout}>Logout</button>

            }
        </div>
      </div>

      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.gymContainer}>
        <Link className={styles.linkGym} to="/" smooth={true}
        duration={700}>
        <BiRun /><span onClick={()=>navigate('/')}>Waves Gym</span> 
        </Link>
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



