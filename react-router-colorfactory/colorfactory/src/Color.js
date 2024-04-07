import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  const { color } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const fetchColorDetails = (colorName) => {
    return fetch(`https://api.example.com/colors/${colorName}`)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching color details:', error);
        return null;
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colorDetails = await fetchColorDetails(color.toLowerCase());
        console.log('Fetched color details:', colorDetails);
        if (colorDetails) {
          setSelectedColor(colorDetails);
          console.log('Selected color:', colorDetails);
        } else {
          throw new Error('Color not found');
        }
      } catch (error) {
        console.error('Error fetching color:', error);
      }
    };
    fetchData();
  }, [color]);

  if (!selectedColor) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>{selectedColor.name}</h1>
      <div style={{ backgroundColor: selectedColor.hex, width: '100px', height: '100px' }}></div>
      <p>Hex: {selectedColor.hex}</p>
    </div>
  );
}

const NotFound = () => {
  return (
    <div>
      <h1>Color not found</h1>
      <p>Redirecting to colors...</p>
      {setTimeout(() => {
        window.location.href = '/colors';
      }, 2000)}
    </div>
  );
}

export default Color;

