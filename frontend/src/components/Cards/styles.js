import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {

  },
  typography: {
    fontWeight: 400,
    fontSize: 13,
    margin: 8,
  },
  card: {
    minWidth: "240px",
    margin: "5px",
    marginBottom: 8,
    position: "relative",
    cursor: "pointer",
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: "#f5f6f7"
    },
    borderRadius: "0",
    overflowWrap: "break-word",
    minHeight: "18px",

  },
  // cardContent: {
  //   paddingTop: 5,
  //   paddingLeft: 6,
  //   height: "fit-content",
  // }
});