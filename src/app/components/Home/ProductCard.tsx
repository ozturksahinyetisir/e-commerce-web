"use client"
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import TextClip from '@/app/utils/TextClip';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  console.log(`/product/${product.id}`);
  return (
    <div onClick={() => router.push(`/product/${product.id}`)}>
    <div className="w-full max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
      <div className="relative  w-64 h-64">
        <Image
          className='rounded-t-lg'
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Rating name="read-only" value={4} readOnly />
        <div className="text-gray-300 dark:text-white">{product.price} ₺ </div>
        <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{TextClip(product.name)}</h5>
      </div>
      </div>
  );
};


export default ProductCard;
