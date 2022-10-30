import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';



  const Layout = ({ children }) => {
    return (
      <>
      
        <Navbar/>
        <div className='flex '>
        <Sidebar></Sidebar>
        <div className="ml-10 mt-10 w-full "> {children}</div> 
        </div>
   
     
        
     
      </>
    );
  };
export default Layout