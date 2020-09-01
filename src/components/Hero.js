import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "hero-img4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid: imgSrc },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>I'm Marwa</h1>
            <h4>freelance web developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks styleClass="hero-links" />
          </div>
        </article>
        <Image fluid={imgSrc} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
