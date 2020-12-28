import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
        links
      }
      html
    }
  }
`

const Project = (props) => {

  return (
    <Layout>
      <div className="post-content">
        <div className="grid">
          <div className="column-xs-12 column-sm-12 column-md-12">
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h3>{props.data.markdownRemark.frontmatter.links}</h3>
          </div>

          <div className="column-xs-12 column-sm-12 column-md-8">
            <h4>{props.data.markdownRemark.frontmatter.links}</h4>
            <h4>{props.data.markdownRemark.frontmatter.links}</h4>
            <h4>{props.data.markdownRemark.frontmatter.links}</h4>
          </div>

          <div className="column-xs-12 column-sm-12 column-md-4">
            <h4>{props.data.markdownRemark.frontmatter.links}</h4>
            <h4>{props.data.markdownRemark.frontmatter.links}</h4>
            <h4>{props.data.markdownRemark.frontmatter.links}</h4>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export default Project

