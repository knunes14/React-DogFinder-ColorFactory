import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import AddColorForm from './AddColorForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList />} />
        <Route path="/colors/:color" element={<Color />} />
        <Route path="/colors/new" element={<AddColorForm />} />
        <Route path="/" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;


