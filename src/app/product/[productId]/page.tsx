import React from "react";
import products from "@/app/utils/Products";
import DetailClient from "@/app/components/Detail/DetailClient";


export type DetailProps = Promise<{
  productId: string;
}>;

export default async  function Detail(props: {params:DetailProps}){
  const { productId } = await props.params;
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
