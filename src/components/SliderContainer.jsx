import React from 'react'
import {motion} from 'framer-motion'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Slider from './Slider'
import { useEffect,useState } from 'react'

const SliderContainer = ({title}) => {

    const data=[
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
        {
            'src':"cone.png",
            'title':'Chocolate Vanilla',
            'company':'Amul',
            'price':'25.75'
        },
    ]

    const [scrollValue, setScrollValue] = useState(0)
    useEffect(()=>{},[scrollValue])

  return (
    <>
        <div className='w-full flex items-center justify-between px-10'>
            <p className='text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-600 transition-all ease-in-out duration-200'>
                {title}
            </p>
            <div className='hidden md:flex gap-3 items-center'>
                <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
                    <MdChevronLeft className='text-lg text-white' onClick={()=>setScrollValue(-200)} />
                </motion.div>
                <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
                    <MdChevronRight className='text-lg text-white' onClick={()=>setScrollValue(200)} />
                </motion.div>
            </div>
        </div>
        <div className='w-full bg-orange-100'>
            <Slider flag={true} data={data} scrollValue={scrollValue} />
        </div>
        
    </>
  )
}

export default SliderContainer