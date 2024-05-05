interface Skills {
  frontend: Frontend[];
  backend: Backend[];
}

interface Frontend {
  name: string;
  class__skill?: string;
  class__box?: string;
  spacing: number;
  image: string;
  xs?: number;
  sm?: number;
  md?: number;
}

interface Backend {
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
  frontend: [
    {
      name: "frontend",
      class__skill: "skill__frontend",
      class__box: "skill__box",
      spacing: 0.4,
      image: "sjjsjs",
      xs: 12,
    },
    {
      name: "frontend",
      class__skill: "skill__frontend",
      class__box: "skill__box",
      spacing: 0.4,
      image: "sjjsjs",
      xs: 12,
    },
  ],

  backend: [
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
