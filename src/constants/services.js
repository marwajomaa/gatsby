import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Writing well designed, testable, efficient code by using best software development practices.
           with experience in: Working with command lines, Writing modules, DevOps practices, Responsive design, Agile software development, Front-end systems, Server-side scripting
    `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `creating the design and layout of a website or web pages. And working on a brand new website or updating an already existing site.
      `,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `creating programs for smartphones, tablets and computers which can work in a range of industries and across a number of platforms.`,
  },
]
