import {GrHomeRounded} from 'react-icons/gr'
import {MdOutlineAnnouncement} from 'react-icons/md'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'

export const Menu = [
  {
    title: "home",
    url: "/",
    icon: <GrHomeRounded />,
    class: "show none"

  },
  {
    title: "about me",
    url: "/about",
    icon: <MdOutlineAnnouncement />,
    class: "show none"
  },
  {
    title: "tsx",
    url: "/",
    class: "brand"
  },
  {
    title: "briefcase",
    url: "/",
    icon: <BsBriefcase />,
    class: "show none"
  },
  {
    title: "contact me",
    url: "/",
    icon: <AiOutlineContacts />,
    class: "show none"
  },
]