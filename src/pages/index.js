import React from "react"
import Layout from "../components/layout"
import style from "../styles/index.module.css"


const HomePage = () => {
  return (
      <Layout>
        <div className={style.narrow}>
        <h1 className={style.h1}> Hi, I am Mehtap, a Designer, Creative Technologist based in New York</h1>
        <p>
        I'm currently working as an Interaction Designer at Google, creating solutions for Google Cloud products and services. I love spending time on creating experimental stuff by using Web technologies, biking, reading, cooking, baking and learning.
        While I am working on my portfolio you can check out some of my works at <a href="https://glitch.com/@mehtapaydin" target="_blank" rel="noreferrer noopener">Glitch.com</a>, <a href="https://github.com/mehtapaydin" target="blank" rel="noreferrer noopener">Github</a> or take a look at <a href="https://vsco.co/uzgunumleyla" target="_blank" rel="noreferrer noopener">photographs</a> I took.  
        </p>
       </div>
      </Layout>
    )
}


export default HomePage
