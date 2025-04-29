import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import React, {useRef, useState} from "react";
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme_pattern from "../../assets/theme_pattern.svg";

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = '0px';
    }

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    }

    return (
        <div className={styles['navbar']}>
            {/*<img src={logo} alt=''/>*/}
            <div className={styles['navbar-title']}>
                <h1>Milan</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <img src={menu_open} alt='' onClick={openMenu} className={styles['nav-mob-open']}/>
            <ul ref={menuRef} className={styles['nav-menu']}>
                <img className={styles['nav-mob-close']} onClick={closeMenu} src={menu_close} alt=''/>
                <li>
                    <AnchorLink className={styles['anchor-link']} offset={50} href='#home'>
                        <p onClick={() => setMenu('home')}>Home</p>
                    </AnchorLink>
                    {menu === 'home' && <img src={underline} alt=''/>}
                </li>
                <li>
                    <AnchorLink className={styles['anchor-link']} offset={50} href='#about'>
                        <p onClick={() => setMenu('about')}>About Me</p>
                    </AnchorLink>
                    {menu === 'about' && <img src={underline} alt=''/>}
                </li>
                <li>
                    <AnchorLink className={styles['anchor-link']} offset={50} href='#services'>
                        <p onClick={() => setMenu('services')}>Services</p>
                    </AnchorLink>
                    {menu === 'services' && <img src={underline} alt=''/>}
                </li>
                <li>
                    <AnchorLink className={styles['anchor-link']} offset={50} href='#work'>
                        <p onClick={() => setMenu('portfolio')}>Portfolio</p>
                    </AnchorLink>
                    {menu === 'portfolio' && <img src={underline} alt=''/>}
                </li>
                <li>
                    <AnchorLink className={styles['anchor-link']} offset={50} href='#contact'>
                        <p onClick={() => setMenu('contact')}>Contact</p>
                    </AnchorLink>
                    {menu === 'contact' && <img src={underline} alt=''/>}
                </li>
            </ul>
            <AnchorLink className={styles['anchor-link']} offset={50} href='#contact'>
                <div className={styles['nav-connect']}>
                    Connect With Me
                </div>
            </AnchorLink>
        </div>
    );
};

export default Navbar;