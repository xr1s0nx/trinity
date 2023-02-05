import React from 'react';
import styles from './Adventages.module.scss';
import advantages from '../../assets/img/adventages2.jpg';

function Advantages() {

    const adv = [
        {img: advantages, text: '40+ unique cars for rent from our fleet'},
        {img: advantages, text: 'Delivery and return of cars in Dubai 24/7'},
        {img: advantages, text: 'Insurance without a deductible for each car'},
        {img: advantages, text: 'No video or audio recording in the car'},
        {img: advantages, text: '24/7 technical support'},
        {img: advantages, text: 'All models have a premium package'},
    ]

    return (
        <section className={styles.advantages}>
            <h2 className={styles.title}>Advantages</h2>
            <div className={styles.advWrap}>
                {adv.map((item, i) => {
                return (
                    <div key={i} className={styles.adv}>
                        <span></span>
                        <img src={item.img} alt=""/>
                        <p>{item.text}</p>
                    </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Advantages;