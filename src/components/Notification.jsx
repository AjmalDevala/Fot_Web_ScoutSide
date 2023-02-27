import React from 'react'
import Navbar from './layout/Navbar'

function Notification() {

    
  return (
    <>
    <Navbar/>
      <div class="relative p-10 overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center lg-fixed justify-between pb-4 bg-white dark:bg-gray-900">
        
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>

    <table class="w-full  justify-center text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Message
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/>
                    <div class="pl-3">
                        <div class="text-base font-semibold">Neil Sims</div>
                        <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    React Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <button href="#" class="font-medium   hover:translate-x-2">Edit user</button>
                </td>
                <td class="px-6 py-4">
                    <button href="#" class="font-medium  dark:text-blue-500 hover:translate-x-2">Edit user</button>
                </td>
            </tr>
  
        </tbody>

    </table>
</div>
</>
  )
}

export default Notification
