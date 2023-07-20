import React, { useState } from 'react';
import axios from 'axios';

const UseForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    participation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/create', formData);
      alert('User created successfully!');
      addUser(formData);
      setFormData({ firstName: '', lastName: '', participation: '' });
    } catch (error) {
      console.error(error);
      alert('Error creating user.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Participation:
        <input type="number" name="participation" value={formData.participation} onChange={handleChange} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default UseForm;
