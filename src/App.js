import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Notes from './components/Notes';
import NoteDetail from './components/NoteDetail';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import axios from 'axios';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Notes</h1>
        <nav>
          <ul>
            <p>
              <Link to="/create">Create New Note</Link>
            </p>
            <p>
              <Link to="/notes">Show Notes</Link>
            </p>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/notes/:id/edit" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
