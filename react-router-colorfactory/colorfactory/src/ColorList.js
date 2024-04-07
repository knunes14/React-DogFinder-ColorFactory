import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import AddColorForm from './AddColorForm';

const ColorList = () => {
  const [colors, setColors] = useState([
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    // Additional colors added
  ]);

  const handleAddColor = (newColor) => {
    setColors([...colors, newColor]);
  }

  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${color.name.toLowerCase()}`}>
              {color.name} - {color.hex}
            </Link>
          </li>
        ))}
      </ul>
      <AddColorForm onAddColor={handleAddColor} />
    </div>
  );
}

export default ColorList;
