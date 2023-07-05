'use client'

import { comprar } from '@/store/miSlice';
import Image from '../../componentes/image';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from './CardIndividual.module.css';

const CardIndividual = ({ data }) => {
  const dispach = useDispatch();
  const adquirir = (data) => {
    dispach(comprar(
      {
        producto: data.id,
        precio: data.price,
        imagen: data.image,
      }
    ))
  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.precio}> $ {data.price}</div>
      <div className={styles.description}>{data.description}</div>
      <div className={styles.category}>{data.category}</div>
      <div className={styles.rate}>
        {data.rating.rate}({data.rating.count})
      </div>

      <Image value={data} alt="Product Image" priority={true} />

      <div className={styles.boxbuttons}>
        <div>
          <button className={styles.button} onClick={() => adquirir(data)}>
            Comprar
          </button>
        </div>
        <div>
          <Link href="/productos">
            <button className={styles.button}>Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardIndividual;