import Link from 'next/link';
import React from 'react';
import Image from './image';
import styles from './Card.module.css';

function Card({ value }) {
  
  return (
    <div className={styles.producto}>
      <div className={ styles.nombre}>{value.title}</div>

      <div className={styles.precio}>$ {value.price}</div>

      <div className={styles.imagen}>
        <Image value={value} alt="Product Image" />
      </div>
      <div>
        <Link href={`/productos/${value.id}`}>
          <button className={styles.button}>Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;