import React from "react"
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
      <footer className="container">
           <div className="footer-container">
              <ul className="social-list">
                  <li className="social-list-item">
                    <a  className="social-links" href="https://github.com/mehtapaydin"   target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>
                    </li>

                    <li className="social-list-item">
                    <a className="social-links" href="https://www.linkedin.com/in/mehtapaydin" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    </li>

                    <li className="social-list-item">
                    <a className="social-links" href="https://vimeo.com/mehtap" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faVimeoV} size="2x" />
                    </a>
                    </li>

                    <li className="social-list-item">
                    <a className="social-links" href="https://www.behance.net/uzgunumleyla" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faBehance} size="2x" />
                    </a>
                    </li>

                    <li className="social-list-item" >
                    <a className="social-links" href="https://twitter.com/uzgunumleyla" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    </li>

                    <li className="social-list-item" >
                    <a className="social-links" href="https://medium.com/@mehtapaydin" target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faMediumM} size="2x" />
                    </a>
                    </li>

                    <li className="social-list-item">
                    <a className="social-links" href="mailto:mehtapaydinnnn@gmail.com" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    </li>
                </ul>
          </div>
           <div className="signature"> 
            <p> Designed and built by Mehtap Aydin, ©2020 </p> 
          </div>
      </footer>
    )
  }

export default Footer
