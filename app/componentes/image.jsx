'use client';
import Image from 'next/image';


const imageLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const image = ({ value }) => {
  return (
    <div>
      <Image
        loader={imageLoader}
        src={value.image}
        width={200}
        height={200}
        alt={value.title}/>
    </div>
  )
};

export default image;
  