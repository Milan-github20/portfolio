import React from 'react';
import styles from './Footer.module.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-top-left']}>
                    {/*<img src={footer_logo} alt='' />*/}
                    <div className={styles['footer-title']}>
                        <h1>Milan</h1>
                        <img src={theme_pattern} alt=""/>
                    </div>
                    <p>I am a frontend developer from Banja Luka, RS/BiH with 3 years of experience in Racunari.doo</p>
                </div>
                {/*<div className={styles['footer-top-right']}>*/}
                {/*    <div className={styles['footer-email-input']}>*/}
                {/*        <img src={user_icon} alt='' />*/}
                {/*        <input type='email' placeholder='Enter your email' />*/}
                {/*    </div>*/}
                {/*    <div className={styles['footer-subscribe']}>*/}
                {/*        Subscribe*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <hr />
            <div className={styles['footer-bottom']}>
                <p className={styles['footer-bottom-left']}>© 2025 Milan Jagodic. All rights reserved.</p>
                <div className={styles['footer-bottom-right']}>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;