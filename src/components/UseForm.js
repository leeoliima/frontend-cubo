import React, { useState } from "react";
import axios from "axios";
import { Button, UseForms } from "./styledForm";

const UseForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    first_name: "", 
    last_name: "", 
    participation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3003/create", formData);
      alert("User created successfully!");
      addUser(formData);
      setFormData({ first_name: "", last_name: "", participation: "" });
    } catch (error) {
      console.error(error);
      alert("Error creating user.");
    }
  };

  return (
    <UseForms onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="number"
          placeholder="Participation"
          name="participation"
          value={formData.participation}
          onChange={handleChange}
        />
      </label>
      <Button type="submit">SEND</Button>
    </UseForms>
  );
};

export default UseForm;
