import React from "react"
// import { Link } from "gatsby"

const Header = () => (
  <header className="intro">
    <div className="container">
      <div className="grid">
      <div className="column-xs-12 column-sm-12 column-md-10">
        <h1>Hi, I am Mehtap, an interaction designer, creative technologist based in New York.</h1>
        <p className="lead">I'm currently working as an Interaction Designer at Google, creating solutions for Google Cloud products and services. I love spending time on creating experimental stuff by using Web technologies, cooking, baking, reading and learning.
              While I am working on my portfolio you can check out some of my works at <a href="https://glitch.com/@mehtapaydin" target="_blank" rel="noreferrer noopener">Glitch.com </a>, <a href="https://github.com/mehtapaydin" target="blank" rel="noreferrer noopener"> Github </a> or take a look at <a href="https://vsco.co/uzgunumleyla" target="_blank" rel="noreferrer noopener">photographs</a> I took.
              </p>
        {/* <p className="lead"><AnchorLink className="link" href="#about">More about me</AnchorLink></p> */}
        </div>
      </div>
    </div>
  </header>
)

export default Header