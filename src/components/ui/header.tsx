import React from 'react'

export const Header = () => (
  <nav className='flex items-center flex-wrap bg-teal-500 p-6 mb-8'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight'>
        Green Ventures
      </span>
    </div>
    <ul className='flex justify-evenly flex-grow max-w-[500px]'>
      <li className='mr-3'>
        <a
          className='inline-block border border-teal-800 rounded py-2 px-4 bg-teal-600 hover:bg-blue-700 text-white'
          href='#'
        >
          Online ML Model
        </a>
      </li>
      <li className='mr-3'>
        <a
          className='inline-block border border-teal-800 rounded hover:border-gray-200 text-white hover:bg-teal-300 py-2 px-4'
          href='#'
        >
          Data visualization
        </a>
      </li>
    </ul>
  </nav>
)
