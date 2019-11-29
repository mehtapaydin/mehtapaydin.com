import React from "react"
import footerStyles from "../styles/footer.module.css"
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

const Footer = () => {
    return (
      <footer className={footerStyles.container}>
           <div className={footerStyles.socialContainer}>
              <ul className={footerStyles.socialList}>
                  <li className={footerStyles.socialListItem}>
                    <a  className={footerStyles.socialLinks} href="https://github.com/mehtapaydin"   target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    </li>

                    <li className={footerStyles.socialListItem} >
                    <a className={footerStyles.socialLinks} href="https://www.linkedin.com/in/mehtapaydin" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    </li>

                    <li className={footerStyles.socialListItem}>
                    <a className={footerStyles.socialLinks} href="https://vimeo.com/mehtap" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faVimeoV} size="2x" />
                    </a>
                    </li>

                    <li className={footerStyles.socialListItem}>
                    <a className={footerStyles.socialLinks} href="https://www.behance.net/uzgunumleyla" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faBehance} size="2x" />
                    </a>
                    </li>

                    <li className={footerStyles.socialListItem}>
                    <a className={footerStyles.socialLinks} href="https://twitter.com/uzgunumleyla" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    </li>

                    <li className={footerStyles.socialListItem}>
                    <a className={footerStyles.socialLinks} href="https://medium.com/@mehtapaydin" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faMediumM} size="2x" />
                    </a>
                    </li>

                    <li>
                    <a className={footerStyles.socialLinks} href="mailto:mehtapaydinnnn@gmail.com" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    </li>
                </ul>
          </div>
          <div> <h5> Mehtap Aydin, ©2019 </h5> </div>
      </footer>
    )
  }

export default Footer
