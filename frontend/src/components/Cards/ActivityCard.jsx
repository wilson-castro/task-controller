import React from 'react';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

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