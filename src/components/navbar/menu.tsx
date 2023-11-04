import {BiHomeAlt2} from 'react-icons/bi'
import {MdOutlineAnnouncement} from 'react-icons/md'
import {BsBriefcase} from 'react-icons/bs'
import {LuContact} from 'react-icons/lu'


export const Menu = [
  {
    title: "home",
    url: "#home",
    icon: <BiHomeAlt2 />,
    class: "show"

  },
  {
    title: "about me",
    url: "#about",
    icon: <MdOutlineAnnouncement />,
    class: "show"
  },
  {
    title: "ts",
    url: "/",
    class: "brand"
  },
  {
    title: "briefcase",
    url: "#",
    icon: <BsBriefcase />,
    class: "show"
  },
  {
    title: "contact me",
    url: "#",
    icon: <LuContact />,
    class: "show"
  },
]