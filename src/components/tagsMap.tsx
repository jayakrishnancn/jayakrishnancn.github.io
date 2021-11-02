import { FaRobot } from "@react-icons/all-files/fa/FaRobot"
import { GrMysql } from "@react-icons/all-files/gr/GrMysql"
import { IoLogoFirebase } from "@react-icons/all-files/io5/IoLogoFirebase"
import { SiCodeigniter } from "@react-icons/all-files/si/SiCodeigniter"
import { SiDjango } from "@react-icons/all-files/si/SiDjango"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { SiJquery } from "@react-icons/all-files/si/SiJquery"
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify"
import { SiPython } from "@react-icons/all-files/si/SiPython"
import { SiReact } from "@react-icons/all-files/si/SiReact"
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript"
import { SiStripe } from "@react-icons/all-files/si/SiStripe"
import { SiWordpress } from "@react-icons/all-files/si/SiWordpress"
import { DiGulp } from "@react-icons/all-files/di/DiGulp"
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap"
import { SiSass } from "@react-icons/all-files/si/SiSass"
import { SiPhp } from "@react-icons/all-files/si/SiPhp"
import * as React from "react"

const Tag = ({
  tag = "",
  Icon,
  size = "1em",
  children,
  color,
}: {
  tag: string
  Icon?: any
  size?: string | number
  children?: any
  color?: string
}) => (
  <span
    className={
      `text-muted ` + (color ? `group-hover:${color}` : "text-gray-600")
    }
  >
    {tag} {Icon && <Icon className="inline-block" size={size} />}
    {children}
  </span>
)

const Tags = {
  Typescript: (
    <Tag tag="Typescript" Icon={SiTypescript} color="text-blue-700" />
  ),
  Firebase: (
    <Tag tag="Firebase" Icon={IoLogoFirebase} color="text-yellow-500" />
  ),
  reCaptcha: <Tag tag="reCaptcha" Icon={FaRobot} color="text-blue-400" />,
  netlify: <Tag tag="Netlify" Icon={SiNetlify} color="text-green-500" />,
  Javascript: (
    <Tag tag="Javascript" Icon={SiJavascript} color="text-yellow-500" />
  ),
  Codeigniter: (
    <Tag tag="Codeigniter" Icon={SiCodeigniter} color="text-pink-600" />
  ),
  Django: <Tag tag="Django" Icon={SiDjango} color="text-green-900" />,
  JQuery: <Tag tag="JQuery" Icon={SiJquery} color="text-blue-800" />,
  React: <Tag tag="ReactJS" Icon={SiReact} color="text-blue-500" />,
  Github: <Tag tag="Github" Icon={SiGithub} color="text-gray-800" />,
  Python: <Tag tag="Python" Icon={SiPython} color="text-blue-900" />,
  Stripe: <Tag tag="Stripe" Icon={SiStripe} color="text-purple-700" />,

  Wordpress: <Tag tag="Wordpress" Icon={SiWordpress} color="text-blue-800" />,
  Gulp: <Tag tag="Gulp" Icon={DiGulp} color="text-red-700" />,
  Bootstrap: <Tag tag="Bootstrap" Icon={SiBootstrap} color="text-purple-500" />,
  Sass: <Tag tag="Sass" Icon={SiSass} color="text-pink-600" />,
  PHP: <Tag tag="PHP" Icon={SiPhp} color="text-purple-900" />,
  MySQL: <Tag tag="MySQL" Icon={GrMysql} color="text-yellow-700" />,
}
export default Tags
