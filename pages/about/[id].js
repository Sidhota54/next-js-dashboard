import React from 'react'
import { useRouter } from 'next/router'
export default function dyna() {
    const router=useRouter()
  return (
    <div>dyna 
        <h1 className='bg-red-800'>{router.query.id}</h1>
    </div>
  )
}
