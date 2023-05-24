"use client";

import React, { useState } from "react";
import { PolishTrashType, TrashType } from "@/app/types";
export default function BaseDropDown() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="flex justify-between border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {selectedValue
          ? `Wybrany materiał: ${PolishTrashType[selectedValue as TrashType]}`
          : "Wybierz materiał"}
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
        className="z-1 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 relative"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full absolute"
          aria-labelledby="dropdownDefaultButton"
          style={{ display: isVisible ? "block" : "none" }}
        >
          {Object.keys(PolishTrashType).map((trashType) => (
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-start"
                onClick={() => {
                  setSelectedValue(trashType);
                  setIsVisible(false);
                }}
              >
                {PolishTrashType[trashType as TrashType]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
