import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  height: 140px;
  overflow: scroll;
  border: 1px solid red;

  header {
    position: sticky;
    top: 0;
    text-align: center;
    background: #fff;
  }
`;
