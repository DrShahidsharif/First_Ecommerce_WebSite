"use client";
import { client } from "@/sanity/lib/client";
import type { Product } from "../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: { slug: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product = await client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
          _id,
          name,
          _type,
          image,
          price,
          description,
          discountPercentage,
          stockLevel
        }`,
        { slug: params.slug }
      );
      setProduct(fetchedProduct);
    }

    fetchProduct();
  }, [params.slug]);

  if (!product) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p className="text-2xl">{product.description}</p>
          <p className="text-2xl">Discount: {product.discountPercentage}%</p>
          <p className="text-2xl">Stock: {product.stockLevel}</p>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
