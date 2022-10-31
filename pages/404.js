
import React from 'react'

 const errorpage = () => {
  return (
    <div>
        
        <section className="flex items-center h-full p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl text-gray-800">Sorry, we are working on it.</p>
			<p className="mt-4 mb-8 dark:text-gray-400 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded text-white bg-blue-800">Back to homepage</a>
		</div>
	</div>
</section></div>

  )
}
export default errorpage
