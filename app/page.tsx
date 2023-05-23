"use client";

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import RootLayout from './layout'
import { useRouter } from 'next/navigation';
import ItemCard from './components/ItemCard';
import { TrashColors } from './utils';


export default function Home() {
  const [search, setSearch] = useState('')
  const router = useRouter();
  const [products, setProducts] = useState<any>([]);
  
  async function getAllProducts() {
    const data = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  
      setProducts(data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault()
    setSearch(e.target.search.value)
    const urlWithParams = `/api/products?name=${e.target.search.value}`;
    router.push(urlWithParams)
  }

  return (
    <RootLayout>
      <div className='p-4'>
        <Searchbar 
          handleSearch={handleSearch}
          value={search}
        />
        <ItemCard 
          item={{
            name: 'Karton po mleku',
            dumpInto: 'plastik/metal'
          }}
          color={TrashColors.yellow}
        />
        <ItemCard 
          item={{
            name: 'butelka po piwie',
            dumpInto: 'żabka'
          }}
          color={TrashColors.green}
        />
        <ItemCard 
          item={{
            name: 'Porcelana',
            dumpInto: 'zmieszane'
          }}
          color={TrashColors.black}
        />
      </div>
      <Navbar />
    </RootLayout>
  )
}
