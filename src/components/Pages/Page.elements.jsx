import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "2.5rem",
  color: theme.palette.primary.main,
  lineHeight: 1.5,
  // [theme.breakpoints.down("sm")]: {
  //   fontSize: "0.6rem",
  // },
}));
