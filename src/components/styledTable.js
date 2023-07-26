import styled from "styled-components";

export const StyledTable = styled.table`
  /* Estilos gerais da tabela */
  width: 50%;
  margin-right: 20px;
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

  /* Estilos específicos para telas médias (até 768px) */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura */
    max-width: 100%; /* Remove o limite de largura */
    margin-right: 0; /* Remove a margem à direita */
  }
`;
