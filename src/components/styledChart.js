import styled from "styled-components";
import { Pie } from "react-chartjs-2";

export const StyledChart = styled(Pie)`
  /* Estilos gerais do gráfico */
  width: 50%;
  max-width: 500px;

  /* Estilos específicos para telas médias (até 768px) */
  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura */
    max-width: 100%; /* Remove o limite de largura */
    margin-bottom: 20px; /* Adiciona um espaçamento na parte inferior */
  }
`;

