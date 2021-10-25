import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
interface SociallinksType {
  link: string
  icon: any
  size?: any
}
const SOCIALLINKS: SociallinksType[] = [
  { link: "https://www.linkedin.com/in/jayakrishnancn/", icon: faLinkedinIn },
  { link: "https://github.com/jayakrishnancn", icon: faGithub },
  { link: "https://codepen.io/jayakrishnancn/", icon: faCodepen },
  { link: "https://www.instagram.com/jayakrishnancn/", icon: faInstagram },
]

export default SOCIALLINKS
