import React from 'react';
import styles from './Reviews.module.scss';
import preview1 from '../../assets/img/preview1.jpg';
import preview2 from '../../assets/img/preview2.jpg';
import preview3 from '../../assets/img/preview3.jpg';
import preview4 from '../../assets/img/preview4.jpg';

function Reviews() {

    const videos = [
        {url: '/', preview: preview1},
        {url: '/', preview: preview2},
        {url: '/', preview: preview3},
        {url: '/', preview: preview4},
    ]

    return (
        <section className={styles.reviews}>
            <h2 className={styles.title}>Reviews</h2>
            <div className={styles.reviewsViodeos}>
                {videos.map((video, i) => {
                    return (
                        <a key={i} href={video.url} className={styles.video}>
                            <img src={video.preview} alt=""/>
                            <span className={styles.hoverBg}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                    <circle cx="44" cy="44" r="40" fill="#33B7BC" stroke="url(#paint0_linear_79_663)" strokeOpacity="0.5" strokeWidth="8"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M40.5824 30.5995C39.2729 29.5519 37.333 30.4842 37.333 32.1612V55.8388C37.333 57.5158 39.2729 58.4481 40.5824 57.4005L55.3808 45.5617C56.3816 44.7611 56.3816 43.2389 55.3808 42.4383L40.5824 30.5995Z" fill="white"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_79_663" x1="16.6667" y1="84" x2="103.333" y2="2" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#33B7BC"/>
                                    <stop offset="1" stopColor="#33B7BC" stopOpacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </a>
                    )
                })}
            </div>
        </section>
    );
}

export default Reviews;