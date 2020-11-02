import React from "react"
import "../styles/layout.scss"
import Footer from "../components/footer"
import Nav from "../components/nav"

const Layout = (props) => {
  return (
    <div>
      <Nav />
        <div> 
           {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout





