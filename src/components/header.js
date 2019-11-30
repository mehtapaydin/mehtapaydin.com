import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.css"


const Header = () => {
    return (
      <div>
          <header className={headerStyles.header}>

            <ul className={headerStyles.navList}>
{/* 
                <li className={headerStyles.listItemLeft} >
                  <Link className={headerStyles.title} to="/" >
                           M
                  </Link>
                </li>

                <li className={headerStyles.listItem}>
                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact/">Contact</Link>
                </li>

                <li className={headerStyles.listItem}>
                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about/">About</Link>
                </li>

                <li className={headerStyles.listItem}>
                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                </li> */}

            </ul>
           </header>
      </div>
    )
  }

export default Header
