"use client"

import PageContainer from "../containers/PageContainer"
import UseCart from "../hooks/UseCart";
import Image from "next/image";
import Button from "../general/Button";

const CartClient = () => {
    const {removeFromBasket,cartProducts,clearCart} = UseCart();
   

    if(!cartProducts || cartProducts.length == 0){
        return (
            <div className="text-black p-1 m-10 md:m-10 text-center font-bold">
            <div className="text-black">Sepetinizde ürün bulunmamaktadır.</div>
            </div>
        )
        
    }
    return (
        <div className="text-black p-1 m-10 md:m-10">
            <PageContainer>
            <div className="flex  items-center text-center gap-2 border border-gray-600 p-4 rounded-lg font-bold">
                <div className="w-1/4">Ürün Adı</div>
                <div className="w-1/4">Ürün Resmi</div>
                <div className="w-1/4">Ürün Fiyatı</div>
                <div className="w-1/4">Ürün Adet</div>
                <div className="w-1/4">Toplam Fiyat</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-5">
                {
                    cartProducts.map(cartProduct => (
                        <div className="flex items-center text-center gap-3 border border-gray-600 p-4 rounded-lg" key={cartProduct.id} >
                            <div className="w-1/4 font-bold">{cartProduct.name}</div>
                            <div className="w-1/4 flex justify-center rounded-lg border border-gray-300 shadow-md" style={{
      boxShadow: "5px 11px 12px rgba(0, 0, 0, 1)",}}>
                              <Image src={cartProduct.image} alt={cartProduct.name} width={150} height={150}/>
                            </div>
                            <div className="w-1/4">{cartProduct.price} ₺</div>
                            <div className="w-1/4">{cartProduct.quantity}</div>
                            <div className="w-1/4 font-bold">{cartProduct.price * cartProduct.quantity} ₺</div>,
                            <Button text="Sepetten Sil" onClick={() => removeFromBasket(cartProduct)} small outline disabled={false} />
                        </div>
                    ))

            }
            </div>
            <div className="flex justify-end mt-10 font-bold text-2xl">Toplam Tutar: {cartProducts.reduce((total,product) => total + product.price * product.quantity,0)} ₺</div>
        
            <div className="flex justify-end mt-5">
                    <Button text="Sepeti Temizle" onClick={clearCart} small outline />
                </div>

            </PageContainer>

            
            </div>
    )
}

export default CartClient