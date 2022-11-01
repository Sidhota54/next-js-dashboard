import React from 'react'
import { createPopper } from "@popperjs/core";
import { useState } from 'react';
import Dropdown from "../Dropdown"

export default function Addnew() {
    const Category = [{ name: "VIRTUAL INSTRUMENTS" }, { name: "EFFECTS" }, { name: "EXPANSIONS" }, { name: "SOUND PACKS" }]
    return (
        <div>

            <div id='section2' className="p-8 my-3  rounded shadow bg-gray-300">
                <div className="">
                    <div >
                        <h1 className="text-left mb-3 text-3xl text-[lato] border-b-2 font-bold uppercase text-[#28234a]">Add New Product</h1>
                    </div>
                </div>
                <div className='p-8 mt-3 lg:mt-0 rounded shadow bg-white'>


                    <form >
                        <div className='flex gap-8 '>
                            <div className='container w-[70%] text-left bg-blue-200  p-3 rounded-lg'>
                                <h1 className="text-left text-lg text-[lato] border-b-2 font-bold uppercase text-[#28234a]"> General Information</h1>
                                <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Product Name"
                                />
                                <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
                                    Description
                                </label>
                                <input
                                    type="textarea"
                                    className="form-control block px-4 pb-7 w-full py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Description"
                                />
                                <label className="text-left text-md  font-medium text-[lato] mb-2  uppercase text-black">
                                    Product Rating
                                </label>
                                <input
                                    type="text"
                                    className="form-control block w-64 px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Product Rating" type="Number"
                                />

                            </div>
                            <div className='container w-64 justify-end text-left bg-blue-200  p-3 rounded-lg'>
                                <h1 className="text-center text-lg text-[lato] border-b-2 font-bold uppercase text-[#28234a]"> Organize Product</h1>
                                <div className='text-center  mb-3'>
                                    <label className="text-left text-md font-medium text-[lato]   uppercase text-black">
                                        Select Category
                                    </label>
                                    <Dropdown option="Select Category" items={Category} bgcolor="bg-rose-300" ></Dropdown>
                                </div>
                                <div className=' text-center  mb-3'>
                                    <label className="text-md text-[lato] font-medium  uppercase text-black">
                                        Select Collection
                                    </label>
                                    <Dropdown option="Select Collection" items={Category} bgcolor="bg-rose-300" ></Dropdown>
                                </div>
                                {/* <label className="text-left text-md text-[lato] mb-2  uppercase text-black">
                                    Product Rating
                                </label>
                                <input
                                    type="text"
                                    className="form-control block w-64 px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Product Rating" type="Number"
                                /> */}

                            </div>
                        </div>
                        <div className='flex gap-8  mt-6'>
                            <div className='container w-64 text-left bg-blue-200  p-3 rounded-lg'>
                                <h1 className="text-left text-lg text-[lato] border-b-2 font-bold uppercase text-[#28234a]">  Pricing  & Quantity</h1>
                                <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
                                    Pricing
                                </label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Product Price" type="number"
                                />
                                <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
                                    Quantity
                                </label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Product Quantity" type="number"
                                />
                            </div>
                            <div className='container w-64 text-left bg-blue-200  p-3 rounded-lg'>
                                <h1 className="text-left text-lg text-[lato] border-b-2 font-bold uppercase text-[#28234a]">Availability</h1>
                                <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
                                    From
                                </label>
                                <div class="flex items-center justify-center">
                                    <div class="datepicker relative form-floating mb-3 xl:w-96">
                                        <input type="date"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Select a date" />
                                       
                                    </div>
                                </div>
                                <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
                                    To
                                </label>
                                <div class="flex items-center justify-center">
                                    <div class="datepicker relative form-floating mb-3 xl:w-96">
                                        <input type="date"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Select a date" />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-end rounded-md bg-slate-500">
                            <button className='py-2 px-4 m-2  bg-blue-800 rounded-md'> Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}



// export const Dropdown = ({ items, option }) => {
//     const [toggleDropdown, settoggleDropdown] = useState(false);
//     if (option == null) {
//         option = "Select Droupdown";
//     }
//     if (items == null) {
//         items = [{
//             name: "slect dropdown 1"
//         },
//         {
//             name: "slect dropdown 2"
//         }, {
//             name: "slect dropdown 3"
//         }, {
//             name: "slect dropdown 4"
//         }]
//     }
//     return (
//         <div className=" w-30   bg-white">
//             <div >
//                 <button type="button" className="mx-2 flex py-3 w-full rounded-md bg-[#10162e] focus:bg-blue-600  text-sm font-medium text-gray-300 shadow-sm focus:outline-none  px-4 " onClick={() => { settoggleDropdown(!toggleDropdown) }} >

//                     <h1>{option}</h1>
//                     <svg className="ml-auto mr-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                         <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
//                     </svg>
//                 </button>
//             </div>
//             <div className="w-30">

//                 {toggleDropdown ?
//                     <div className="absolute w-30 z-70 w-56  ml-2  origin-top-right bg-white border border-gray-100 rounded-b-md shadow-lg">
//                         <div className="p-2">
//                             {items.map((n) =>
//                                 <button className="block w-30 px-4 py-2 hover:bg-black hover:font-bold  text-sm text-gray-900 text-[lato] rounded-lg hover:text-gray-100" > {n.name}
//                                 </button>
//                             )}

//                         </div>
//                     </div>
//                     : null}
//             </div>
//         </div>
//     )
// }

