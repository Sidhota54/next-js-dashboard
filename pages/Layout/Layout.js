import React  from 'react'
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
        {authUser ?  <Login></Login>: <> <Navbar/>
        <div className='relative flex  bg-gray-200 '>
          {/* <div className='mt-30'> */}
            <Sidebar></Sidebar>
          {/* </div> */}
       
        <div className="m-7 mt-20 w-full overflow-auto h-full text-center rounded-md shadow-2xl   "> {children}</div> 
        </div>
        </>

      }
     

      
   
     
        
     
      </>
    );
    
  };
export default Layout