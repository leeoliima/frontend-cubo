import styled from "styled-components";

export const StyledTable = styled.table`
  width: 50%;
  margin-right: 50px;
  margin-top: 100px;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  
  @media (max-width: 768px) {
    width: 100%; 
    max-width: 100%;
    margin-right: 0;
  }
`;
