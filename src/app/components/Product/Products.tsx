import Heading from "../general/Heading";
import { products } from "@/app/utils/Products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
        <Heading text="Yeni Urunler"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-center p-10 " >
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>

  )
}

export default Products

