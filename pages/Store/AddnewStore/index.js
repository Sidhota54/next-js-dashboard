
import React from 'react'
import { useState } from 'react';
import {  useQuery, useMutation } from "@apollo/client";
import StoreDetails from '../StoreDetails';
import { useEffect } from 'react';
import { Add_Store, All_Store } from '../../../Graphql/gql';


export default function AddnewStore() {
  const [formData, setform] = useState({ name: "", logo: "", email: "" });
  
  const [Addnewstore, { data, loading, error }] = useMutation(Add_Store, {refetchQueries: [{ query: All_Store }]});

  const ChangesInput = (e) => {
    const inpfield = e.target.name;
    const inpval = e.target.value;
    setform({ ...formData, [inpfield]: inpval })
  }
  function onSubmit(e) {
    e.preventDefault();
    Addnewstore({ variables: { adminMail: formData.email, storeName: formData.name, storeLogo: formData.logo, storeUrl: `/Store/${formData.name}` }})
    .then( e.target.reset(),console.log(data));
  }
  // useEffect(() => {
    
  //   console.log("sidd")
  // },[StoreDetails]);
 
  return (
    <div>
      <div className="p-7 m-3 flex gap-3">
       
        <div className='w-3/12  text-left bg-inherit bg-slate-50  p-3 rounded-lg'>
          <form onSubmit={onSubmit}>
            <h1 className="text-left text-lg text-[lato] border-b-2 font-bold uppercase text-[#28234a]"> Add New Store</h1>
            <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
              Store Name
            </label>
            <input
              type="text"
              name='name'
              onChange={ChangesInput}
              className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id='name'
              placeholder="Store Name" required
            />
            <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
              Store Admin Email
            </label>
            <input
              type="text"
              name='email'
          
              onChange={ChangesInput}
              className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id='email'
              placeholder="Admin Email" required
            />
           
            <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
              Store Logo
            </label>
            <input
              type="text"
              name='logo'
           
              onChange={ChangesInput}
              className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id='Url'
              placeholder="paste Logo Url Here" required
            />
            <div className='w-full flex'>
             
            <button type="submit" className=' bg-blue-500 border-b-4  hover:border-blue-500 border-blue-700 text-white font-bold  hover:bg-blue-400  px-4 my-2  mx-auto rounded-sm text-sm text-[lato]  '>Add Store</button>
         
            <button type="reset" className='bg-red-500 border-b-4  hover:border-red-500 border-red-700 text-white font-bold  hover:bg-red-400 py-2 px-3  ml-6 my-2 mx-auto rounded-sm text-[lato] '>Reset</button>
            </div>
          </form>
          {/* bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded */}
         
          </div>
          <div className='w-9/12 flex justify-center bg-slate-50 p-3 rounded-lg'>
          <StoreDetails></StoreDetails>
        </div>

      </div>
    </div>
  )
}
