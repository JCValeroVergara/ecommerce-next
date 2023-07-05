import Link from 'next/link';
import styles from './page.module.css'


const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your E-Commerce</h1>
      <div className={styles.boxbuttons}>
        <div>
          <Link href="/categorias">
            <button className={styles.button}>Categorías</button>
          </Link>
        </div>
        <div>
          <Link href="/productos">
            <button className={styles.button}>Productos</button>
          </Link>
        </div>
      </div>
      <div>
        <img src="/portada.jpg" alt="portada" />
      </div>
    </div>
  );
};

export default page;
