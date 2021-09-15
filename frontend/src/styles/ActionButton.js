import styled from 'styled-components';

export const StyledActionButton = styled.div`

  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 1.5rem;
  height: 36px;
  width: 240px;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 3.5px; 
  background-color: rgb(239, 237, 238);
  color: rgb(68, 99, 240);
  font-weight: 500; 
  cursor: pointer;

  p{ margin: 0}
`;

export const styles = {
  styleTextArea: {
    resize: "none",
    with: "100%",
    outline: "none",
    border: "none",
    overflow: "hidden",
  },
  cardStyleContainer: {
    minHeigth: 80,
    minWidth: 238,
    padding: "6px 8px 2px",
  },
  buttonStyleContainer: {
    color: "white",
    backgroundColor: "rgb(68, 99, 240)",
    fontSize: 15,
    border: "none",
    textDecoration: "none"
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }

}
