import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

export const StyledChart = styled(Doughnut)`
  width: 50%;
  max-width: 350px;
  max-height: 350px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    margin-top: 40px;
  }
`;
