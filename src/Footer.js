import React from "react";
import { SocialIcon } from 'react-social-icons';
import styles from "./Footer.module.css"


export default function Footer() {
    return (
        <footer className={styles.footer}>
           <div className={styles.socialMedia}>
           <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
            href="https://github.com/gmshiu"
           > 
           <SocialIcon url="https://github.com/gmshiu" className={styles.github}/>
           </a>
           <a >
            <SocialIcon url="https://linkedin.com/in/godwin-mshiu"/>
           </a>
           <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
           >
           <SocialIcon url="https://twitter.com/G_mshiu" className={styles.socialIcons1}   />
            
           </a>
           </div>
        </footer>
    );
}