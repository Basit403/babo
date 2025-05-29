"use client"

import React from 'react'
import Image from 'next/image'
import { useCartStore } from '@/hooks/useCartStore'
import {media as wixMedia} from "@wix/sdk"
import { useWixClient } from '@/hooks/useWixClient'



const CartModal = () => {

    // const cartItems = true;
    
    const wixClient = useWixClient(); 
    const {cart, isLoading,removeItem} = useCartStore()
 
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cart.lineItems ? (
                <div className=''>Cart is empty</div>
            ) : (
                <>
                    <h2 className='text-xl'>Shopping Cart</h2>
                    <div className='flex flex-col gap-8'>
                        {/* ITEMS */}
                        {cart.lineItems.map((item)=> ( 
                            <div className='flex gap-4 key={item._id}'>
                                {item.image && (
                                <Image 
                                    src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})}
                                    alt='' width={72}
                                    height={96} 
                                    className='object-cover rounded-md' 
                                />)}
                                <div className='flex flex-col justify-between w-full'>
                                    {/* TOP */}
                                    <div className=''>
                                        {/* TITLE */}
                                        <div className='flex items-center justify-between gap-8'>
                                            <h3 className='font-semibold'>{item.productName?.original}</h3>
                                            <div className='p-1 bg-gray-50 rounded-sm'>₦{item.price?.amount}</div>
                                        </div>
                                        {/* DESC */}
                                        <div className='test-sm text-gray-500'>
                                            {item.availability?.status}
                                        </div>
                                    </div>
                                    {/* B0TTOM */}
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-grray-500'>Qty. {item.quantity}</span>
                                        <span className='text-red-500 ' style={{ cursor: isLoading ? "not-allowed" : "pointer" }} onClick={()=>removeItem(wixClient,item._id!)}>Remove</span>
                                    </div>
                                </div>
                            </div>
                        ))}    
                    </div>

                    
                    {/* B0TTOM */}
                    <div className=''>
                        <div className='flex items-center justify-between font-semibold'>
                            <span className=''>Subtotal</span>
                            <span className=''>₦{cart.subtotal.amount}</span>
                        </div>    
                        <p className='text-grray-500 text-sm mt-2 mb-4'>
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className='flex justify-end text-sm flex'>
                            <button className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75'>Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModal
