import React from "react";
import styles from "./Info.module.css";

export default function Info() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img className={styles.avatar} src="beach-pic.png" alt="ufukweni"/>
            </header>  
            <div className={styles.bio}>
            <h2 className={styles.name}>Godwin Mshiu</h2>
            <p className={styles.title}>Frontend Developer</p>
            <a className={styles.small} href="https://mshiu-portfolio.netlify.app/" alt=" " >My Website</a>
            <div className={styles.contacts}>
            <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href="mailto:mshiu95@com"
          >
            <img className={styles.icons} src="Email-logo.png" alt="" /> Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/godwin-mshiu/"
          >
            <img className={styles.icons} src="LinkedIn-logo.png" alt="" />
            LinkedIn
          </a>
            </div>
            </div>
        </div>
    )
}