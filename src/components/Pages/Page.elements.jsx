import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "2.5rem",
  color: theme.palette.primary.main,
  lineHeight: 1.5,

  [theme.breakpoints.down("xs")]: {
    fontSize: "1em",
  },
}));

export const EstimateButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5b427",
  borderRadius: "50px",
  color: "white",
  marginRight: "40px",
  width: "145px",
  fontFamily: "Pacifico",
  fontSize: "1rem",
  textTransform: "none",
  whiteSpace: "nowrap",

  "&:hover": {
    backgroundColor: "#f7c04b",
  },
}));

export const LearnButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  borderRadius: "50px",
  borderWidth: 2,
  color: theme.palette.primary.main,
  height: "45px",
  width: "145px",
  fontFamily: "Roboto",
  fontSize: "0.9rem",
  fontWeight: "bold",
  textTransform: "none",
}));

export const MainContainer = styled(Grid)(({ theme }) => ({
  marginTop: "5em",

  [theme.breakpoints.down("md")]: {
    marginTop: "3em",
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: "2em",
  },
}));

export const HeroTextContainer = styled(Grid)(({ theme }) => ({
  minWidth: "21.5rem",
  marginLeft: "1em",
  [theme.breakpoints.down("xs")]: {
    marginLeft: 0,
  },
}));

export const Annimation = styled(Grid)(({ theme }) => ({
  maxWidth: "50em",
  minWidth: "21em",
  marginTop: "2em",
  marginLeft: "10%",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "30em",
  },
}));
