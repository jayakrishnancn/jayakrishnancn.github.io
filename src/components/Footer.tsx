import React from "react"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaCodepen } from "@react-icons/all-files/fa/FaCodepen"

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="py-6 px-4 bg-gray-900 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-300 sm:text-center"></span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a
            href="https://github.com/jayakrishnancn"
            target="_blank"
            className="text-gray-400 text-xl hover:text-white"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jayakrishnancn/"
            target="_blank"
            className="text-gray-400 text-xl hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codepen.io/jayakrishnancn/"
            target="_blank"
            className="text-gray-400 text-xl hover:text-white"
          >
            <FaCodepen />
          </a>
          <a
            href="https://www.instagram.com/jayakrishnancn/"
            target="_blank"
            className="text-gray-400 text-xl hover:text-white"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
