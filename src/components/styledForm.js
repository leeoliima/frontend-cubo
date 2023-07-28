import styled from "styled-components";

export const UseForms = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00b8e2;
  margin-bottom: 50px;
  padding: 30px;
  padding-left: 30px;
  width: 100%;
  

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  input {
    padding: 10px;
    padding-left: 30px;
    border: none;
    margin: 10px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  /* Estilos gerais do botão */
  align-items: center;
  justify-content: center;
  background-color: #00b8e2;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  padding: 10px;
  margin: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
