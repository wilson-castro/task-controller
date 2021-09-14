import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3.5px; 
  background-color: rgb(239, 237, 238);
 
  .Cards{
    margin: 8px;
    padding: 5px;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
  border-top-left-radius : 3.5px;
  border-top-right-radius: 3.5px;

  font-size: 1.5rem;
  font-weight: 700;
  
  background-color: rgb(68, 99, 240);
  color: #FFF;
`;
