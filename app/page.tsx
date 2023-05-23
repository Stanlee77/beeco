"use client";

import { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import RootLayout from './layout'
import ItemCard from './components/ItemCard';
import { TrashColor, TrashType } from './types';
import { Item } from './types';


export default function Home() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<any>([]);
  
  async function getProduct(params: string) {
    const data = await fetch(`http://localhost:3000/api/products?name=${params}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

      setProducts(data);
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    if(e.target.search.value === '') return setProducts([])
    getProduct(e.target.search.value);
    setSearch(e.target.search.value)
  }

  const filteredCards = (  
    products
      .map((item: Item ) => 
        <li key={item.name}>
          <ItemCard name={item.name} dumpInto={item.dump_into} />
        </li>
      )
  )

  return (
    <RootLayout>
      <div className='p-4 h-[90%]'>
        <Searchbar 
          handleSearch={handleSearch}
          value={search}
        />
        <ul className="max-h-[90%] overflow-scroll rounded-lg">
          {filteredCards.length > 0 ? filteredCards : <p className="text-center">Nieznaleziono produktów {":("}</p>}
        </ul>
      </div>
      <Navbar />
    </RootLayout>
  )
}
