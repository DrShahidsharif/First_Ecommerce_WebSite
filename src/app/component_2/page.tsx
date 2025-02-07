"use client"

import Image from "next/image";
import React, {useEffect, useState} from "react"
import type { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

const Product = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct(){
            const fetchedProduct : Product[]= await client.fetch(allproducts)
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
        timer:1000   //1000ms = 1s 2000ms = 2s 
    })
    addToCart(product)
}
    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center"> Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {product.map((product) =>(
                <div key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 ">
                    <Link href={`/product/${product.slug.current}`} >
                    
                    {product.image && (
                         <Image 
                        src={urlFor(product.image).url()}
                         alt={product.name}
                         className="w-60"
                         width={500}
                         height={500}
                         />
                    )}
                    <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                    <p className="text-gray-500 mt-2">
                        {product.price}
                       </p> 
                       <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md " onClick={(e)=> handleAddToCart(e, product)}>
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
export default Product




// "use client"
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { urlFor } from "@/sanity/lib/image";
// import { allproducts } from "@/sanity/lib/queries";
// import Image from "next/image";
// import Swal from "sweetalert2";
// import { addToCart } from "../actions/actions";
// import { Product } from "../../types/products";



// type products = {
//     _id: string,
//     name: string,
//     imageurl: string,
//     price: number,
//     rating: number,
//     numreviews: number,
//     description: string, 
//     stockLevel:number,
//     categary: string,
//     brand: string,
//     discount: number,
//     color: string,
//     size: string,
//     material: string,
//     image: string 
// }

// export default async function Home(){
//     const products : products[] = await sanityFetch({query : allproducts})

//     const handleAddToCart = (e:React.MouseEvent, product: Product) =>{
//         e.preventDefault()
//         Swal.fire({
//             position: "top",
//             icon: "success",
//             title: `${product.name} added to cart`,
//             showConfirmButton: false,
//             timer:1000   //1000ms = 1s 2000ms = 2s 
//         })
//         addToCart(product)
//     }

//     return(
//         <div>
//             <h1>Products</h1>
//             <div className="grid grid-cols-3 gap-4">
//                 {products.map((product)=>(
//                     <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center " key={product._id}>
                        
//                         <Image 
//                         src={urlFor(product.image).url()}
//                         alt={product.name}
//                         className="w-60"
//                         width={500}
//                         height={500}
//                         />
//                         <h2 className="text-xl font-bold text-center">
//                             {product.name}
//                         </h2>
//                         <p className="text-center">
//                             {product.description}
//                         </p>
//                         <p className="text-center">
//                             {product.price}
//                         </p>
//                          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md " onClick={(e)=> handleAddToCart(e, product)}>
//                         Add To Cart
//                         </button>

//                     </div>
//                 ) )}
//             </div>

//         </div>
//     )
    
// }
