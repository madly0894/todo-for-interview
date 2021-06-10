import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme);

  return {
    Container: {
      height: "100vh"
    },
    TextField: {
      flex: 1,
      marginRight: theme.spacing(1)
    },
    Box: {
      height: "calc(100vh - 138px)",
      overflowY: "auto"
    },
    Typography: {
      marginRight: theme.spacing(3.5)
    },
    Button: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.spacing(1.75)
    },
    popper: {
      top: `${theme.spacing("-2.25")}px !important`
    },
    tooltip: {
      maxWidth: "none"
    }
  };
});

export default useStyles;
