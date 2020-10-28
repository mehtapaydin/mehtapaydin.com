import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"



const Nav = () => (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="column-xs-12 column-sm-6">
            <figure class="avatar">
              <div class="avatar-block">
                {/* <Link href="/" aria-label="Katherine Kato"><Image backgroundColor="#c9decc" alt="Katherine Kato" /></Link> */}
                <Link href="/">Mehtap Aydin</Link>
              </div>
              <figcaption class="avatar-content">
                <span>Katherine Kato</span>
              </figcaption>
            </figure>
          </div>
          <div class="column-xs-12 column-sm-6">
            <ul>
              <li><AnchorLink href="#work">Work</AnchorLink></li>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
  
  export default Nav
