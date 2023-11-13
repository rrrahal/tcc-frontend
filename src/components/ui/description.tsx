import React from 'react'
import { Textarea } from './textarea'
import { TitleComponent } from './title'
import { SubmitButton } from './submit_button'
import { venture1, venture2, venture3 } from '../../data/venture_descriptions'

enum VentureResponse {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    NOT_STARTED = 'NOT_STARTED',
  }


export const Description = () => {
    const [ventureDescription, setVentureDescription] = React.useState('')
    const [ventureResponse, setVentureResponse] = React.useState(
    VentureResponse.NOT_STARTED
    )

    return (
        <>
        <div className='TextAreaContainer flex'>
        <div className='flex flex-col'>
          <TitleComponent />
          <Textarea
              className='w-1/2  min-w-[400px]'
              setText={setVentureDescription}
              text={ventureDescription === '' ? undefined : ventureDescription}
            />
            <SubmitButton content={ventureDescription} />
          </div>

          <div className='flex flex-col'>
            <button className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[120px] " type="button"
                onClick={() => setVentureDescription(venture1)}
            >
                Example 1
            </button>
            <button className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[120px]" type="button"
                onClick={() => setVentureDescription(venture2)}
            >
                Example 2
            </button>
            <button className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[120px]" type="button"
                onClick={() => setVentureDescription(venture3)}
            >
                Example 3
            </button>
            <button className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[200px]" type="button"
            >
                Other Random Example
            </button>
          </div>
        </div>
          </>)

}