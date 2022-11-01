import React from 'react'
import Link from 'next/link'

export default function Products() {
    return (
        <div>

            <div id='section2' className="p-8 mt-3 lg:mt-0 rounded shadow bg-white">
                <div className=" ">
                    <div >
                        <h1 className="text-left text-3xl text-[lato] border-b-2 font-bold uppercase text-[#28234a]"> Products</h1>
                    </div>
                    <div className='flex justify-end position-left'>
                        <Link href="/Products/Addnew">
                            <button className=' px-3 py-2 font-semibold rounded text-white bg-blue-800'> Add new product</button>

                        </Link>
                    </div>
                </div>
                

                <input type="text" id="table-search-users" className="   p-3 pl-10 w-[80%] mt-4 mb-4 text-sm text-gray-900 bg-gray-200 rounded-lg " placeholder="Search Product"/>

                <div>
                    <div className="overflow-x-auto  bg-gray-200 relative shadow-md sm:rounded-lg">
                        <table className="w-[95%] mx-2 my-3 text-sm text-left  text-gray-500 dark:text-gray-400">
                            <thead className="text-xs w-full ml-2 text-gray-700 uppercase bg-gray-200 ">
                                <tr>
                                    <th scope="col" className="py-3 ">
                                        Product name
                                    </th>
                                    <th scope="col" className="py-3 ">
                                        <div className="flex items-center">
                                            Type
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-3 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 ">
                                        <div className="flex items-center">
                                            Availability
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-3 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 ">
                                        <div className="flex items-center">
                                            Last updated
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-3 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 ">
                                        <span className="">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="py-4 ">
                                        Sliver
                                    </td>
                                    <td className="py-4 ">
                                        Laptop
                                    </td>
                                    <td className="py-4 ">
                                        $2999
                                    </td>
                                    <td className="py-4  ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>

                </div>

             

            </div>  </div>

    )
}
