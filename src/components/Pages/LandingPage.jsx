import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { Grid } from "@mui/material";
import ButtonArrow from "../ui/5.1 ButtonArrow";
import theme from "../ui/theme";

import {
  Annimation,
  EstimateButton,
  HeroTextContainer,
  LandingTypography,
  LearnButton,
  MainContainer,
} from "./Page.elements";

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
      <MainContainer container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <HeroTextContainer sm item>
              <LandingTypography align="center" variant="h2">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </LandingTypography>
              <Grid container justifyContent="center" sx={{ marginTop: "1em" }}>
                <Grid item>
                  <EstimateButton variant="contained">
                    Free Estimate
                  </EstimateButton>
                </Grid>
                <Grid item>
                  <LearnButton variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="blue" />
                  </LearnButton>
                </Grid>
              </Grid>
            </HeroTextContainer>
            <Annimation sm item>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Annimation>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  );
}
