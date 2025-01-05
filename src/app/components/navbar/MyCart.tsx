"use client"

import { MdShoppingBasket } from "react-icons/md"
import UseCart from "../hooks/UseCart"
import { useRouter } from "next/navigation"


const MyCart = () => {
  const {cartProducts} = UseCart();
  const router = useRouter();

  const goToCart = () => {
    router.push("../../cart");
  };

  return (
    <div className="hidden md:flex relative" >
        <MdShoppingBasket size="40" className="cursor-pointer" onClick={goToCart} />
        <div className="absolute -top-1 -right-2 flex items-center text-center bg-red-500 w-3 h-3 p-3 justify-center rounded-full font-bold">{cartProducts?.length}</div>
    </div>
  )
}

export default MyCart