"use client";

import { useState } from "react";
import { PolishTrashType, TrashType } from "../types";

export default function AddProductPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [dumpInto, setDumpInto] = useState<TrashType | null>(null);
  const [name, setName] = useState("");
  const BARCODE = "1234567890";
  const MATERIAL = "plastic";

  function addNewProduct() {
    const newItem = {
      barcode: BARCODE,
      name: name,
      material: MATERIAL,
      dump_into: dumpInto,
    };

    fetch("http://localhost:3000/api/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("item added! result: ", result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      className="pt-10  px-5 mb-[60px]"
      onSubmit={(e) => {
        e.preventDefault();
        addNewProduct();
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-7">Dodaj produkt</h1>
      <label
        htmlFor="product-name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Nazwa produktu
      </label>
      <div className="mb-5">
        <input
          type="text"
          id="product-name"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Np. zepsuta klawiatura"
          required
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </div>
      {/* <div className="mb-5">
        <label
          htmlFor="barcode"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Kod kreskowy
        </label>
        <input
          type="text"
          id="barcode"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="np. 1234567890"
        />
      </div> */}
      <label
        htmlFor="dump-into"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Wyrzucać do
      </label>
      <button
        id="dump-into"
        data-dropdown-toggle="dropdown"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-flex justify-between w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {dumpInto ? PolishTrashType[dumpInto] : "Wybierz materiał"} &nbsp;
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div id="dropdown" className="z-1 relative">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 absolute top-0 bg-white rounded-lg shadow w-44 dark:bg-gray-700"
          aria-labelledby="dropdownDefaultButton"
          style={{ display: isVisible ? "block" : "none" }}
        >
          {[
            TrashType.glass,
            TrashType.paper,
            TrashType.plastic,
            TrashType.organic,
            TrashType.other,
          ].map((material) => (
            <li className="w-full" key={material}>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white divide-y divide-gray-100"
                onClick={() => {
                  setDumpInto(material);
                  setIsVisible(false);
                }}
              >
                {PolishTrashType[material]}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-5 mx-auto block"
      >
        Dodaj
      </button>
    </form>
  );
}
