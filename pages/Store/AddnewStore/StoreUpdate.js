import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { gql , useMutation, useQuery }  from "@apollo/client";
import { Delete_Store, Update_Store,All_Store, Store_ByID } from '../../../Graphql/gql';

export default function StoreUpdate({storeid ,handleClick}) {
    const Router = useRouter(); 
    const {data ,error ,loading} = useQuery(Store_ByID,{variables:{id:storeid}});
    const storedata = data?.storeById;  
    const [formData, setform] = useState({ name: "", logo: "", email: "" });
   
    const [Updatestore] = useMutation(Update_Store, {refetchQueries: [{ query: All_Store }]});
    const [Deletestore] = useMutation(Delete_Store, {refetchQueries: [{ query: All_Store }]});
    const ChangesInput = (e) => {
    const inpfield = e.target.name;
    const inpval = e.target.value;
    setform({ ...formData, [inpfield]: inpval })
   }
  function onSubmit(e) {
    if(!formData.email){
        formData.email = storedata.adminMail;
    }
    if(!formData.name){
        formData.name = storedata.storeName;
    }
    if(!formData.Url){
        formData.Url = storedata.storeUrl;
    }
    if(!formData.logo){
        formData.logo = storedata.storeLogo;
    }
    e.preventDefault();
    Updatestore({ variables: {id:storeid, adminMail: formData.email, storeName: formData.name, storeLogo: formData.logo, storeUrl: `/Store/${formData.name}` } }).then( handleClick());
  }
  function DeleteStore(){
    Deletestore({ variables: {id:storeid} }).then(handleClick());
  }
    
  return (
    <div> <div className="p-7 m-3 flex gap-3   " >
        
       
    <div className=''>
      <form onSubmit={onSubmit}>

        <h1 className="text-center text-lg text-[lato] border-b-2  mb-3 font-bold uppercase text-[#28234a]"> Update  Store Details</h1>
        <label className=" text-md font-medium text-[lato] mb-2  uppercase text-black">
          Store Name
        </label>
        <input
          type="text"
          name='name'
          onChange={ChangesInput}
          className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id='name'
          defaultValue={storedata?.storeName}
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
          defaultValue={storedata?.adminMail}
          placeholder="Admin Email" required
        />
      
        <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
          Store Logo
        </label>
        <input
          type="text"
          name='logo'
          onChange={ChangesInput}
          defaultValue={storedata?.storeLogo}
          className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id='Url'
          placeholder="paste Logo Url Here" required
        />
        <button type="submit" className='bg-blue-500 border-b-4  hover:border-blue-500 border-blue-700 text-white font-bold  hover:bg-blue-400 py-2 px-3 my-2  mx-auto rounded-sm text-sm text-[lato]  '>Update Store</button>
      </form>
      <button onClick={DeleteStore}  className='bg-red-500 border-b-4   hover:border-red-500 border-red-700 text-white font-bold  hover:bg-red-400 py-2 px-2  text-xs  my-2 mx-auto rounded-sm text-[lato]'>Delete Store</button>
      </div>    
  </div></div>
    
  )
}
