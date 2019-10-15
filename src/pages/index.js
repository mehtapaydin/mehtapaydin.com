import React from "react"
import Layout from "../components/layout"
import style from "../styles/index.module.css"
import Projects from "../components/projects"


// import styled from "styled-components"

const HomePage = () => {
  return (
      <Layout>
        <div>
        <h1 className={style.h1}> Hi, I am Mehtap, an interaction designer, creative technologist based in New York.</h1>
       </div>
        <p>
        Currently I've been creating solutions for cloud technologies at Google Cloud team. My aspiration is to simplify complex systems and make it easy to use and accessible for everybody. I am also intrigued by exploring new tools, platforms, methodologies to find new ways to create enriching experiences through interactive media.
        </p>

        <Projects /> 
      </Layout>
    )
}


export default HomePage
