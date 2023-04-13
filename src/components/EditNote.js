import React, { useState, useEffect } from "react";
import axios from "../axios";

const EditNote = ({ note, onUpdate, onCancel }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
      setAuthor(note.author);
      setShowPopUp(true);
    }
  }, [note]);

  const handleUpdate = async () => {
    try {
      const updatedNote = { ...note, title, body, author };
      await axios.put(`/${note.id}`, updatedNote);
      onUpdate(updatedNote);
      setShowPopUp(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowPopUp(false);
    onCancel();
  };

  return showPopUp ? (
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
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default EditNote;
