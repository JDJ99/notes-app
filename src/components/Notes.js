import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          'https://docent.cmi.hro.nl/bootb/demo/notes/'
        );
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, []);

  console.log(notes); // add this line to check the value of notes

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://docent.cmi.hro.nl/bootb/demo/notes/${id}`
      );
      console.log(response.data);
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      {Array.isArray(notes) && notes.map((note) => (
        <div key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
          <Link to={`/notes/${note.id}/edit`}>Edit</Link>
        </div>
      ))}
    </div>
  );

};

export default Notes;
