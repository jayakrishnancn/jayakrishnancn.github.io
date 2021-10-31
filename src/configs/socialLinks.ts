import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaCodepen } from "@react-icons/all-files/fa/FaCodepen"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

interface SociallinksType {
  link: string
  Icon: any
}
const SOCIALLINKS: SociallinksType[] = [
  { link: "https://www.linkedin.com/in/jayakrishnancn/", Icon: FaLinkedin },
  { link: "https://github.com/jayakrishnancn", Icon: FaGithub },
  { link: "https://codepen.io/jayakrishnancn/", Icon: FaCodepen },
  { link: "https://www.instagram.com/jayakrishnancn/", Icon: FaInstagram },
]

export default SOCIALLINKS
