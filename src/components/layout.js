import React from "react"
import "../styles/layout.scss"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = (props) => {
  return (
    <div>
      <Header />
        <div> 
           {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout





// The original code from the tutorial below ------>

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )


// export default ({ children }) => (
//   <div style={{ margin: `3rem auto`, maxWidth: 960, padding: `0 1rem` }}>
//       <header style={{ marginBottom: `1.5rem` }}>
//          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//            <h3 style={{ display: `inline`, fontfamily: 'Futura', fontSize:` 0.8em`,fontWeight: '500'}}>MEHTAPAYDIN</h3>
//          </Link>
//          <ul style={{ listStyle: `none`, float: `right` }}>
//            <ListLink to="/">Home</ListLink>
//            <ListLink to="/about/">About</ListLink>
//            <ListLink to="/contact/">Contact</ListLink>
//          </ul>
//        </header>
//     {children}
//   </div>
// )
