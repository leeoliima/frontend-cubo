import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/UseForm';
import Table from './components/UseTable';
import Chart from './components/UseChart';

const App = () => {
  const [users, setUsers] = useState([]);

  // Função para buscar a lista de usuários do backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users'); // Rota para obter a lista de usuários
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching users.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Executa a função fetchUsers apenas na montagem inicial do componente

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>User Management App</h1>
      <Form addUser={addUser} />
      <Chart data={users} />
      <Table data={users} />
    </div>
  );
};

export default App;
