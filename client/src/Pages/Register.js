import React from 'react'
import Navbar from '../Components/CoverPage/Navbar'
import Layout from '../Components/CoverPage/Layout'

const Register = () => {
  return (
    <>
   <Layout>
    
   <div className="container my-12">
    <form className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <h1 className='text-3xl text-center font-700 text-blue-500 my-2'>Login Form</h1>
    <div className="mb-5 flex flex-wrap justify-between">
        <div className='2'>
        <label for="firstName" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">FirstName</label>
    <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" firstname" required />

        </div>
   <div className=''>
   <label for="lasttName" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
    <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" lastname" required />
 
   </div>
     </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter email' required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter password' required />
  </div>
  <div className="mb-5">
    <label for="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
    <input type="password" id="confirmpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter password' required />
  </div>

 
  <div className="flex items-start mb-5">
   
   
    <a href="/login" className="ms-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Already Have an Account ?</a>
  </div>
 
  <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</form>

    </div>
   </Layout>

    </>
  )
}

export default Register
