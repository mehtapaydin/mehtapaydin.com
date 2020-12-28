import React from "react"
import Layout from "../components/layout"


const AboutPage = () => {
  return (
    <Layout>
        <header className="intro">
               <div className="container">
                    <div className="grid">
                         <div className="column-xs-12 column-sm-12 column-md-8">
                              <p className="lead">
                                My aspiration is to simplify complex systems and make it easy to use and accessible for everybody. I am also intrigued by exploring new tools, platforms, methodologies to find new ways to create enriching experiences through interactive media. I have 5+ years experience as an interaction and experience designer and I worked mainly on digital experience design for mobile applications in diverse platforms, including IOS, Android, and Web. During my master's study, I have also involved in several projects such as creative web applications, Voice User Interfaces and VR/AR applications. I am curious about how technology can make our lives easier, make us connected and more engaged and I keep exploring how this changes are transforming our interactions with each other and the society. If you have any ideas to share or just to say hello feel free to get in touch with me.
                             </p>
                              {/* <p className="lead"><AnchorLink className="link" href="#about">More about me</AnchorLink></p> */}
                         </div>
                    </div>
               </div>
          </header>

      
    </Layout>       
  )
}

export default AboutPage