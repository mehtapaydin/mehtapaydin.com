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
            <h2> Works will show up here!</h2>
            <div className="grid">
                <div className="column-xs-12 column-sm-12 column-md-4">
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <Link to={`/project/${edge.node.fields.slug}`}>
                                <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
                                <h2>{edge.node.frontmatter.title}</h2>
//                              <p> {edge.node.frontmatter.date}</p>
                            </Link>
                         )
                      })
                    }
                </div>
            </div>
        </div>
    )

}

export default Works





// Copy of working code 

// const Works = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         frontmatter {
//                             title
//                             date
//                             thumbnail {
//                                 childImageSharp {
//                                     fluid(maxWidth: 600) {
//                                         ...GatsbyImageSharpFluid
//                                       }
//                                 }

//                             }

//                         }
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)


//     return (
//         <div className="container">
//             <div className="grid">
//                 <h2> Works will show up here!</h2>
//                     <div className="column-xs-12 column-sm-12 column-md-4">
//                         {data.allMarkdownRemark.edges.map((edge) => {
//                             return (
//                                 <div>
//                                     <Link to={`/project/${edge.node.fields.slug}`}>
//                                         <Img fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid} />
//                                         <h2>{edge.node.frontmatter.title}</h2>
//                                         <p> {edge.node.frontmatter.date}</p>
//                                     </Link>
//                                 </div>
//                             )
//                         })}
//                     </div>
//             </div>
//         </div>
//     )

// }


// export default Works