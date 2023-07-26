import styled from "styled-components";

export const UseForms = styled.form`
  /* Estilos gerais do formulário */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00b8e2;
  margin-bottom: 50px;
  padding: 10px;
  padding-left: 30px;
  width: 100%; 

  /* Estilos específicos para telas pequenas (até 600px) */
  @media (max-width: 600px) {
    flex-direction: column; /* Empilha os elementos verticalmente */
  }

  input {
    padding: 10px;
    padding-left: 30px;
    border: none;
    margin: 10px;

    /* Estilos específicos para telas pequenas (até 600px) */
    @media (max-width: 600px) {
      width: 100%; /* Ocupa 100% da largura */
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

  /* Estilos específicos para telas pequenas (até 600px) */
  @media (max-width: 600px) {
    width: 100%; /* Ocupa 100% da largura */
  }
`;
