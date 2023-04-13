import React, { useState } from "react";
import axios from "../axios";

const EditNote = ({ note, onUpdate }) => {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [author, setAuthor] = useState(note.author);

  const handleUpdate = async () => {
    try {
      const updatedNote = { ...note, title, body, author };
      await axios.put(`/${note.id}`, updatedNote);
      onUpdate(updatedNote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="popup">
      <div className="popup__content">
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
        </form>
      </div>
    </div>
  );
};

export default EditNote;
