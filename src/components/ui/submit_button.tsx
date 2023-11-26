import React from 'react'
import { VentureResponse } from './description'

type SubmitButtonProps = {
  content?: string,
  setVentureResponse: React.Dispatch<React.SetStateAction<VentureResponse>>,
  ventureResponse: VentureResponse
}

export const SubmitButton = ({ content, setVentureResponse, ventureResponse }: SubmitButtonProps) => {
  const handleClick = async () => {
    try {
      setVentureResponse(VentureResponse.LOADING)
      const response = await fetch('http://localhost:5010/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: content }),
      })

      if (response.ok) {
        const json = await response.json()
        console.log(json)
        if (json.is_green) {
          setVentureResponse(VentureResponse.GREEN)
        } else {
          setVentureResponse(VentureResponse.NOT_GREEN)
        }
      } else {
        setVentureResponse(VentureResponse.ERROR)
      }
    } catch (error) {
      setVentureResponse(VentureResponse.ERROR)
    }
  }

  return (
    <button
      className='mt-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded max-w-[200px]'
      onClick={handleClick}
      disabled={ventureResponse === VentureResponse.LOADING || content === undefined}
    >
      Send Description
    </button>
  )
}
