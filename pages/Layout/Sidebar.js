import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function Sidebar() {
   const router = useRouter();


   return (

      <aside className="w-64 overflow-hidden h-[90hv]    sticky   left-0 z-10  " aria-label="Sidebar">
         <div className="overflow-y-auto py-4 container px-3 bg-[#a3c3d7]  h-screen rounded  dark:bg-gray-800 ">
            <ul className="space-y-5 h-full flex pt-5   flex-col  justify-between">
               <div>
                 
                  <li>
                     <Link href="/Orders">
                        <button className={` relative mt-10 w-full flex ${router.route == "/Orders" ? "bg-green-300" : "bg-transparent"}  my-2  items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-300 dark:hover:bg-gray-700`}>
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                           <span className=" ml-3 whitespace-nowrap">Orders</span>
                           <span className="inline-flex absolute right-2 justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-gray-600 bg-green-400 rounded-full dark:bg-blue-900 dark:text-blue-200">9</span>
                        </button>
                     </Link>
                  </li>

                  <li>
                     <Link href="/Products">
                        <button href="#" className={` relative w-full flex ${router.route == "/Products" ? "bg-green-300" : "bg-transparent"}  my-2  items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-300 dark:hover:bg-gray-700`}>
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" ></path></svg>
                           <span className=" ml-3 whitespace-nowrap">Products</span>
                           <span className="inline-flex absolute right-2 justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                        </button>
                     </Link>
                  </li>
        
               </div>
               <li className=''>
                  <Link href="/User">
                     <button href="#" className={`relative  bottom-0 w-full flex ${router.route == "/User" ? "bg-green-300" : "bg-transparent"}  my-2  items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-300 dark:hover:bg-gray-700`}>
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                        <span className="ml-3  whitespace-nowrap">Users</span>
                        <span className="inline-flex absolute right-2 justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-gray-600 bg-green-400 rounded-full dark:bg-blue-900 dark:text-blue-200">9</span>
                     </button>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>

   )
}
