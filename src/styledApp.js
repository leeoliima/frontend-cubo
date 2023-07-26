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
  justify-content: center;
  width: 100%;
  max-width: 1000px; /* Valor máximo para telas grandes */

  /* Estilos específicos para telas médias (até 768px) */
  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos verticalmente */
    align-items: center; /* Centraliza os elementos na horizontal */
  }
`;
