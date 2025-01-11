"use client"
import { createContext, useState, useContext, useCallback, useEffect } from "react"
import { CartProductProps } from "../Detail/DetailClient"
import { toast } from "react-hot-toast"

interface CartContextProps {
    cartQty: number
    addToBasket: (product: CartProductProps) => void
    addToBasketIncrement: (product: CartProductProps) => void
    addToBasketDecrement: (product: CartProductProps) => void
    removeFromBasket: (product: CartProductProps) => void
    clearCart: () => void
    cartProducts: CartProductProps[] | null	
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
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

    useEffect(() => {
        setCartQty(cartProducts?.length || 0);
    }, [cartProducts]);

    const addToBasket = useCallback((product: CartProductProps) => {
        setCartProducts(prev => {
            const updatedCart = prev ? [...prev, product] : [product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            toast.success(`${product.name} sepete eklendi`, { icon: '🛒' });
            return updatedCart;
        });
    }, []);

    const addToBasketIncrement = useCallback((product: CartProductProps) => {
        let updatedCart;
        if (product.quantity == 10) {
            return toast.error("Maksimum sepete 10 ürün ekleyebilirsiniz", { icon: '🛒❌' });
    }
    if(cartProducts){
        updatedCart = [...cartProducts];
        const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);
        if (existingItemIndex > -1) {
            updatedCart[existingItemIndex].quantity = ++updatedCart[existingItemIndex].quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
}, [cartProducts]);

    const addToBasketDecrement = useCallback((product: CartProductProps) => {
        let updatedCart;
        if (product.quantity == 1) {
            return toast.error("Ürünü silmek için sepetten silin", { icon: '🛒❌' })
    }
    if(cartProducts){
        updatedCart = [...cartProducts];
        const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);
        if (existingItemIndex > -1) {
            updatedCart[existingItemIndex].quantity = --updatedCart[existingItemIndex].quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
}, [cartProducts]);

    const removeFromBasket = useCallback((product: CartProductProps) => {
        setCartProducts(prevCartProducts => {
            if (!prevCartProducts) return null;
            const updatedCart = prevCartProducts.filter(item => item.id !== product.id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            toast.success(`${product.name} sepetten kaldırıldı`, { icon: '🛒❌' });
            return updatedCart;
        });
    }, []);

    const clearCart = useCallback(() => {
        setCartProducts(null);
        localStorage.removeItem('cart');
        toast.success(`Sepet temizlendi`, { icon: '🛒❌' });
    }, []);

    const value = {
        cartQty,
        addToBasket,
        removeFromBasket,
        cartProducts,
        clearCart,
        addToBasketIncrement,
        addToBasketDecrement
    };

    return <CartContext.Provider value={value} {...props} />;
}

const UseCart = () => {
    const context = useContext(CartContext);
    if (context == null) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export default UseCart;
