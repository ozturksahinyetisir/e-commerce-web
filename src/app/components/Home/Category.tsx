"use client";

const Category = () => {
    const categoryList = [
        {
            name: "Elektronik"
        },
        {
            name: "Giyim"
        },
        {
            name: "Ev ve Yemek"
        },
        {
            name: "Spor"
        },
        {
            name: "Oyuncak"
        },
        {
            name: "Kitap"
        },
    ];

    return (
        <div className="my-5">
            <div className="flex gap-3 md:gap-5 overflow-x-auto whitespace-nowrap px-2">
                {categoryList.map((category, index) => (
                    <div
                        className="border text-slate-500 rounded-full min-w-[100px] p-2 text-center cursor-pointer flex-shrink-0"
                        key={index}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
