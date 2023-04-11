import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MobileMenu = ({links,close}) => {
  return (
    <div>
        <div className='fixed inset-0 z-[110] top-0 l-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60 lg:hidden'></div>
        
        <div className='fixed inset-0 z-[300] top-0 l-0 p-5 lg:hidden'>
            <div className='w-full bg-white rounded-xl p-5'>
                <div className='flex items-center justify-between'>
                    <h1>Navigation</h1>
                    <AiOutlineCloseCircle onClick={close} />
                </div>

                <div className='mt-5 divide-y'>
                    {links.map(({text,path},index)=>{
                        return (
                            <Link
                                key={index}
                                to={path}
                                className='block py-2 text-zinc-500'
                            >
                                {text}
                            </Link>
                        )
                    })}
                </div>
            </div> 
        </div>
    </div>    
  )
}

export default MobileMenu