import React from 'react'
import {RiCloseCircleFill} from 'react-icons/ri'
const Catalogue = ({catalogueState,setShowCatalogue}) => {
  return (
    <div className={`${catalogueState ? 'flex' :'hidden'} justify-center items-center z-[1111] backdrop-blur-[1px] h-screen w-screen fixed`}>
        
        <div className='p-4 rounded-md border-2 bg-white w-1/2 h-1/2 relative'>
        <RiCloseCircleFill className="absolute -top-4 -right-2 z-50] cursor-pointer text-3xl " onClick={()=>{setShowCatalogue(false)}} />    
            <div className='bg-gray-100 p-3 h-[100%]'>
                <h1 className='font-bold text-lg mb-2'>Download Catalogue</h1>
                <p className='text-slate-700 mb-3'>Category</p>
                <select className='w-[100%] px-3 py-2 bg-white mb-5'>
                    <option>--Select--</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                </select>
                <div className='flex justify-center items-center mb-3'>
                    <button className='bg-amber-400 px-4 py-2 rounded-md text-sm'>DOWNLOAD SELECTED CATALOGUE</button>
                </div>
                <div className='border border-black mb-3'></div>
                <div className='flex justify-center items-center mb-3'>
                    <button className='bg-amber-400 px-4 py-2 rounded-md text-sm'>DOWNLOAD COMPLETE PDF CATALOGUE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catalogue