import Heading from "../general/Heading";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <div className="m-10">
        <Heading center text="Yeni Ürünler"/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center text-center p-1 " >
            {
            products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
    </div>

  )
}

export default Products

