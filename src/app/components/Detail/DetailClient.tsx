"use client"

import PageContainer from "../containers/PageContainer"
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Counter from "../general/Counter";
import UseCart from "../hooks/UseCart";
import Button from "../general/Button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean
}

export type CartProductProps = {
  id : number;
  name : string;
  price :  number;
  quantity : number
  image : string
  inStock : boolean
}

const DetailClient = ({product}:{product:Product}) => {
  const router = useRouter();

  const {addToBasket,cartProducts} = UseCart();
  const [displayButton,setDisplayButton] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartProductProps>({
    id : product.id,
    name : product.name,
    price :  product.price,
    quantity : 1,
    image : product.imageUrl,
    inStock : product.inStock,
  
  })
  
  useEffect(() => {
    setDisplayButton(false);
    const controlDisplay = cartProducts?.findIndex(cart => cart.id === product.id) ?? -1;
    if (controlDisplay > -1) {
        setDisplayButton(true);
    }
}, [cartProducts, product.id]); 

  const increaseFunc = () => {
    
    if(cartProduct.quantity == 10) return
    setCartProduct(prev => ({...prev, quantity: prev.quantity + 1}))
  }
  const decreaseFunc = () => {
    if(cartProduct.quantity == 1) return
    setCartProduct(prev => ({...prev, quantity: prev.quantity - 1}))
  }
  return (
    <PageContainer>
      <div className="p-10 flex items-center justify-center">
      <div className="flex max-w-4xl w-full space-x-8">
        <div className="w-1/2">

        <button
            onClick={() => router.back()}
            className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

        <Image
           src={product.imageUrl}
           alt={product.name}
           width={500}
           height={500}
           className="w-full  object-cover rounded-lg shadow-md min-w-[100px] min-h-[40px]"/>
        </div>
        
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">{product.name}</h1>
          
          <div className="mb-4">
            <Rating name="read-only" value={4} readOnly />
          </div>

          <p className="mt-4 text-lg text-gray-700 text-center">{product.description}</p>
          
          <p className="text-xl text-black font-semibold mt-2 text-center">{product.price} ₺</p>
          <p
              className={`mt-2 text-lg font-semibold ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "STOK MEVCUT" : "STOKTA YOK"}
            </p>
          
          {
            displayButton ? <>
            <Button text ="Ürün sepete eklendi." small outline onClick={() =>{}}></Button>
            </> : <>
            <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cartProduct={cartProduct} />
            <Button 
                text="Sepete Ekle" 
                onClick={() => {
                  if (!displayButton) {
                    addToBasket(cartProduct);
                  }
                }}
/>
            </>
          }
          
        </div>
      </div>
    </div>
    </PageContainer>
    
  );
};

export default DetailClient