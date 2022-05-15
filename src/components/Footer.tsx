import React from "react"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="py-6 px-4 bg-gray-900 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-300 sm:text-center"></span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <AiOutlineTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <AiFillGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
