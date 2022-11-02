
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { gql , useQuery }  from "@apollo/client";

const  Store = gql`
  query{
    allStore{
        id,
      storeName,
      storeLogo,
      adminMail,
      storeUrl,
    }
  }`;

export default function StoreDetails() {
    const {data ,error ,loading} =useQuery(Store);
    console.log(data?.allStore[0]?.id)
    return (
        <div className=''>
            <table className="border">
                <thead className='border '>
                    <tr className='border  bg-gray-300'>
                    <th className='border m-4'>Store ID</th>
                    <th className='border' >Store Name</th>
                    <th className='border' >Store Email</th>
                    <th className='border' >Store URL</th>
                    <th className='border'>Store LOGO</th>
                    <th className='border'>Action</th>
                </tr>
                </thead>
                <tbody className='border bg-white'>
                    {data?.allStore?.map((n) =>
                    <tr>
                        <td className='border'>{n.id}</td>
                        <td className='border'> {n.storeName}</td>
                        <td className='border'>{n.adminMail}</td>
                        <td className='border'>{n.storeUrl}</td>
                        <td className='border'>{n.storeLogo}</td>
                        <th className='border'><Link href={`/Store/UpdateStore/${n.id}`}>
                            <button className="py-2 mx-4 my-2 rounded-sm px-4 bg-slate-400">Update</button>
                            </Link>
                            </th>
                    </tr>
  )}
                </tbody>
            </table>

        </div>
    )
}
