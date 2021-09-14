import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { cardContainer } from './styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  text: {
    fontSize: 12,
  },
});

function CardTemplate({ text }) {
  const classes = useStyles();

  return (
    <Card style={cardContainer} className={classes.root}>
      <CardContent >
        <Typography className={classes.text} gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default CardTemplate;