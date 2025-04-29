import React from 'react';
import styles from './MyWork.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className={styles['mywork']}>
            <div className={styles['mywork-title']}>
                <h1>My latest work</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className={styles['mywork-container']}>
                {mywork_data.map((work, index) => {
                    return <img src={work.w_img} alt="" key={index} />
                })}
            </div>
            <div className={styles['mywork-showmore']}>
                <p>Show more</p>
                <img src={arrow_icon} alt='' />
            </div>

        </div>
    );
};

export default MyWork;