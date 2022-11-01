import React from 'react'
import { createPopper } from "@popperjs/core";
import { useState } from 'react';

export const Dropdown = ({ items, option,bgcolor }) => {
    const [toggleDropdown, settoggleDropdown] = useState(false);
    const [option1 ,setoption1] = useState(option);
  
    if(bgcolor==null){
        bgcolor = "bg-gray-300";
    } 
    if (items == null) {
        items = [{
            name: "slect dropdown 1"
        },
        {
            name: "slect dropdown 2"
        }, {
            name: "slect dropdown 3"
        }, {
            name: "slect dropdown 4"
        }]
    }
    
    return (
        <div className= "">
            <div >
                <button type="button" className={`${bgcolor}  flex py-3 w-full rounded-md  focus:bg-blue-600  text-sm font-medium text-gray-800 shadow-sm focus:outline-none  px-4 `} onClick={() => { settoggleDropdown(!toggleDropdown) }} >

                    <h1>{option1}</h1>
                    <svg className="ml-auto mr-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                    </svg>
                </button>
            </div>
            <div className="w-30">

                {toggleDropdown ?
                    <div onClick={() => {  }} className="absolute w-30 z-70 w-56  ml-2  origin-top-right bg-white border border-gray-100 rounded-b-md shadow-lg">
                        <div className="p-2">
                            {items.map((n) =>
                                <button className="block w-30 px-4 py-2 hover:bg-black hover:font-bold  text-sm text-gray-900 text-[lato] rounded-lg hover:text-gray-100" onClick={() => {setoption1(n.name)
                                    settoggleDropdown(!toggleDropdown)
                                    }} > {n.name}
                                </button>
                            )}

                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}
export default Dropdown