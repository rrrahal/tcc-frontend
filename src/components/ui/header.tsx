import React from 'react'
import { SelectedView } from '../../App'

export const Header = ({setSelectedView} : { setSelectedView : React.Dispatch<React.SetStateAction<SelectedView>> }) => (
  <nav className='flex items-center flex-wrap bg-teal-500 p-6 mb-8'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight'>
        Green Ventures
      </span>
    </div>
    <ul className='flex justify-evenly flex-grow max-w-[500px]'>
      <li className='mr-3'>
        <div
          className='inline-block border border-teal-800 rounded py-2 px-4 bg-teal-600 hover:bg-blue-700 text-white'
          onClick={() => setSelectedView(SelectedView.VentureModel)}
        >
          Online ML Model
        </div>
      </li>
      <li className='mr-3'>
        <div
          className='inline-block border border-teal-800 rounded hover:border-gray-200 text-white hover:bg-teal-300 py-2 px-4'
          onClick={() => setSelectedView(SelectedView.DataViz)}
        >
          Data visualization
        </div>
      </li>
    </ul>
  </nav>
)
