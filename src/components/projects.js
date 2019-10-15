import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
    const data = useStaticQuery (graphql`
        query Images {
            images: allFile ( filter: { relativeDirectory: {eq: "gallery" } }) {
                nodes {
                    id
                    childImageSharp {
                        fixed (width:360, height:360) {
                          ...GatsbyImageSharpFixed
                        }
                        
                      }
                }
            }
             image: file(relativePath: {eq: "MAlogo.png"}) {
                id
                childImageSharp {
                  fixed (
                      width:400
                  ){
                    ...GatsbyImageSharpFixed
                  }
                  
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
             }
              
              
        }`
      
    )


    console.log(data);
    return (
    //   <div>
    //       <h2> My projects! </h2>
    //       <Img fixed={data.image.childImageSharp.fixed}/>
    //       <Img fluid={data.image.childImageSharp.fluid}/>
    //   </div>

    <div className = "gallery" >
        {data.images.nodes.map(image => (
            <Img key={image.id} fixed={image.childImageSharp.fixed} />
        ))}
    </div>
    )
  }
  
  export default Projects





