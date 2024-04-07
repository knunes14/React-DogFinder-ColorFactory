import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div className="dog-list">
      <h1>All Dogs</h1>
      <div className="dog-list-items">
        {dogs.map(dog => (
          <div key={dog.name} className="dog-summary">
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} style={{width: "200px", height: "200px"}}/>
              <h2>{dog.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
