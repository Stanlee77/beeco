"use client";

import Image from "next/image";
import searchIcon from "../../../public/icons/search.svg";
import { FC, FormEventHandler } from "react";

interface SearchbarProps {
    handleSearch: FormEventHandler<HTMLFormElement>
    value: string
}

const Searchbar: FC<SearchbarProps> = ({ handleSearch, value }) => {
    return (
        <form onSubmit={handleSearch} className="pb-4">
            <div className="flex border-2 border-black left rounded-full px-2">
                <div className="flex items-center">
                    <div className="flex items-center pr-1">
                        <Image src={searchIcon} alt="search" width={25} height={25} />
                    </div>
                    <input 
                        className="border-none outline-none focus:box-shadow-none focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 hover:placeholder-black"
                        style={{ outline: "none", border: "none", offset: "none" }}
                        type="search"
                        id="search"
                        placeholder="Szukaj"
                        content={value} 
                    />
                </div>
            </div>
        </form>
    )
}

export default Searchbar