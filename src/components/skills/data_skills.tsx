import next from '../../assets/next.png';
import ss from '../../assets/descarga.svg';


interface Skills {
  boxFront: BoxFront[];
  boxBack: BoxBack[];
}

interface BoxFront {
  class?: string;
  image?: string;
  xs?: number;
  sm?: number;
  md?: number;
}

interface BoxBack {
  class?: string;
  image?: string;
  xs?: number;
  sm?: number;
  md?: number;
}

const sk_Data: Skills = {
  boxFront: [
    {
      class: "skill__box",
      image: next,
      xs: 3,
    },
    {
      class: "skill__box",
      image: ss,
      xs: 3,
    },
    {
      class: "skill__box",
      image: ss,
      xs: 3,
    },
    {
      class: "skill__box",
      image: "NEXT JS",
      xs: 3,
    },
    {
      class: "skill__box",
      image: "NEXT JS",
      xs: 3,
    },
    {
      class: "skill__box",
      image: "NEXT JS",
      xs: 3,
    },
    {
      class: "skill__box",
      image: "NEXT JS",
      xs: 3,
    },
    {
      class: "skill__box",
      image: "NEXT JS",
      xs: 3,
    },
  ],

  boxBack: [
    {
      class: "skill__box__border",
      image: "NEXT JS",
      xs: 6,
    },
    {
      class: "skill__box__border",
      image: "NEXT JS",
      xs: 6,
    },
  ],
};

export default sk_Data;
