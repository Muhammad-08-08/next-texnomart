"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import CardPage from "@/components/CardPage";
import { TopMenuType } from "@/components/User.Type";
import Link from "next/link";
import { Pagination } from "antd";

function TopMenu() {
  const [topMenu, setTopMenu] = useState<TopMenuType | null>(null);
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
      )
      .then((response) => {
        console.log("API response:", response.data);

        if (response.data && response.data.data) {
          setTopMenu(response.data.data);
        } else {
          setTopMenu(null);
        }
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
        setTopMenu(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug, currentPage]);

  if (!slug) return <p>Loading...</p>;

  return (
    <div className="px-10 mx-auto my-6">
      <div className="grid grid-cols-5 gap-6 container px-10 mx-auto mb-4">
        {loading ? (
          <p>Yuklanmoqda...</p>
        ) : topMenu && topMenu.products && topMenu.products.length > 0 ? (
          topMenu.products.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <CardPage item={item} />
            </Link>
          ))
        ) : (
          <p>Mahsulotlar topilmadi</p>
        )}
      </div>

      <Pagination
        current={currentPage}
        total={topMenu?.total || 0}
        pageSize={20}
        onChange={(page) => {
          setCurrentPage(page);
          setTopMenu(null);
        }}
      />
    </div>
  );
}

export default TopMenu;
