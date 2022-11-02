import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { gql , useMutation, useQuery }  from "@apollo/client";

const  Store  =  gql`
  query($id:String){
    storeById(id:$id){
        id
        storeName
        storeUrl
        storeLogo
        adminMail
      }
  }
  `;
//   const UpdateStore =gql`

//   `;

export default function update() {
    const Router = useRouter();
    const storeid = Router.query.id;
    const {data ,error ,loading} = useQuery(Store,{variables:{id:storeid}});
    const storedata = data?.storeById;
    console.log("")
   
    const [formData, setform] = useState({ name: "", logo: "", Url: "", email: "" });
//   const [Addnewstore] = useMutation(AddStore);
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
    console.log("sidd", formData);
    // Addnewstore({ variables: { adminMail: formData.email, storeName: formData.name, storeLogo: formData.logo, storeUrl: formData.Url } })
    // .then( alert("added"));
  }
  function DeleteStore(){
    console.log("Snhskjbsj")
  }
    
  return (
    <div> <div className="p-7 m-3 flex gap-3 rounded shadow bg-gray-300">
        
       
    <div className='w-3/12  text-left bg-blue-200  p-3 rounded-lg'>
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
          value={storedata?.storeName}
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
          Store URL
        </label>
        <input
          type="text"
          name='Url'
          onChange={ChangesInput}
          className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id='Url'
          value={storedata?.storeUrl}
          placeholder="Admin Email" required
        />
        <label className="text-left text-md font-medium text-[lato] mb-2  uppercase text-black">
          Store URL
        </label>
        <input
          type="text"
          name='logo'
          onChange={ChangesInput}
          value={storedata?.storeLogo}
          className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id='Url'
          placeholder="paste Logo Url Here" required
        />
        <button type="submit" className='py-2 px-3 my-2 mx-auto rounded-sm hover:text-gray-700 font-semibold text-sm text-[lato] bg-gray-400 hover:bg-green-400'>Update Store</button>
      </form>
      <button onClick={DeleteStore}  className='py-2 px-3 my-2 mx-auto rounded-sm hover:text-red-700 font-semibold text-sm text-[lato] bg-red-400 hover:bg-green-400'>Delete Store</button>
      </div>
     

    
  </div></div>
    
  )
}
