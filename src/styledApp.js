import styled from "styled-components";



export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartAndTableContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
