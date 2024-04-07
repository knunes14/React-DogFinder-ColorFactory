import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
  let { name } = useParams();

  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
