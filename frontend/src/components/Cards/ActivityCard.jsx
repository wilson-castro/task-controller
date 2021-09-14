import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { cardContainer } from './styles';

function CardTemplate({ text }) {
  return (
    <Card style={cardContainer}>
      <CardContent>
        <Typography gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardTemplate;