import Image from "next/image";

function Unique () {
    return (
        <div>
          <div className="flex bg-[#F1F0FF]  w-[1920px] h-[580x]">
          <div className="w-[1050px] h-[550px] ml-[435px] flex">
                      <div className="">
                          <div className="">
                           <Image src={"/images/Home_Stylish.png"} alt="" width={509} height={550} />
                          </div>
                      </div>
                      <div className="mt-[82px]" >
                          <p className="text-[35px] font-semibold w-[507px] h-[92px] ">Unique Features Of leatest & Trending Poducts</p>
                          <div className="text-[#ACABC3] flex mt-[22px] gap-[4px]">
                              <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
                              <p className="text-[16] w-[570px] h-[56px]">All frames constructed with hardwood solids and laminates</p>
                          </div>
                          <div className="text-[#ACABC3] flex mt-[13px] gap-[4px]">
                              <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
                              <p className="text-[16] w-[570px] h-[56px]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                          </div>
                          <div className="text-[#ACABC3] flex mt-[13px] gap-[4px]">
                              <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
                              <p className="text-[16] w-[570px] h-[56px]">All frames constructed with hardwood solids and laminates</p>
                          </div>
                          <div className="flex gap-[19px] mt-[23px]">
                              <button className=" bg-[#FB2E86]  text-white text-[17]  w-[163px] h-[50px]">Add to Cart</button>
                              <div className="">
                                  <p>B&B Italian Sofa </p>
                                  <p>$32.00</p>
                              </div>
                          </div>
                      </div>
          </div>
                  </div>
</div>

    )
};
export default Unique





// "use client"

// import Image from "next/image";
// import React, {useEffect, useState} from "react"
// import { Product } from "../../../../types/products";
// import { client } from "@/sanity/lib/client";
// import { four, one, } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";

// const Unique = () => {
//     const [product, setProduct] = useState<Product[]>([])

//     useEffect(() => {
//         async function fetchproduct(){
//             const fetchedProduct : Product[]= await client.fetch(one)
//             setProduct(Array.isArray(fetchedProduct) ? fetchedProduct : [fetchedProduct]);
//         }
//         fetchproduct()
//     },[])
//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//            <div>
//              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {product.map((product) =>(
//                             <div key={product._id}
//                             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 ">
                                
                                
//                                 {product.image && (
//                                     <Image
//                                     src={urlFor(product.image).url()}
//                                     alt="image"
//                                     width={300}
//                                     height={300} 
//                                     className="w-full h-48 object-cover rounded-md"/>
//                                 )}
//                                 <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
//                                 <p className="text-gray-500 mt-2">
//                                     {product.price}
//                                    </p> 
            
//                             </div>
//                         )
//                         )}
//                     </div>
//            </div>
//            <div>
//              <div className="mt-[82px]" >
//                           <p className="text-[35px] font-semibold w-[507px] h-[92px] ">Unique Features Of leatest & Trending Poducts</p>
//                           <div className="text-[#ACABC3] flex mt-[22px] gap-[4px]">
//                               <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
//                               <p className="text-[16] w-[570px] h-[56px]">All frames constructed with hardwood solids and laminates</p>
//                           </div>
//                           <div className="text-[#ACABC3] flex mt-[13px] gap-[4px]">
//                               <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
//                               <p className="text-[16] w-[570px] h-[56px]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
//                           </div>
//                           <div className="text-[#ACABC3] flex mt-[13px] gap-[4px]">
//                               <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
//                               <p className="text-[16] w-[570px] h-[56px]">All frames constructed with hardwood solids and laminates</p>
//                           </div>
//                           <div className="flex gap-[19px] mt-[23px]">
//                               <button className=" bg-[#FB2E86]  text-white text-[17]  w-[163px] h-[50px]">Add to Cart</button>
//                               <div className="">
//                                   <p>B&B Italian Sofa </p>
//                                   <p>$32.00</p>
//                               </div>
//                           </div>
//                       </div>
//            </div>
//         </div>
//     )


// }
// export default Unique
