"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import CardPage from "@/components/CardPage";
import { Kards } from "@/components/User.Type";
import Link from "next/link";

function TopMenu() {
  const [topMenu, setTopMenu] = useState<Kards[]>([]);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=1`
      )
      .then((response) => {
        setTopMenu(response.data.data.products);
      });
  }, [slug]);

  if (!slug) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-5 gap-6 container px-10 mx-auto">
      {topMenu.map((item) => (
        <Link href={`product/${item}`} key={item.id}>
          <CardPage item={item} />
        </Link>
      ))}
    </div>
  );
}

export default TopMenu;
