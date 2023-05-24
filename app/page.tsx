"use client";

import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import RootLayout from "./layout";
import ItemCard from "./components/ItemCard";
import { TrashColor, TrashType } from "./types";
import { Item } from "./types";
import Layout from "./components/layout/layout";
import If from "./components/If";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any>([]);

  async function getProduct(params: string) {
    const data = await fetch(
      `http://localhost:3000/api/products?name=${params}`,
      {
        cache: "no-store",
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setProducts(data);
  }

  const handleSearch = (e: any) => {
    if (e.target.value === "") return setProducts([]);
    getProduct(e.target.value);
    setSearch(e.target.value);
  };

  const filteredCards = products.map((item: Item) => (
    <li key={item.name}>
      <ItemCard name={item.name} dumpInto={item.dump_into} />
    </li>
  ));

  const itemsNotFound = (
    <div className="text-center min-h-[150px]">
      <p className="pb-10 pt-5">Nie znaleziono przedmiotu!</p>
      <Link
        href="/add-product"
        className="font-bold p-4 bg-black text-white rounded-full"
      >
        Dodaj produkt
      </Link>
    </div>
  );

  return (
    <Layout>
      <div className="p-4 h-[90%]">
        <Searchbar handleSearch={handleSearch} value={search} />
        <ul className="max-h-[90%] min-h-[100px] overflow-scroll rounded-lg">
          <If
            condition={filteredCards.length > 0}
            elseComponent={itemsNotFound}
          >
            {filteredCards}
          </If>
        </ul>
      </div>
    </Layout>
  );
}
