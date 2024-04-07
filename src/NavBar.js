import React from 'react';
import { NavLink } from 'react-router-dom';

// The NavBar component receives the dogs prop from its parent (App.js)
function NavBar({ dogs }) {
  return (
    <nav>
      <ul>
        {/* Map through the dogs array to generate a Link for each dog */}
        {dogs.map(dog => (
          <li key={dog.name}>
            {/* Use React Router's Link component for navigation */}
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
