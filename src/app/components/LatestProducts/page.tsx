"use client"

import Image from "next/image";
import React, {useEffect, useState} from "react"
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { fourToNine, } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

const LatestProducts = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct(){
            const fetchedProduct : Product[]= await client.fetch(fourToNine)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])

const handleAddToCart = (e:React.MouseEvent, product: Product) =>{
    e.preventDefault();
    Swal.fire({
        position: "top",
        icon: "success",
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer:1000,
    }).then(()=>{
        addToCart(product);
    });
};

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Latest Products</h1>
     <div>
         <ul className=" flex justify-center gap-x-12 text-[18px] mt-[19px] mb-10 ml-[35px]">
                     <li className="text-red-500">
                         <Link href="/">New Arrival</Link>
                     </li>
                     <li>
                         <Link href="/">Best Seller</Link>
                     </li>
                     <li>
                         <Link href="/">Featured</Link>
                     </li>
                     <li>
                         <Link href="/">Special Offer</Link>
                     </li>
         </ul>
     </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {product.map((product) =>(
                <div key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 ">
                    <Link  href={`/product/${product.slug.current}`} >
                    {product.image && (
                        <Image
                        src={urlFor(product.image).url()}
                        alt="image"
                        width={200}
                        height={200} 
                        className="w-full h-48 object-cover rounded-md"/>
                    )}
                    <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                    <p className="text-gray-500 mt-2 ">
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
export default LatestProducts
