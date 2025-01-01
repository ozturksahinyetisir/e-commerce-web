import Heading from "../general/Heading";
import { products } from "@/app/utils/Products";

const Products = () => {
  return (
    <div>
        <Heading text="Yeni Urunler"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-center p-10 " >
            {products.map((product) => (
                <div className="text-2xl text-black " key={product.id}>
                    <img className="justify-self-center w-48 h-48 mt-4 mb-4" src={product.imageUrl} alt={product.name} />
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-sm">{product.description}</p>
                    <p className="text-xl">{product.price} ₺ </p>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Products