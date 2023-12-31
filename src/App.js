import React, { useState, useEffect } from "react";
import axios from "axios";
import UseForm from "./components/UseForm";
import UseTable from "./components/UseTable";
import UseChart from "./components/UseChart";
import { StyledApp, ChartAndTableContainer } from "./styledApp";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://backend-cubo.onrender.com/users"
      );
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <StyledApp>
      <UseForm addUser={addUser} />
      <h1>DATA</h1>
      <p>Banco de dados da Cubo</p>
      <br />
      <br />
      <br />
      <ChartAndTableContainer>
        <UseTable data={users} />
        <UseChart data={users} />
      </ChartAndTableContainer>
    </StyledApp>
  );
};

export default App;
