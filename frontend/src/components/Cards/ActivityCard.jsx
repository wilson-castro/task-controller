import React from 'react';

import '../../styles/ActivityCard.css'
import { colorCheckBox } from '../../utils/colorCheckBox';
// import { BiSearch } from "react-icons/bi";

function CardTemplate(props) {
  const { card } = props
  return (
    < div className="card" >
      <div className="Card-Content">
        <div className="Card-Text">{card.text}</div>

        {card.dataDeadline !== "" && (
          <div className={`Card-DeadLine bg-${colorCheckBox(card)}`}>
            <div className="form-check" onMouseDown={() => console.log(props.list)}>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {card.dataDeadline}
              </label>
            </div>
          </div>
        )}

      </div>
    </div >

  )

}

export default CardTemplate;