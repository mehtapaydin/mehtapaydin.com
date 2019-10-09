import React from "react"
import styles from "../styles/socialicons.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faVimeoV,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons"

import {
  faEnvelope
} from "@fortawesome/free-regular-svg-icons"


export default function SocialFollow(){
  return(
    <div className={styles.socialContainer}>
        <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
              <a  className={styles.socialLinks} href="https://github.com/mehtapaydin"   target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              </li>

              <li className={styles.socialListItem} >
              <a className={styles.socialLinks} href="https://www.linkedin.com/in/mehtapaydin" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              </li>

              <li className={styles.socialListItem}>
              <a className={styles.socialLinks} href="https://vimeo.com/mehtap" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faVimeoV} size="2x" />
              </a>
              </li>

              <li className={styles.socialListItem}>
              <a className={styles.socialLinks} href="https://www.behance.net/uzgunumleyla" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faBehance} size="2x" />
              </a>
              </li>

              <li className={styles.socialListItem}>
              <a className={styles.socialLinks} href="https://twitter.com/uzgunumleyla" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              </li>

              <li className={styles.socialListItem}>
              <a className={styles.socialLinks} href="https://medium.com/@mehtapaydin" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faMediumM} size="2x" />
              </a>
              </li>

              <li>
              <a className={styles.socialLinks} href="mailto:mehtapaydinnnn@gmail.com" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              </li>

        </ul>

    </div>
    
  )
}
