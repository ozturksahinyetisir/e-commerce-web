"use client";

const Category = () => {
    const categoryList = [
        { name: "Yüzük" },
        { name: "Kolye" },
        { name: "Taş" },
        { name: "Altın" },
        { name: "Gümüş" },
        { name: "Çelik" },
    ];

    return (
        <div className="my-5">
            <div className="flex gap-1 md:gap-5 overflow-x-auto whitespace-nowrap justify-center flex-wrap">
                {categoryList.map((category, index) => (
                    <div
                        className="border text-slate-500 rounded-full flex-shrink-0 flex-grow min-w-0 p-3 text-center cursor-pointer"
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
