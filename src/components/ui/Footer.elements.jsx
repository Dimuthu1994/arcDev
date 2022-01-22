import { styled } from "@mui/material/styles";

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
