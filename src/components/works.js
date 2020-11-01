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
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid
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
        <div className="container">
            <div className="grid">
                <h4> Works will show up here!</h4>
                    <div className="wrapper" >
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <div>
                                    <Link to={`/project/${edge.node.fields.slug}`}>
                                        <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
                                        <h2>{edge.node.frontmatter.title}</h2>
                                        <p> {edge.node.frontmatter.date}</p>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </div>
    )

}


export default Works