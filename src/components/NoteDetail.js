import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `https://docent.cmi.hro.nl/bootb/demo/notes/${id}`
        );
        setNote(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNote();
  }, [id]);

  const handleEdit = () => {
    navigate(`/notes/${id}/edit`);
  };

  return (
    <div>
      <h2>Note Detail</h2>
      <p>Title: {note.title}</p>
      <p>Body: {note.body}</p>
      <p>
        API URI: <a href={note._links?.self?.href}>{note._links?.self?.href}</a>
      </p>
      <br />
      <button onClick={handleEdit}>Edit</button>
      <br />
      <br />
      <Link to="/notes">Back to Notes</Link>
    </div>
  );
};

export default NoteDetail;
