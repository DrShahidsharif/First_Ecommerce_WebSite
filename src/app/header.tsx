"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<string[]>([]);
    

    // Mapping products to their respective sections
    const productRoutes: { [key: string]: string } = {
        "Discount Item": "#discount-item",
        "Featured Products": "#featured-products",
        "Latest Products": "#latest-products",
        "Top Categories": "#top-categories",
        "Trending Products": "#trending-products",
        "Unique": "#unique",
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            const filtered = Object.keys(productRoutes).filter((product) =>
                product.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleSearchClick = () => {
        if (searchQuery.trim() && productRoutes[searchQuery]) {
            window.location.hash = productRoutes[searchQuery]; // Navigate to section
            setFilteredProducts([]); // Clear dropdown after selection
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearchClick();
        }
    };

    const handleSelectProduct = (product: string) => {
        setSearchQuery(product);
        setFilteredProducts([]);
        window.location.hash = productRoutes[product]; // Navigate to section
    };

    return (
        <nav className="flex flex-wrap items-center justify-between px-6 py-3 bg-white shadow-md">
            <div className="text-2xl font-bold text-[#7E33E0]">Hekto</div>
            <ul className="hidden md:flex space-x-6 text-gray-700 text-2xl">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/component_2">Products</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/ShopList">Shop</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>

            {/* Search Bar */}
            <div className="relative">
                <input
                    type="text"
                    className="w-48 md:w-64 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    onKeyDown={handleKeyPress}
                />
                <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-2 rounded-full"
                    onClick={handleSearchClick}
                >
                    <Image src={"/images/uil_search.png"} alt="search" width={16} height={16} />
                </button>

                {/* Search Dropdown */}
                {searchQuery && (
                    <div className="absolute top-10 left-0 bg-white shadow-lg w-full rounded-md z-10">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <div 
                                    key={index} 
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelectProduct(product)}
                                >
                                    {product}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No results found</div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}






// import Link from "next/link";
// import Image from "next/image";

// export default function Header(){
//     return(
//     <div className="mt-4 max-w-[1920px] mx-auto h-[44px] ">
//         {/* Top Bar */}
//     <div className=" bg-[#7E33E0]  flex items-center">
//         <div className="flex ml-[377px]">          
//             <div className="flex">
//                 <Image src={"/images/email1.png"} alt="" width={16} height={16} />
//                 <div className=" w-[171px] h-[16px] text-white text-[16px] ml-[10px] mr-[43px]" >hdr.mshahid24@gmail.com</div>
//             </div>
//             <div className="flex">
//                 <Image src={"/images/email1.png"} alt="" width={16} height={16} />
//             <div className=" w-[120px] h-[16px] text-white text-[16px] ml-[10px] mr-[43px]" >+92 3212250349</div>
//         </div>
//         <div className="ml-[270px]">
//             <ul className=" flex text-white gap-x-3 text-[16px]  ml-[35px]">
//                 <li className="">
//                     <Link href="/" className="flex">English <Image src={"/images/icons_down.png"} alt="" width={16} height={16}/></Link>
//                 </li>
//                 <li>
//                     <Link href="/" className="flex">USD <Image src={"/images/icons_down.png"} alt="" width={16} height={16}/></Link>
//                 </li>
//                 <li>
//                     <Link href="/" className="flex">Login <Image src={"/images/login.png"} alt="" width={16} height={16}/></Link>
//                 </li>
//                 <li>
//                     <Link href="/" className="flex">Whishlist <Image src={"/images/heart.png"} alt="" width={16} height={16}/></Link>
//                 </li>
//                 <li>
//                     <Link href="/" className="flex ml-[26px]"> <Image src={"/images/fluent_cart_24_white.png"} alt="" width={24} height={24}/></Link>
//                 </li>    
//             </ul>
//         </div>
//     </div>
// </div>
// <nav className="w-[1920px] h-[44px]">
//     <div className="flex w-[19201177px] h-[40px]">
//         <div className=" w-[98px] h-[34px] text-[34px] font-bold ml-[371px] mr-[43px]" >Hekto</div>
//             <div>
//                 <ul className=" flex  gap-x-12 text-[13px] mt-4 ml-[35px]">
//                     <li>
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/">Products</Link>
//                     </li>
//                     <li>
//                         <Link href="/">Blog</Link>
//                     </li>
//                     <li>
//                         <Link href="ShopList">Shop</Link>
//                     </li>
//                     <li>
//                         <Link href="/">Contact</Link>
//                     </li>
//         </ul>
//     </div>
//     <div className=" ml-[300px] w-[170px] h-[40px] mt-2 border">
//         <div className=" flex border solid-black rounded text-[12px]">
//         <input placeholder=""/>
//         <div className=" w-[30px] ml-[5px] ">
//         <div className="bg-[#FB2E86] h-[40px] flex items-center search ">
//             <Image src={"/images/uil_search.png"} alt="" width={24} height={24} className="rounded-full"/>
//         </div>
//         </div>
//         </div>      
//     </div>
//     </div>
// </nav>
// </div>
//     )
// }