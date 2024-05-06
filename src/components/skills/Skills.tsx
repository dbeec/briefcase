import { Box, Grid } from "@mui/material";
import "./Skills.css";
import sk_Data from "./data_skills";
// import NEXT from "../../assets/next.png";
// import ANGULAR from "../../assets/angular.png";

export default function Skills() {
  return (
    <>
      <div id="skills" className="skills">
        <Box sx={{ width: "100%" }}>
          <Grid className="skills__gridcontent" container spacing={0.5}>
            <Grid item xs={12}>
              <div className="skill__frontend">frontend</div>
            </Grid>

            {sk_Data.boxFront.map((item, index) => (
              <Grid key={index} item xs={item.xs}>
                <div className={item.class}>
                  <img src={item.image} alt="nextjs" />
                </div>
              </Grid>
            ))}

            <Grid item xs={12}>
              <div className="skill__backend">backend</div>
            </Grid>

            {sk_Data.boxBack.map((item, index) => (
              <Grid key={index} item xs={item.xs}>
                <div className={item.class}>
                  <img src={item.image} alt="nextjs" />
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
