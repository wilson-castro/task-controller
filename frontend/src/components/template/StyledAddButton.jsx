import styled from 'styled-components';

const StyledAddButton = styled.div`

  display: flex;
  align-items: center;
  height: 36px;
  width: 240px;
  margin-top: 1rem;
  padding: 1.5rem;

  cursor: pointer;
  border-radius: 3.5px; 

  background-color: rgb(239, 237, 238);
  color: rgb(68, 99, 240);
  font-weight: 500; 

  min-height: 32px;
  min-width: 200px;

  transition: background-color 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;

  :hover,:focus{
    background-color: rgb(229, 227, 218);
  }
  :focus{
      outline: none;
  }
  :active{
    transform: scale(95%);
  }

  p{ margin: 0}
`;

export default StyledAddButton;