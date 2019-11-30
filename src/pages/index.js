import React from "react"
import Layout from "../components/layout"
import style from "../styles/index.module.css"


const HomePage = () => {
  return (
      <Layout>
        <div className={style.narrow}>
        <h1 className={style.h1}> Hi, I am Mehtap, a Designer, Creative Technologist based in New York</h1>
        <p>
        I'm currently working as an Interaction Designer at Google, creating solutions for Google Cloud products and services. 
        While I am working on my portfolio you can check out some of my <a href="https://glitch.com/@mehtapaydin" target="_blank">glitches </a> ,<a href="https://vsco.co/uzgunumleyla" target="_blank">photographs </a>
        </p>
       </div>
      </Layout>
    )
}


export default HomePage
