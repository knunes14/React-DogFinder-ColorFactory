import React, { useState } from 'react';

const AddColorForm = ({ onAddColor }) => {
  console.log('onAddColor prop:', onAddColor);
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = {
      name: colorName,
      hex: colorHex,
    };
    onAddColor(newColor);
    setColorName('');
    setColorHex('');
  }

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input type="text" value={colorName} onChange={(e) => setColorName(e.target.value)} />
        </label>
        <label>
          Color Hex:
          <input type="color" value={colorHex} onChange={(e) => setColorHex(e.target.value)} />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default AddColorForm;
