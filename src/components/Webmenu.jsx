import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Webmenu = ({links}) => {
  return (
    <nav className='w-full hidden lg:block mt-2'>
        <div className='max-w-6xl w-fit m-auto rounded-full shadow-md border border-zinc-300 '>
            <ul className='flex items-center ml-10 mr-10 lg:text-sm mlg:text-base'>
            {links.map(({text,path},index)=>{
                return(
                    <motion.li whileTap={{scale:0.75}} className='cursor-pointer py-4 px-4 hover:drop-shadow-lg'>
                        <Link 
                            key={index}
                            to={path}
                        >
                            {text}
                        </Link>
                    </motion.li>
                )
            })}
                
            </ul>
        </div>
    </nav>
  )
}

export default Webmenu