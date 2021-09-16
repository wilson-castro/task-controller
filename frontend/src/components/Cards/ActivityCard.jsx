import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

import './ActivityCard.css'

// import { useStyles } from './styles';

function CardTemplate({ card }) {
  console.log(card);
  return (
    <div className="card">
      <div className="Card-Content">
        <div className="Card-Text">{card.text}</div>
        <div className="Card-DeadLine">{card.deadline}</div>
      </div>
    </div>

  )
  // return (
  //   <Card className={classes.root}>
  //     {/* <CardContent className={classes.cardContent}> */}
  //     <CardContent >
  //       {/* <Typography className={classes.typography} gutterBottom> */}
  //       <Typography >
  //         {text}
  //       </Typography>
  //     </CardContent>
  //   </Card >
  // )
}

export default CardTemplate;