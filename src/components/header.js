import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"



const Header = () => {
    return (
      <div>
          <header className={headerStyles.header}>
              <h3>
                 <Link className={headerStyles.title} to="/" >
                  MEHTAPAYDIN
                 </Link>
             </h3>
             <ul className={headerStyles.navList}>
                   <li>
                   <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                  </li>
                   <li>
                   <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about/">About</Link>
                   </li>
                   <li>
                   <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact/">Contact</Link>
                   </li>
             </ul>
           </header>
      </div>
    )
  }

export default Header
