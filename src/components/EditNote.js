import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

const EditNote = ({ onUpdate, onCancel }) => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      const response = await axios.get(`/${id}`);
      setNote(response.data);
      setTitle(response.data.title);
      setBody(response.data.body);
      setAuthor(response.data.author);
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedNote = { ...note, title, body, author };
      await axios.put(`/${note.id}`, updatedNote);
      onUpdate(updatedNote);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    onCancel();
  };

  if (!note) {
    return null;
  }

  return (
    <div>
      <h2>Edit Note</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          Update Note
        </button>
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditNote;
