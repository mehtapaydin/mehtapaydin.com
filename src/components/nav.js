import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Mlogo from "../images/MLogo.png"



const Nav = () => (
    <nav>
        <div className="container">
            <div className="grid">
                <div className="column-xs-12 column-sm-6">
                    <figure className="avatar">
                        <div className="avatar-block">
                            <Link href="/"><img src={Mlogo} alt="Mehtap Aydin"></img></Link>
                        </div>
                        <figcaption className="avatar-content">
                            <span><h4>Mehtap Aydin</h4></span>
                        </figcaption>
                    </figure>
                </div>
                <div className="column-xs-12 column-sm-6">
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
