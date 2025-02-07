"use client"

import Image from "next/image";
import React, {useEffect, useState} from "react"
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

const TopCategories = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct(){
            const fetchedProduct : Product[]= await client.fetch(four)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])
     const handleAddToCart = (e:React.MouseEvent, product: Product) =>{
            e.preventDefault()
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${product.name} added to cart`,
                showConfirmButton: false,
                timer:1000
            })
            addToCart(product)
    
        }
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Top Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((product) =>(
                <div key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 ">
                    <Link href={`/product/${product.slug.current}`} >
                    
                    
                    {product.image && (
                        <Image
                        src={urlFor(product.image).url()}
                        alt="image"
                        width={200}
                        height={200} 
                        className="w-full h-48 object-cover rounded-md"/>
                    )}
                    <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                    <p className="text-gray-500 mt-2">
                        {product.price}
                       </p> 
                       <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold  py-2 px-4 rounded-lg shadow-md " onClick={(e)=> handleAddToCart(e, product)}>
                        Add To Cart
                        </button>
                    </Link>
                </div>
            )
            )}
        </div>
        </div>
    )


}
export default TopCategories













// import Image from "next/image";

// function FeaturedProduct () {
//     return (
//         <div>
    
//            <div className="w-[1920px] mt-[129px] text-[35px] font-semibold flex justify-center">
//                <h1>Featured Products</h1>
//            </div>
//            <section className="flex w-[1920px] h-[361] ">
//            {/*Chair 1 */}
//                <div className="w-[270px] h-[261px] mt-[48px] ml-[376px]">
//                    <div className="bg-gray-100 justify-items-center">
//                         <Image src={"/images/image1168.png"} alt="" width={178} height={178} />
//                    </div>
//                    <div className="justify-items-center bg-gray-50">
//                        <p className="text-[18px] font-bold mb-6 text-red-600">Cantilever chair</p>
//                         <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
//                         <p className="text-[14px] mt-6 text-blue-900">Code - Y523201</p>
//                         <p className="text-[14px] mt-6 text-blue-900">$42.00</p>
//                    </div>
//                </div>
//            {/* Chair 2 */}
//                <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
//                     <div className="bg-gray-100 justify-items-center ">
//                         <Image src={"/images/image1.png"} alt="" width={130} height={150} />
//                         <div className="bg-green-500 w-[94px] h-[29px]">
//                            <p className="text-white">View Details</p>
//                         </div>
//                    </div>
//                    <div className="justify-items-center bg-blue-700">
//                        <p className="text-[18px] font-bold mb-6 text-white">Cantilever chair</p>
//                         <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
//                         <p className="text-[14px] mt-6 text-white">Code - Y523201</p>
//                         <p className="text-[14px] mt-6 text-white">$42.00</p>
//                    </div>
//                </div>
//            {/*Chair 3 */}
//                <div className="w-[270px] h-[261px] mt-[48px] ml-[29px]">
//                    <div className="bg-gray-100 justify-items-center">
//                         <Image src={"/images/image1169.png"} alt="" width={178} height={178} />
//                    </div>
//                    <div className="justify-items-center bg-gray-50">
//                        <p className="text-[18px] font-bold mb-6 text-red-600">Cantilever chair</p>
//                         <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
//                         <p className="text-[14px] mt-6 text-blue-900">Code - Y523201</p>
//                         <p className="text-[14px] mt-6 text-blue-900">$42.00</p>
//                    </div>
//                </div>
//            {/*Chair 4 */}
//                <div className="w-[270px] h-[361px] mt-[48px] ml-[29px]">
//                    <div className="bg-gray-100 justify-items-center">
//                         <Image src={"/images/image3.png"} alt="" width={216} height={151} />
//                    </div>
//                    <div className="justify-items-center bg-gray-50">
//                        <p className="text-[18px] font-bold mb-6 text-red-600">Cantilever chair</p>
//                         <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
//                         <p className="text-[14px] mt-6 text-blue-900">Code - Y523201</p>
//                         <p className="text-[14px] mt-6 text-blue-900">$42.00</p>
//                    </div>
//                </div>
//            </section>
// </div>

//     )
// };
// export default FeaturedProduct








// import Image from "next/image";

// function TopCategories () {
//     return (
//         <div>
//           <div className="w-[1920px] mt-[129px] text-[35px] font-semibold flex justify-center">
//               <h1>Top Categories</h1>
//           </div>
//           <section className=" bg-white flex w-[1920px] h-[361px] ">
//           {/*Chair 1 */}
//                   <div className="w-[269px] h-[345px]  ml-[376px] mt-[48px] ">
//                       <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full shadow-blue-600 shadow-lg">
//                            <Image src={"/images/image20.png"} alt="" width={178} height={178}  />
//                    <div><button  className=" bg-[#08D15F]  text-white text-[12px] w-[94px] h-[29px]">View Shop</button></div>  
//                   </div>
//                   <div className="justify-items-center mt-[15px] bg-gray-50">
//                       <p className="text-[20px]">Mini LCW chair</p>
//                       <p className="text-[14px] ">$56.00 </p>
//                   </div>
//               </div>
//           {/* Chair 2 */}
//               <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
//                    <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full">
//                        <Image src={"/images/image1168.png"} alt="" width={158} height={157}  />
//                   </div>
//                   <div className="justify-items-center mt-[15px] bg-gray-50">
//                       <p className="text-[20px]">Mini LCW chair</p>
//                       <p className="text-[14px] ">$56.00 </p>
//                   </div>
//               </div>
//           {/*Chair 3 */}
//               <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
//                    <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full">
//                        <Image src={"/images/image1171.png"} alt="" width={158} height={157}  />
//                   </div>
//                   <div className="justify-items-center mt-[15px] bg-gray-50">
//                       <p className="text-[20px]">Mini LCW chair</p>
//                       <p className="text-[14px] ">$56.00 </p>
//                   </div>
//               </div>
//           {/*Chair 4 */}
//               <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
//                    <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full">
//                        <Image src={"/images/image20.png"} alt="" width={158} height={157}  />
//                   </div>
//                   <div className="justify-items-center mt-[15px] bg-gray-50">
//                       <p className="text-[20px]">Mini LCW chair</p>
//                       <p className="text-[14px] ">$56.00 </p>
//                   </div>
//               </div>
//           </section>
// </div>

//     )
// };
// export default TopCategories