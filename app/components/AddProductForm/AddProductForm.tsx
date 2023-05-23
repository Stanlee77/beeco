"use client";

import React, { useEffect, useState } from "react";

export default async function AddProductForm() {
  const [materials, setMaterials] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const receivedMaterials = await fetch(
    `${process.env.BASE_URI}/api/get-materials`
  );

  return (
    <div className="pt-10  px-5 mb-[60px]">
      <h1 className="text-2xl font-bold text-center mb-7">Dodaj produkt</h1>

      <div className="mb-5">
        <label
          htmlFor="product-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nazwa produktu
        </label>
        <input
          type="text"
          id="product-name"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Puszka"
          required
        />
      </div>
      <div className="mb-5">
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
          placeholder="1234567890"
          required
        />
      </div>

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-flex justify-between w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="button"
      >
        Dropdown button{" "}
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
      <div
        id="dropdown"
        className="z-1 relative"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
