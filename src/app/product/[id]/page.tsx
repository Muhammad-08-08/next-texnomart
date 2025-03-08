"use client";

import { Products } from "@/components/User.Type";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`)
      .then((response) => {
        console.log(response.data.data.data);
        setProduct(response.data.data.data);
      })
      .catch((error) => console.error("API Error:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-10 my-6">
      <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 items-center">
        <div>
          <h1 className="text-xl font-bold">{product.name}</h1>
          <img
            src={product.large_images[0]}
            alt={product.name}
            className="w-64 h-64 object-cover"
          />
        </div>
        <p className="text-lg text-gray-700">
          Narxi: {product.sale_price} so‘m
        </p>
      </div>
    </div>
  );
}

export default ProductPage;
