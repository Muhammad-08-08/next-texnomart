"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CardPage from "./CardPage";
import { Kards } from "./User.Type";

function Kardlar() {
  const [products, setProducts] = useState<Kards[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((response) => {
        setProducts(response.data.data.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-5 gap-6">
      {products?.map((item) => {
        return <CardPage key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Kardlar;
