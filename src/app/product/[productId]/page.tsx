import React from "react";
import products from "@/app/utils/Products";
import DetailClient from "@/app/components/Detail/DetailClient";


type DetailProps = {
  productId: string;
};

const Detail = ({params}: {params:DetailProps}) => {
  const { productId } = params;
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
