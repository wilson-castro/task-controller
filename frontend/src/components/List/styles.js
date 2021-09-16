import styled from 'styled-components';

export const Container = styled.div`

  margin:1rem;
  flex: 0 1 calc(25% -1em);
  width: 272px;
  height: fit-content;
  margin-top : 1rem;
  border: 1px solid rgb(221, 221, 221);
  
  border-radius: 3.5px; 
  background-color: rgb(239, 237, 238);

  
  .list-cards{
    margin: 4px;
    padding: 2px;
  }
`;

export const Header = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.65rem;
  cursor: pointer;
  overflow-wrap: break-word;

  border: 2px solid  var(--header-fontColor);

  font-size: 1rem;
  font-weight: 700;

  background-color: var(--header-fontColor);
  color: #FFF;
`;
