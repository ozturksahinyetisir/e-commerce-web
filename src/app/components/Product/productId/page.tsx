import React from 'react'
import DetailClient from '../../Detail/DetailClient'
import products from '@/app/utils/Products'


type DetailProps = {
  productId? : string
}


const Detail = ({params}: {params:DetailProps}) => {
  const {productId} = params
  
  const product = products.find((product) => product.id == Number(productId));

  console.log(productId,"productId")
  return (
    <div>
      <DetailClient/>

      </div>
  )
}

export default Detail