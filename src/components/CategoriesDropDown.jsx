import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const CategoriesDropDown = () => {
  const categories =[
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    },
    {
      'english':'Air Force',
      'hindi':'Vaayu Sena',
      'path':'/airforce'
    }
  ]
  return (
    <>
      <div className='h-[400px] mt-10 mlg:mt-0 mlg:w-[300px] relative overflow-x-hidden'>
        <div className='flex w-full mlg:w-[300px] justify-between bg-gray-400 px-2 text-white text-lg h-10 py-2 sticky top-0 left-0'>
            <div className=''>
                <div className='flex items-center gap-1'>
                  <GiHamburgerMenu className='font-semibold' />
                  <h1 className='font-medium'>Categories</h1>
                </div>
            </div>
            <div className='gap-2 flex'>
                <button className='bg-white px-[8px] py-[0px] text-black text-xs font-medium rounded-md'>English</button>
                <button className='bg-white px-[8px] py-[0px] text-black text-xs font-medium rounded-md'>Hindi</button>
            </div>
        </div>
        <div className='divide-y h-[360px] overflow-y-scroll'>
            {categories.map(({english,hindi,path},index)=>(
              <div key={index} className='w-full px-2 py-[6px] bg-white'>
                <p className='font-extralight'>{english}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default CategoriesDropDown