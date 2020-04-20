import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//allMarkdownRemark for all posts, MarkdownRemark for a single post

const Works = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            thumbnail {
                                childImageSharp {
                                    fixed (width:360, height:360) {
                                        ...GatsbyImageSharpFixed
                                      }
                                }
                                
                            }
                            
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)


    return (
        <div>
            <h4> Works will show up here!</h4>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge)=>{
                        return(
                            <li>
                                
                                <Link to= {`/project/${edge.node.fields.slug}`} >
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p> {edge.node.frontmatter.date}</p>
                                     <Img fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed}/>
                                </Link> 
                            </li>
                        )
                    })}
                </ol> 
        </div>
    )

}


export default Works