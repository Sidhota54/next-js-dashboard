import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [selectDroupdown, setselectDroupdown] = useState(false);
  return (
    
  
    <nav className='flex  w-full items-center flex-wrap bg-green-300 p-3 '>


      <div className="relative inline-block  ml-30">
        <div>
          <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={()=>setselectDroupdown(!selectDroupdown)} >
            Options
           
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>


  {selectDroupdown ? 
        <div className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div className="py-1" role="none" onClick={()=>setselectDroupdown(false)}>
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <a href="#" className="text-gray-700 block px-4  hover:bg-black  py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
            <a href="#" className="text-gray-700 block hover:bg-black px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
            <a href="#" className="text-gray-700 block hover:bg-black px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
          
          </div>
        </div>
        :null}
      </div>

      

    </nav>
   
  )
}
