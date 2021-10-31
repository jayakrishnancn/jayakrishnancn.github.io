import React from "react"
import ArrowSlide from "./ArrowSlide"

const Experience = () => {
  return (
    <div className="mt-28 max-w-md mx-auto text-gray-500">
      <h1 className="text-center uppercase mb-16 underline">Experience</h1>
      <div>
        <h2 className="mb-2">Envestnet</h2>
        <span className="font-bold text-gray-500">Senior Engineer</span>
        <span className="font-bold text-gray-400 ml-2 pl-2 text-sm border-l-2">
          Jun 2020 - Present
        </span>
        <p className="text-sm my-1 text-justify text-gray-400">
          Full stack developer for leading Asset Management platform. Experience
          in React, Typescript, Javascript, Java, Spring, Spring boot, AWS.
        </p>
        <a href="#achievement" className="text-sm float-right">
          <ArrowSlide>More</ArrowSlide>
        </a>
      </div>
      <div>
        <h2 className="mt-10 mb-2">Tata Consultancy Services</h2>
        <span className="font-bold text-gray-500">Systems Engineer</span>
        <p className="text-sm my-1 text-justify text-gray-400">
          Worked on modernization of policy Administration system for a leading
          insurance company based in South Africa.Had an onsite exposure to work
          closely with clients, as a part I went to Capetown (client
          headquarter), to provide my service.Worked on Performance optimization
          of java based applications.
        </p>
        <a href="#achievement" className="text-sm float-right">
          <ArrowSlide>More</ArrowSlide>
        </a>
      </div>
    </div>
  )
}
export default Experience
