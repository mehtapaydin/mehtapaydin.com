import React from "react"
import { Link } from "gatsby"
import footerStyles from "../styles/footer.module.css"
import Social from "../components/socialicons"



const Footer = () => {
    return (
      <footer className={footerStyles.container}>
          <Social />
          <h5> Created by Mehtap Aydin, ©2019 </h5>
      </footer>
    )
  }

export default Footer
