"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type input = {
  image: string;
  name: string;
  sale_price: string;
  id: number;
};
type product = input[];
type obshiyinput = {
  total: number;
  products: product;
};

function Search() {
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<obshiyinput>();

  useEffect(() => {
    if (input.trim() !== "") {
      axios
        .get(`https://gw.texnomart.uz/api/common/v1/search/result?q=${input}`)
        .then((res) => {
          setData(res.data.data);
        });
    }
  }, [input]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center px-3 bg-white rounded-l-lg border-r border-gray-300">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="w-5 fill-gray-500"
          >
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
          </svg>
        </div>
        <input
          placeholder="Qidirish..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={() => setIsOpen(true)}
          type="text"
          className="w-72 px-3 py-2 text-lg outline-none border-none rounded-r-lg"
        />
      </div>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-10"
          ></div>

          <div className="absolute top-16 w-[520px] bg-white rounded-xl shadow-lg z-20 overflow-auto max-h-[500px] p-4">
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-lg font-semibold">Qidiruv natijalari</p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setInput("");
                }}
                className="text-xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {data?.products.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center border p-3 rounded-lg shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="rounded-lg"
                  />
                  <p className="text-center text-sm mt-2 font-medium">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
