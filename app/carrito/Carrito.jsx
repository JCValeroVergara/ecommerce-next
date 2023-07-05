'use client'

import { useSelector, useDispatch } from 'react-redux';
import styles from './Carrito.module.css';
import { useMemo, useState } from 'react';
import { devolver } from '@/store/miSlice';

const page = () => {
  const[total, setTotal] = useState(0)
  const dispatch = useDispatch();
  const  carrito  = useSelector((state) => state.misValores.miCarrito);

  const calcularTotal = useMemo(() => setTotal(carrito.reduce((acumulador, valueCurrent) => acumulador + valueCurrent.precio, 0))
  , [carrito])

  const eliminar = (producto) => {
    dispatch(devolver(producto))
  }

  return (
    <div>
      <div className={styles.total}>
        {' '}
        <img className={styles.imagen} src="/carrito.png" alt="carrito" />
        Total Compra: {total}{' '}
      </div>
      <div className={styles.miCarrito}>
        {carrito && carrito.length > 0 ? (
          carrito.map((value, index) => (
            <div key={index}>
              <img
                onClick={() => eliminar(value.producto)}
                src={value.imagen}
                alt="Product Image"
                height="60"
              />
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
}

export default page;