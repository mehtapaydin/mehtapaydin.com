import React from "react"
import { Link } from "gatsby"
import footerStyles from "./header.module.css"
import Social from "../components/socialicons"



const Footer = () => {
    return (
      <footer>
          <ul className={footerStyles.navList}>
            <Social />
          </ul>

          <h5> Created by Mehtap Aydin, ©2019 </h5>
      </footer>
    )
  }

export default Footer
