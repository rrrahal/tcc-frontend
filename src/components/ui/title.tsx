import React from 'react'

export const TitleComponent = ({
  title = 'Find out if your venture is truly green',
  isH1 = true,
}) => {
  const headingClass = isH1
    ? 'text-3xl font-bold mb-6 ml-2'
    : 'text-2xl font-semibold mb-6 ml-2'

  return (
    <div className='text-left my-2'>
      {isH1 ? (
        <h1 className={headingClass}>{title}</h1>
      ) : (
        <h2 className={headingClass}>{title}</h2>
      )}
    </div>
  )
}
