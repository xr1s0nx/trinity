import React from 'react';
import styles from './FullPageImage.scss';
import img from '../../assets/img/fullPageImage.jpg';

function FullPageImage() {
    return (
        <img src={img} alt="" className={styles.img}/>
    );
}

export default FullPageImage;