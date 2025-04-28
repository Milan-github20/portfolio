import React from 'react';
import styles from './About.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile.jpg'

const About = () => {
    return (
        <div className={styles['about']}>
            <div className={styles['about-title']}>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className={styles['about-sections']}>
                <div className={styles['about-left']}>
                    <img src={profile_image} alt=""/>
                </div>
                <div className={styles['about-right']}>
                    <div className={styles['about-para']}>
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations and contributing to their success and gruwth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className={styles['about-skills']}>
                        <div className={styles['about-skill']}><p>HTML & CSS</p><hr style={{width: '50%'}}/></div>
                        <div className={styles['about-skill']}><p>React JS</p><hr style={{width: '70%'}}/></div>
                        <div className={styles['about-skill']}><p>JavaScript</p><hr style={{width: '60%'}}/></div>
                        <div className={styles['about-skill']}><p>MySql</p><hr style={{width: '40%'}}/></div>
                    </div>
                </div>
            </div>
            <div className={styles['about-achievements']}>
                <div className={styles['about-achievement']}>
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className={styles['about-achievement']}>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className={styles['about-achievement']}>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;