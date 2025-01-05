"use client"
import { createContext, useState, useContext, useCallback, useEffect } from "react"
import { CartProductProps } from "../Detail/DetailClient"
import { toast } from "react-hot-toast"

interface CartContextProps {
    cartQty: number
    addToBasket: (product: CartProductProps) => void
    removeFromBasket: (product: CartProductProps) => void
    clearCart: () => void
    cartProducts: CartProductProps[] | null	
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props{
    children: React.ReactNode
    
}

export const CartContextProvider = (props: Props) => {
    const [cartQty, setCartQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductProps[] | null>(null)

    useEffect(() => {
        const getItem = localStorage.getItem('cart');
        
        if (getItem) {
            try {
                const getItemParse: CartProductProps[] = JSON.parse(getItem);
                setCartProducts(getItemParse);
            } catch (error) {
                console.error("Cart data parsing error: ", error);
                setCartProducts([]);
            }
        } else {
            setCartProducts([]);
        }
    }, []);

    
    const addToBasket = useCallback((product: CartProductProps) => {
        setCartProducts(prev => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            setCartQty(updatedCart.length)
            
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })
        toast.success(`${product.name} sepete eklendi`, { icon: '🛒' });
    }, [])

    
    const removeFromBasket = useCallback((product: CartProductProps) => {
        if (cartProducts) {
            const updatedCart = cartProducts.filter(item => item.id !== product.id)
            setCartProducts(updatedCart)
            toast.success(`${product.name} sepetten kaldırıldı`, { icon: '🛒❌' })
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const clearCart = useCallback(() => {
        setCartProducts(null)
        toast.success(`Sepet temizlendi`, { icon: '🛒❌' })
        localStorage.removeItem('cart')
    }, [])

    const value = {
        cartQty,
        addToBasket,
        removeFromBasket,
        cartProducts,
        clearCart
    }
    return (
        <CartContext.Provider  value={value}{...props}/>
    )

}


const UseCart = () => {
    const context = useContext(CartContext)
    if(context == null){
        throw new Error('useCart must be used within a CartProvider')
  
}
    return context
}

export default UseCart