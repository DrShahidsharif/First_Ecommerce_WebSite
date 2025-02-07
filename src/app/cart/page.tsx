"use client";

import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            position: 'top',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire('Removed!', 'This product has been removed', 'success');
            }
        });
    };

    const handleQuantity = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) handleQuantity(id, product.stockLevel + 1);
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.stockLevel > 1) handleQuantity(id, product.stockLevel - 1);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
    };

    const handleProceed = () => {
        Swal.fire({
            title: 'Proceed to checkout',
            text: 'Are you sure you want to proceed to checkout?',
            position: 'top',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Success', 'Your order has been successfully added', 'success');
                setCartItems([]);
            }
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex justify-between items-center border-b py-4">
                                <div className="flex items-center gap-4">
                                    {item.image &&(
                                      <Image
                                      src={urlFor(item.image).url()}
                                      alt='image'
                                      width={500}
                                      height={500}
                                   className="w-16 h-16 rounded-md" />
                                    )} 
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-500">${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 ">
                                    <button onClick={() => handleDecrement(item._id)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                                    <span>{item.stockLevel}</span>
                                    <button onClick={() => handleIncrement(item._id)} className="px-3 py-1 bg-gray-300 rounded">+</button>
                                </div>
                                <button onClick={() => handleRemove(item._id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-4">
                            <h3 className="text-lg font-bold">Total: ${calculateTotal()}</h3>
                            <button onClick={handleProceed} className="px-4 py-2 bg-blue-500 text-white rounded">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
