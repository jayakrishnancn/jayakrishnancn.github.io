import React from "react"
import ArrowSlide from "./ArrowSlide"

const Experience = () => {
  return (
    <div className="mt-28 max-w-md mx-auto text-gray-500">
      <h1 className="text-center uppercase mb-16 underline">Experience</h1>
      <div className="exp">
        <h2 className="mb-2">Envestnet</h2>
        <span className="font-bold text-gray-500">Senior Engineer</span>
        <p className="text-sm my-1 text-justify text-gray-400">
          Full stack developer for leading Asset Management platform. Experience
          in React, Typescript, Javascript, Java, Spring, Spring boot, AWS.
        </p>
      </div>
      <div className="exp">
        <h2 className="mt-0 mb-2">Tata Consultancy Services</h2>
        <span className="font-bold text-gray-500">Systems Engineer</span>
        <p className="text-sm my-1 text-justify text-gray-400">
          Worked on modernization of policy Administration system for a leading
          insurance company based in South Africa.Had an onsite exposure to work
          closely with clients, as a part I went to Capetown (client
          headquarter), to provide my service.Worked on Performance optimization
          of java based applications.
        </p>
      </div>
      <div className="exp">
        <h2 className="mt-0 mb-2">Logidots</h2>
        <span className="font-bold text-gray-500">Intern & Developer</span>
        <p className="text-sm my-1 text-justify text-gray-400">
          Worked on web applications based on React, PHP and MySQL, Bootstrap
          etc.
        </p>
      </div>
    </div>
  )
}
export default Experience
