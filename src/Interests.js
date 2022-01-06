import React from "react";
import styles from "./Interest.module.css";

export default function Interests() {
    return (
        <div>
            <nav className={styles.interest}>
            <h3 className={styles.header}>Interests</h3>
            <p className={styles.texts}>Hiking, video games, cooking, podcasts, traveling, IPA fanatic</p>
            </nav>
        </div>
    )
}