import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// import { cardStyle } from './styles';

const useStyles = makeStyles({
  root: {

  },
  typography: {
    fontWeight: 400,
    fontSize: 13,
    margin: 8,
  },
  card: {
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

function CardTemplate({ text }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* <CardContent className={classes.cardContent}> */}
      <Typography className={classes.typography} gutterBottom>
        {text}
      </Typography>
      {/* </CardContent> */}
    </Card >
  )
}

export default CardTemplate;