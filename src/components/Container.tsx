import React from 'react';
import styles from '../styles/Home.module.css';

const Container = ({children}: {children: any}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;
