import React from 'react'
import { SelectedView } from '../../App'
import './title.css'

export const Header = ({setSelectedView, selectedView} : { setSelectedView : React.Dispatch<React.SetStateAction<SelectedView>>, selectedView: SelectedView }) => (
  <nav className='flex items-center flex-wrap bg-teal-500 p-6 mb-8 justify-center'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight title'>
        Green Ventures
      </span>
    </div>
    <ul className='flex justify-evenly flex-grow max-w-[500px]'>
      <li className='mr-3'>
        <div
          className={`inline-block border border-teal-800 rounded py-2 px-4 hover:border-gray-200 text-white hover:bg-teal-300 ${selectedView === SelectedView.VentureModel ? 'bg-teal-600' : 'border-teal-800'}`}
          onClick={() => setSelectedView(SelectedView.VentureModel)}
        >
          Online ML Model
        </div>
      </li>
      <li className='mr-3'>
        <div
          className={`inline-block border border-teal-800 rounded hover:border-gray-200 text-white hover:bg-teal-300 py-2 px-4 ${selectedView === SelectedView.DataViz ? 'bg-teal-600' : 'border-teal-800'}`}
          onClick={() => setSelectedView(SelectedView.DataViz)}
        >
          Data visualization
        </div>
      </li>
    </ul>
  </nav>
)
