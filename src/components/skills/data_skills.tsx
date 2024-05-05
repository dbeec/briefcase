interface Skills {
  boxFront: BoxFront[];
  boxBack: BoxBack[];
}

interface BoxFront {
  class?: string;
  image: string;
  xs?: number;
  sm?: number;
  md?: number;
}

interface BoxBack {
  class?: string;
  image: string;
  xs?: number;
  sm?: number;
  md?: number;
}

const myImage = new Image();
myImage.src = "../../assets/next.png";

const sk_Data: Skills = {
  boxFront: [
    {
      class: "skill__box",
      image: "sjjsjs",
      xs: 4,
    },
    {
      class: "skill__box",
      image: "sjjsjs",
      xs: 4,
    },
    {
      class: "skill__box",
      image: "sjjsjs",
      xs: 4,
    },
    {
      class: "skill__box",
      image: "sjjsjs",
      xs: 4,
    },
  ],

  boxBack: [
    {
      class: "skill__backend",
      image: "sjjsjs",
      xs: 12,
    },
  ],
};

export default sk_Data;
