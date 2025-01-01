import Image from 'next/image';

interface Product {
    name: string;
    imageUrl: string;
    description: string;
    price: number;
  }


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative">
        <Image
          src={product.imageUrl} 
          alt={product.name}
          width={200} 
          height={200} 
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 text-lg font-bold text-blue-500">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
