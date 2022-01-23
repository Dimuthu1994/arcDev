import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ButtonArrow from "../ui/5.1 ButtonArrow";
import { Typography } from "@mui/material";
import { LandingTypography } from "./Page.elements";

export default function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid sm item>
              <LandingTypography align="center" variant="h2">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </LandingTypography>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">
                    Learn More
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                maxWidth: "50em",
                minWidth: "21em",
                marginTop: "2em",
                marginLeft: "10%",
              }}
            >
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
