import styled from 'styled-components';

export const Container = styled.div`

  flex-shrink: 0;
  width: 272px;
  height: fit-content;
  margin: 1rem;
  margin-top: 2.5rem;
  border: 1px solid rgb(221, 221, 221);
  
  border-radius: 3.5px; 
  background-color: rgb(239, 237, 238);

  .Cards{
    margin: 4px;
    padding: 2px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  cursor: pointer;
  overflow-wrap: break-word;

  font-size: 1rem;
  font-weight: 700;
  
  background-color: rgb(68, 99, 240);
  color: #FFF;
`;
