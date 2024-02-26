import React from 'react'
import Navbar from '../Components/CoverPage/Navbar'
import Layout from '../Components/CoverPage/Layout'

const Login = () => {
  return (
   <>

   <Layout>
   <div className="container my-12">
    

    <form className="max-w-sm mx-auto  p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <h1 className='text-3xl text-center font-700 text-blue-500'>Login Form</h1>
      <div className="mb-5">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" enter username" required />
      </div>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter password' required />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        <a href="/register" className="ms-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Don't Have an Account ?</a>
      </div>
     
      <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    </form>
    
       </div>
   </Layout>
   </>
  )
}

export default Login
