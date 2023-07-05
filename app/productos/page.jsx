import Link from 'next/link';
import Card from '../componentes/Card';
import styles from './productos.module.css';

const getProducts = async () => {
  return fetch('http://fakestoreapi.com/products', { cache: 'no-cache' })
    .then((response) => response.json())
};

const page =async () => {
  const products = await getProducts();
  return (
    <div>
      <div className={styles.productos}>
        {products.map((value, index) => (
          <Card key={index} value={value} />
        ))}
      </div>
      <Link href="/">
        <button className={styles.button} >Volver</button>
      </Link>
    </div>
  );
};

export default page;
