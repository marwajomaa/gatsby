import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, github, index, stack, title, image }) => {
  console.log(image, "iiiiiiiiiiiiii")
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div>
          <a href={github} className="project-icon" target="_blank">
            <FaGithubSquare />
          </a>
          <a href={github} className="project-icon" target="_blank">
            <FaShareSquare />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
