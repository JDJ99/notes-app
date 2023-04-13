import React from "react";
import axios from "../axios";

const DeleteNote = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/${id}`);
      onDelete(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button type="button" onClick={handleDelete}>
      Delete Note
    </button>
  );
};

export default DeleteNote;
