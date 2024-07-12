import React from 'react'

const Error = ({message}) => {
  return (
    <>
    <div className='flex justify-center'>
        <div className=' dark:text-white dark:bg-cards-blue relative p-4 w-1/2 rounded-lg mb-8 shadow-lg'>
          <div className='flex justify-center'>
            <h2>ERROR ENCOUNTERED : {message} </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error