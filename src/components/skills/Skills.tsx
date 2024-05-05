import { Box, Grid } from "@mui/material";
import "./Skills.css";
// import NEXT from "../../assets/next.png";
// import ANGULAR from "../../assets/angular.png";
import sk_Data from "./data_skills";

export default function Skills() {
  return (
    <>
      <div id="skills" className="skills">
        {sk_Data.frontend.map((item, index) => (
          <Box sx={{ flexGrow: 1 }}>
            <Grid key={index} container spacing={item.spacing}>
              <Grid item xs={item.xs}>
                <div className={item.class__skill}>{item.name}</div>
              </Grid>

              {/* <Grid item xs={4}>
                {sk_Data.frontend.map((item, index) => (
                  <div key={index} className={item.class__box}>
                    <img src={item.image} alt="nextjs" />
                  </div>
                ))}
              </Grid> */}
            </Grid>
          </Box>
        ))}
      </div>
    </>
  );
}

{
  /* <Grid item xs={4}>
<div className="skill__box">
  <img src={ANGULAR} alt="nextjs" />
</div>
</Grid> */
}
