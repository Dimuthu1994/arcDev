import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const MyFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: 1302,
  position: "relative",
}));

export const MyAdornment = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom", // otherwise small blue bottom

  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}));

export const MyGrid = styled(Grid)(({ theme }) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const MyIconContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  marginTop: "-5em",
  right: "1em",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-3em",
  },
}));

export const MyIcon = styled("img")(({ theme }) => ({
  height: "4em",
  width: "4em",

  [theme.breakpoints.down("sm")]: {
    width: "2em",
    height: "2em",
  },
}));
