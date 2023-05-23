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
        <form onSubmit={handleSearch}>
            <div className="flex border-2 left border-black rounded-full px-2">
                <Image src={searchIcon} alt="search" width={25} height={25} />
                <input 
                    className="border-none outline-none focus:outline-none focus:border-none focus:shadow-none"
                    type="search"
                    id="search"
                    placeholder="Search"
                    content={value} 
                />
            </div>
        </form>
    )
}

export default Searchbar