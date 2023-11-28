import React from 'react'
import { Textarea } from './textarea'
import { TitleComponent } from './title'
import { SubmitButton } from './submit_button'
import { venture1, venture2, venture3, random_example } from '../../data/venture_descriptions'
import { Response } from './response'
import ProjectPresentation from './project_presentation'

export enum VentureResponse {
    GREEN = 'GREEN',
    NOT_GREEN = 'NOT_GREEN',
    ERROR = 'ERROR',
    NOT_STARTED = 'NOT_STARTED',
    LOADING = 'LOADING',
  }


export const Description = () => {
    const [ventureDescription, setVentureDescription] = React.useState('')
    const [ventureResponse, setVentureResponse] = React.useState(
    VentureResponse.NOT_STARTED
    )

    return (
        <>
        <ProjectPresentation />
        <TitleComponent />
        <div className='TextAreaContainer flex justify-center' >
        <div className='flex flex-col max-w-[600px]'>
          <Textarea
              className='w-1/2  min-w-[400px]'
              setText={setVentureDescription}
              text={ventureDescription === '' ? undefined : ventureDescription}
              rows={10}
            />
            <SubmitButton content={ventureDescription} setVentureResponse={setVentureResponse} ventureResponse={ventureResponse}  />
            {ventureResponse === VentureResponse.LOADING && <Response positive={false} loading={true} />}
            {ventureResponse === VentureResponse.GREEN && <Response positive={true} loading={false} />}
            {ventureResponse === VentureResponse.NOT_GREEN && <Response positive={false} loading={false} />}
          </div>

          <div className='flex flex-col items-center px-6 justify-center max-h-[220px] justify-evenly'>
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
            <button className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[200px] min-w-[100px]" type="button"
                    onClick={() => setVentureDescription(random_example())}
            >
              Random
            </button>
          </div>
        </div>
          </>)

}