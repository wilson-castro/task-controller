import React from 'react';

import '../../styles/ActivityCard.css'

function CardTemplate({ card }) {
  return (
    <div className="card">
      <div className="Card-Content">
        <div className="Card-Text">{card.text}</div>
        <div className="Card-DeadLine">{card.deadline}</div>
      </div>
    </div>

  )

}

export default CardTemplate;