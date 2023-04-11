import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'

const Slider = ({flag,data,scrollValue}) => {
    console.log(scrollValue)
    const rowContainer = useRef()
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue  
    },[scrollValue])
  return (
    <div 
        ref={rowContainer}
        className={`w-full flex items-center gap-3 my-12 ${flag?'overflow-x-scroll scroll-smooth scrollbar-none':'overflow-x-hidden flex-wrap'}`}>

        {data && data.map((item)=>(
            <div className='w-300 h-[225px] md:w-340 min-w-[300px] md:min-w-[340px] bg-gray-100 rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between'>
                <div className='w-full flex items-center justify-between'>
                    <motion.img
                        whileHover={{scale:1.2}} 
                        className='w-40 -mt-8 drop-shadow-2xl'
                        src={item.src}
                    />
                    <motion.div
                        whileTap={{scale:0.75}}
                        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
                    >
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>

                <div className='w-full flex flex-col items-end justify-end'>
                    <p className='text-slate-500 font-semibold text-base md:text-lg'>
                        {item.title}
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>{item.company}</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg font-semibold'>
                            <span className='text-sm text-red-500'>$</span>{item.price}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Slider