import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 px-6 absolute bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold text-white'>{title}</h1>
        <p className='hidden md:inline-block py-6 w-1/4 text-lg text-white'>{overview}</p>
        <div className='my-2 md:py-0'>
            <button className='bg-white text-black md:py-3 py-1 px-3 md:px-10 text-lg  rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-10 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-90'>More Info</button>
        </div>
      
    </div> 
  )
}

export default VideoTitle
