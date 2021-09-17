import styled from 'styled-components';

export const Container = styled.div`
  height: 92%;
  display: flex;
  overflow-x: auto;

  >div{
    margin-left: 1rem;
  }
  >div:last-of-type{
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;
