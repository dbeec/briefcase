import {GrHomeRounded} from 'react-icons/gr'
import {MdOutlineAnnouncement} from 'react-icons/md'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'

export const Menu = [
  {
    title: "home",
    url: "/",
    icon: <GrHomeRounded />
  },
  {
    title: "about me",
    url: "/about",
    icon: <MdOutlineAnnouncement />
  },
  {
    title: "tsx",
    url: "/",
    class: "brand"
  },
  {
    title: "briefcase",
    url: "/",
    icon: <BsBriefcase />
  },
  {
    title: "contact me",
    url: "/",
    icon: <AiOutlineContacts />
  },
]