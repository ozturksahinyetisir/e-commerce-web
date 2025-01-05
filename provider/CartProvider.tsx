import { CartContextProvider } from "@/app/components/hooks/UseCart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
