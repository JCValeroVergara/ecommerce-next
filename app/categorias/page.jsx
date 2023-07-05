import BotonVer from './BotonVer';
import styles from './categorias.module.css'

const page = async () => {

  const categorias = await fetch('http://fakestoreapi.com/products/categories', { cache: 'no-cache' })
    .then((response) => response.json())

  const productos = await Promise.all(
    categorias.map(async (categoria) => {
      const producto = await fetch(
        `http://fakestoreapi.com/products/category/${categoria}? limit=1`)
        .then((response) => response.json());
      return {
        image: producto[0].image,
        categoria
      }
    })
  )

  return (
    <div>
      <div className={styles.columns}>
        {categorias.map((value, index) => 
          <div className={`${styles.column} ${styles.category}`} key={index}>
            {value}
          </div>
        )}
      </div>
      
      <div className={styles.columns}>
        {productos.map((value, index) =>
          <div className={styles.column} key={index}>
            <BotonVer value={value} />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
