import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {

  return (
        <div>
          <h2>Welcome View</h2>
          <Link to={'/login'}>Ir al login</Link>
        </div>
  )
}

export default Welcome