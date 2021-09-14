import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--header-bgColor);
  color: #FFF;
  padding: 0 50px;
  overflow: hidden;
  white-space: hidden;
  box-shadow: var(--shadow);

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Button = styled.button`
    margin: 0;
    padding: 8px;

    border: none;
    border-radius: 100%;

    text-decoration: none;
    background-color: rgb(102, 92, 196);
    color: #FFF;
    cursor: pointer;
    transition: background 200ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    :focus, :hover{
      background-color:rgb(108, 99, 191);
      box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.05),
       0 2px 49px 0 rgba(0, 0, 0, 0.03);
    }
    :active{
      transform: scale(0.80);
    }

  
`;

export const Input = styled.input`
  margin: 8px 0;
  padding: 8px 15px;
  padding-right:10px;
  height: 55px;

  background-color: rgb(193, 190, 234);
  color:#FFF;
  border-radius:6px;
  font-size:  25px;
  border: none;

  
  ::placeholder{
    color: #FFF;
    
  }
  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

export const StyledInputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & >svg{
    position: absolute;
    right: 10px;
  }

  input:focus + svg {
    fill: dodgerBlue;
  }
  
  &.inputWithIcon {
    position: relative;
  }

`;
