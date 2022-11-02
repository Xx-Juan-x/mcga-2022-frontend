import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcome.module.css';


const Welcome = () => {

  return (
        <div className={styles.contenedor}>
          <h2 className={styles.titulo}>Welcome</h2>
          <Link to={'/login'}>Ir al login</Link>
        </div>
  )
}

export default Welcome