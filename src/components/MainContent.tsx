import React from "react";
import styles from "../styles/Home.module.css";

const MainContent = ({children}: {children: any}) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export default MainContent;