interface Skills {
  header: Header[];
  boxes: Boxes[];
}

interface Header {
  name: string;
  class__skill?: string;
  class__box?: string;
  spacing: number;
  image: string;
  xs?: number;
  sm?: number;
  md?: number;
}

interface Boxes {
  name: string;
  class__skill?: string;
  class__box?: string;
  spacing: number,
  image: string;
  xs?: number;
  sm?: number;
  md?: number;
}

const myImage = new Image();
myImage.src = "../../assets/next.png";

const sk_Data: Skills = {
  header: [
    {
      name: "frontend",
      class__skill: "skill__frontend",
      class__box: "skill__box",
      spacing: 0.4,
      image: "sjjsjs",
      xs: 12,
    },
    {
      name: "backend",
      class__skill: "skill__frontend",
      class__box: "skill__box",
      spacing: 0.4,
      image: "sjjsjs",
      xs: 12,
    },
  ],

  boxes: [
    {
      name: "backend",
      class__skill: "skill__frontend",
      class__box: "skill__box",
      spacing: 0.4,
      image: "sjjsjs",
      xs: 12,
    },
  ],
};

export default sk_Data;
