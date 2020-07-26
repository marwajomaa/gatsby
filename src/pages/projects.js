import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        github
        description
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="All projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
