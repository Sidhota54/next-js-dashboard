import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { useRouter } from 'next/router'
import Login from "../Login"
import { useState } from 'react';




const Layout = ({ children }) => {

  const router = useRouter();
  const [authUser, setsAuthUser] = useState(false);

  return (
    <>

      {authUser ? <Login></Login> : <> <Navbar />
        <div className='relative flex  '>
          {/* <div className='mt-30'> */}
          <Sidebar></Sidebar>
          {/* </div> */}

          <div className="m-5 mt-20 w-full h-full text-center  bg-[#a3c3d7] rounded-lg  "> {children}</div>
        </div>

      </>
      }
    </>
  );

};
export default Layout