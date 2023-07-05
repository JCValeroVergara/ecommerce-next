'use client'

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../componentes/Card';
import Style from '../productos/productos.module.css';


const page = () => {
  const categoria = useSelector((state) => state.misValores.categoria);
  const[contenido, setContenido] = useState('');

  useEffect(() => {
    async function getData() {
      if (categoria) {
        const answer = await fetch(
          `http://fakestoreapi.com/products/category/${categoria}`
        );
        const data = await answer.json();
        setContenido(
          data.map((value) => <Card key={value.id} value={value} />)
        );
      }
    }
    getData();
  }, [categoria]);

  return (
    <div className={Style.productos}>
      {contenido}
    </div>
  );
};

export default page;
