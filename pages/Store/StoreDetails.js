
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { gql, useQuery,useMutation } from "@apollo/client";
import { All_Store ,Delete_Store } from '../../Graphql/gql';
import { userAgent } from 'next/server';
import StoreUpdate from "./AddnewStore/StoreUpdate"

export default function StoreDetails() {
    const [IdofUpdate, setIdofUpdate]= useState(0)
    const [showModal, setShowModal] = React.useState(false);
    const { error, loading, data } = useQuery(All_Store);
    const [Stores ,setStores] = useState(useQuery(All_Store)?.data?.allStore);
    const [Deletestore] = useMutation(Delete_Store, {refetchQueries: [{ query: All_Store }]});
    useEffect(()=>{
            setStores(data?.allStore)
    },[data]);
    const SelectedDelete = (e)=>{
        Stores.map((store) => {
                if(store.isChecked){
                    Deletestore({ variables: {id:store.id} });
                }
        });
    }
    const handleClick = () => {
        // console.log("jhgfjhg");
        setShowModal(false);
      };
    
    const handleChange = (e)=>{
        const { name , checked }  = e.target;
        if(name === "allSelect"){
            let tempStore = Stores.map((store) => {return {...store,isChecked : checked}});
            setStores(tempStore);
        }
        else{
        let tempStore = Stores.map((store) =>
            store.storeName === name ? {...store,isChecked : checked } : store
         );
         setStores(tempStore);
        }
          
    }
    if (loading) { return <h1>Loading....</h1> }
    if (error) { console.log(error.message) }
    return (
        <>
        <div className=''>
            <h1 className="text-left text-lg text-[lato] border-b-2 font-bold uppercase text-[#28234a]"> All Store Details</h1>
          
            <table className="border bg-slate-50 mt-4 w-full p-2 ">
                <thead className='border'>
                    <tr className='border text-[#28234a] bg-gray-300'>
                        <th className='border p-2'><div className="form-check items-center">
                       
                            <input type="checkbox" className=' w-5 h-5 ' name="allSelect"
                            checked={Stores?.filter((store) => store?.isChecked !== true).length < 1} onChange={handleChange} value="" id="flexCheckChecked"  />  
                             <button onClick={SelectedDelete} className='bg-red-500 border-b-4 text-xs  hover:border-red-500 border-red-700 text-white font-bold  hover:bg-red-400 p-2 ml-2 mx-auto rounded-sm text-[lato]'>Go</button>
                                {/* <label className="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                </label> */}
                        </div></th>
                        <th className='border p-2'>Store ID</th>
                        <th className='border p-2' >Store Name</th>
                        <th className='border py-2 px-4' >Store Admin Email</th>
                        <th className='border py-2 px-4-2' >Store URL</th>
                        <th className='border py-2 px-4'>Store LOGO</th>
                        <th className='border py-2 px-4'>Modify</th>
                    </tr>
                </thead>
                <tbody className='border bg-white'>
                    {Stores?.map((n) =>
                        <tr>
                             <td className='border'><input type="checkbox" className='border w-4 h-4' name={n.storeName} checked={n?.isChecked || false} onChange={handleChange} value="" id="flexCheckChecked"  /></td>
                            <td className='border'>{n.id}</td>
                            <td className='border'> {n.storeName}</td>
                            <td className='border'>{n.adminMail}</td>
                            <td className='border'>{n.storeUrl}</td>
                            <td className='border'>{n.storeLogo}</td>
                            <th className='border'>
                                {/* <Link href={`/Store/AddnewStore/${n.id}`}> */}
                                <button onClick={() =>{setIdofUpdate(n.id)
                                     setShowModal(true)}} className="bg-blue-500 border-b-4  hover:border-blue-500 border-blue-700 text-white font-bold  hover:bg-blue-400 py-2 px-3 my-2  mx-auto rounded-sm text-sm text-[lato] ">Update</button>
                            {/* </Link> */}
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
        {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                   <StoreUpdate storeid={IdofUpdate} handleClick={handleClick}></StoreUpdate>
                   </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          </>
    )
}
