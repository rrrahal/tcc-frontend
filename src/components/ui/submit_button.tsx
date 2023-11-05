import React from 'react'

type SubmitButtonProps = {
  content?: string
}

export const SubmitButton = ({ content }: SubmitButtonProps) => {
  const handleClick = async () => {
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      })

      if (response.ok) {
        // Handle a successful response here.
      } else {
        // Handle errors here.
      }
    } catch (error) {
      // Handle any network or request errors here.
    }
  }

  return (
    <button
      className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[200px]'
      onClick={handleClick}
    >
      Send Description
    </button>
  )
}
