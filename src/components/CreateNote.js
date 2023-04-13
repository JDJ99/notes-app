import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const [note, setNote] = useState({
    title: '',
    body: '',
    author: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://docent.cmi.hro.nl/bootb/demo/notes/',
        note
      );
      console.log(response.data);
      navigate('/notes');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Create New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <br />
        <label>Body:</label>
        <br />
        <textarea
          name="body"
          value={note.body}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>Author:</label>
        <br />
        <input
          type="text"
          name="author"
          value={note.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateNote;
