import React from 'react'
import Link from 'next/link'

export default function Products() {
    return (
        <div>

            <div id='section2' className="p-8 mt-3 lg:mt-0 rounded shadow bg-white">
                <div className=" mt-10">
                    <div >
                        <h1 className="text-left text-3xl text-[lato] border-b-2 font-bold uppercase text-[#28234a]"> Products</h1>
                    </div>
                    <div className='flex justify-end position-left'>
                        <Link href="/Product/Addnew">
                            <button className=' px-6 py-2 font-semibold rounded text-white bg-blue-800'> Add new product</button>

                        </Link>
                    </div>
                </div>
                <svg className="w-5 h-5  ml-4  text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>

                <input type="text" id="table-search-users" className="  block  p-3 pl-10 w-80 text-sm text-gray-900 bg-gray-200 rounded-lg " placeholder="Search for users" />

                <div>
                    <div className="overflow-x-auto  bg-white relative shadow-md sm:rounded-lg">
                        <table className="w-full mx-2 my-3 text-sm text-left  text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Type
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Availability
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Last updated
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <span className="">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="py-4 px-6">
                                        Sliver
                                    </td>
                                    <td className="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td className="py-4 px-6">
                                        $2999
                                    </td>
                                    <td className="py-4 px-6 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="py-4 px-6">
                                        White
                                    </td>
                                    <td className="py-4 px-6">
                                        Laptop PC
                                    </td>
                                    <td className="py-4 px-6">
                                        $1999
                                    </td>
                                    <td className="py-4 px-6 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="py-4 px-6">
                                        Black
                                    </td>
                                    <td className="py-4 px-6">
                                    <span className="inline-flex absolute text-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-gray-600 bg-green-400 rounded-full dark:bg-blue-900 dark:text-blue-200">9</span>
                                    </td>
                                    <td className="py-4 px-6">
                                        $99
                                    </td>
                                    <td className="py-4 px-6 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* <form>

    <div className="md:flex mb-6">
        <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                Text Field
            </label>
        </div>
        <div className="md:w-2/3">
            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value=""/>
            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
        </div>
    </div>

    <div className="md:flex mb-6">
        <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                Drop down field
            </label>
        </div>
        <div className="md:w-2/3">
            <select name="" className="form-select block w-full focus:bg-white" id="my-select">
                <option value="Default">Default</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>

            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
        </div>
    </div>

    <div className="md:flex mb-6">
        <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                Text Area
            </label>
        </div>
        <div className="md:w-2/3">
            <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="8"></textarea>
            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
        </div>
    </div>

    <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
            <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Save
            </button>
        </div>
    </div>
</form> */}

            </div>  </div>

    )
}
