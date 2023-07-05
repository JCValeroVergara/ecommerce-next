'use client';
import { useDispatch } from 'react-redux';
import Image from '../componentes/image';
import { setCategoria } from '@/store/miSlice';
import { useRouter } from 'next/navigation';

const BotonVer = ({ value }) => { 
  const dispatch = useDispatch();
  const router = useRouter();
  const show = (event) => {
    dispatch(setCategoria(event));
    router.push('/portipo');
  }

  
  return (
    <div onClick={() => show(value.categoria)}>
      <Image value={value} alt="Product Image" priority={true} />
    </div>
  );
}


export default BotonVer;