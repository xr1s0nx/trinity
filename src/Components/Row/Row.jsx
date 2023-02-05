import React from 'react';
import styles from './Row.module.scss';

function Row() {

    const cars = [
        'Lexus',
        'Mercedes',
        'Audi',
        'BMW',
        'Rolls-Royce',
        'Cadillac',
        'Maserati',
        'Lamborghini',
        'Bentley',
        'Porsche',
    ]

    const [active, setActive] = React.useState('Cadillac');

    return (
        <section className={styles.Row}>
            <div className={styles.rowWrap}>
                {cars.map((item, i) => {
                    return (
                        <div onClick={() => setActive(item)} key={i} className={active === item ? `${styles.item} ${styles.active}` : styles.item}>
                            <p><nobr>{item}</nobr></p>
                        </div>
                    )
                })}
            </div>

        </section>
    );
}

export default Row;