import React from 'react';

import { FaBell } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";


import { StyledHeader, Button, Input, StyledInputGroup } from './styles';

function Header() {
  return (
    <StyledHeader className="Header">

      <StyledInputGroup className="inputWithIcon">
        <Input
          name="searchActivitiesInput"
          type="text"
          placeholder="Localizar atividade..."
        />
        <BiSearch size={15} color={'#222'} />
      </StyledInputGroup>

      <Button>
        <FaBell size={19} />
      </Button>
    </StyledHeader>
  )
}

export default Header;