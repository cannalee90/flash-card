import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>App</Link>
        </li>
        <li>
          <Link to='/newcard'>NewCard</Link>
        </li>
        <li>
          <Link to='/list'>List</Link>
        </li>
        <li>
          <Link to='/signin'>Signin</Link>
        </li>
      </ul>
    </nav>
  );
}