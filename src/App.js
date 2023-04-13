import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Notes from './components/Notes';
import NoteDetail from './components/NoteDetail';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Notes</h1>
        <nav>
          <ul>
            <li><Link to="/create">Create New Note</Link></li>
            <li><Link to="/notes">Show Notes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

