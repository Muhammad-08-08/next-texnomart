"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TopCategoriesType } from "./User.Type";

function TopCategories() {
  const [topCategor, setTopCategor] = useState<TopCategoriesType[]>([]);
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((response) => {
        setTopCategor(response.data.data.data);
      });
  }, []);
  return (
    <div className="flex justify-between container mx-auto px-10 my-6">
      {topCategor.map((item) => {
        return (
          <Link key={item.slug} href={`/top-menu/${item.slug}`}>
            <p className="select-none">{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default TopCategories;
