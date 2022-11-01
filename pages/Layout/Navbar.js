import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import gql  from "@apollo/client";
import client  from "../apollo-client";

export default function Navbar() {
  const [selectDroupdown, setselectDroupdown] = useState(false);
  const [userDroupdown, setuserDroupdown] = useState(false);
  const Router = useRouter();
  const [currentPath, setcurrentPath] = useState("Store");

  // const { data } =  client.query({
  //   query: gql`
  //   query{
  //     allStore{
  //       storeName
  //       storeLogo
  //       adminMail
  //     }
  //   }
  //   `,
  // });

  const arrayStore = [{
    url: "/Store/Air",
    name: "Air"
  },
  {
    url: "/Store/AKIA",
    name: "AKIA"
  },
  {
    url: "/Store/ALESIS",
    name: "ALESIS"
  },
  {
    url: "/Store/AddnewStore",
    name: "Add new"
  }
  ]
 
  useEffect(() => {
    {
      arrayStore.map((n) => {
        if (n.url == Router.asPath) { 
          setcurrentPath(n.name)   
        }
      }
      )
    }
  }, [Router.asPath])
  return (
    <nav className='flex fixed z-50  w-full flex-wrap bg-[#10162e] shadow-lg border-b-2 border-red-500 p-2'>
      <div className="relative justify-start  inline-block w-[10%]  ml-50">
       
        <div>
          <button type="button" className="mx-2 flex  w-full rounded-md bg-[#10162e] focus:bg-blue-600  py-2 text-sm font-medium text-gray-300 shadow-sm focus:outline-none  px-4 " onClick={() => setselectDroupdown(!selectDroupdown)} >

            <h1> {currentPath}</h1>
            <svg className="ml-auto mr-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </button>
        </div>
        {selectDroupdown ?
          <div className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none" onClick={() => setselectDroupdown(false)}>
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              {arrayStore.map((n) =>
                <Link href={n.url} className="text-gray-700 m-2 rounded-lg hover:text-white hover:font-bold block hover:bg-gray-600 px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">{n.name}</Link>
              )}
            </div>


          </div>
          : null}

      </div>
      <div className=" mr-2 justify-end items-center mx-auto">
       
        <div className="flex items-center md:order-2">
          <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={() => setuserDroupdown(!userDroupdown)}>
            <span className="sr-only">Open user menu</span>
            <img className="w-9 h-9 rounded-full" src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"  alt="user photo" />
          </button>
        {userDroupdown?
          <div className=" absolute mt-3 top-10 right-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" id="user-dropdown" onClick={() => setuserDroupdown(!userDroupdown)}>
            <div className="py-3 px-4">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              
              <li>
                <a href="/" className="block py-2 px-4 rounded-md mx-2 text-sm hover:bg-gray-600 hover:text-white hover:font-semibold text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>:null}
        </div>
        </div>

    </nav>

  )
}
