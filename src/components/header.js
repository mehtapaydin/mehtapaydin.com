import React from "react"
import { Link } from "gatsby"


const Header = () => {
    return (
          <header className="container">
               <div className="grid"> 
                    <div className="col-span-6">
                         <Link className="title" to="/" >
                         MA
                         </Link>     
                    </div>
         

                    <div className="col-span-6">   
                         <ul className="nav-list"> 
                              <li className="list-item">
                                   <Link className="nav-item" activeClassName="active-nav-item" to="/contact/">Contact</Link>
                              </li>

                              <li className="list-item">
                                   <Link className="nav-item" activeClassName="active-nav-item" to="/about/">About</Link>
                              </li>

                              <li className="list-item">
                                   <Link className="nav-item" activeClassName="active-nav-item" to="/">Home</Link>
                              </li>
                         </ul>
                    </div>  
               </div>
           </header>
    )
  }

export default Header