import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        background: 'linear-gradient(301deg, #FCD34D, #F9A8D4)',
        fontFamily: "Nunito !important",
        height: '97.7vh',
      },
      "*": {
        fontFamily: "Nunito !important",
        textTransform: "capitalize !important",
      },
      
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
