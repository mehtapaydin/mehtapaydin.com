import React from "react"
import Layout from "../components/layout"
import Works from "../components/works"
import Header from "../components/header"
// import Images from "../components/images"


const HomePage = () => {
  return (
    <Layout>
      <Header />
      <section id="work">
        {/* <Images /> */}
        <Works />
      </section>  
    </Layout>
  )
}


export default HomePage

