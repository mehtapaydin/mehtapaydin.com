import React from "react"
import Layout from "../components/layout"
// import {Link} from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
        <header className="intro">
               <div className="container">
                    <div className="grid">
                         <div className="column-xs-12 column-sm-12 column-md-8">
                         <h1>I'd love to talk! Email me at the address below</h1>
                              <p className="lead"> <a  className="link" href="mailto:mehtapaydinnnn@gmail.com"> contact me</a></p>
                              </div>
                     </div>
                </div>
          </header>
    </Layout>       
  )
}

export default ContactPage