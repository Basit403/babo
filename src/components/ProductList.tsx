import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wixClientServer } from '@/lib/wixClientServer'
import { products } from '@wix/stores'

const PRODUCT_PER_PAGE = 20

const ProductList = async ({categoryId, limit}:{categoryId:string,limit?:number}) => {
    
    const wixClient = await wixClientServer();
    const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            {res.items.map((product: products.Product) => (
                <Link href={"/"+product.slug} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' key={product._id}>
                    <div className='relative w-full h-80'> 
                        <Image src="" 
                            alt='' 
                            fill 
                            sizes='25vw' 
                            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                        /> 
                        {product.media?.items && (
                            <Image src=""
                                alt='' 
                                fill 
                                sizes='25vw' 
                            />
                        )}    
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{product.name}</span>
                        <span className='font-semibold'>{product.price?.price}</span>    
                    </div>
                    <div className='text-sm text-gray-500'>My description</div>
                    <button className='rounded-2xl ring-1 ring-bb text-bb py-2 px-4 w-max text-xs hover:text-black'>Add to Cart</button>         
                </Link>
            ))}
        </div>
    )
}

export default ProductList
