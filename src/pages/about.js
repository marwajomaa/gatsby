import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          title
        }
      }
    }
  }
`

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes: about },
  } = data
  const { title, info, stack } = about[0]
  return (
    <Layout>
      <section className="about-page">
        <SEO title="About" description="about webdev" />
        <div className="section-center about-center">
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
