import React from "react";

const Search = () => {
    return (
        <div className="hidden md:flex flex-1 px-40">
            <input
                type="text"
                placeholder="Ara"
                className="flex flex-1 py-2 px-4 rounded-md border-none outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ara</button>
        </div>
    );
};

export default Search;