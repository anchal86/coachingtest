import React from 'react'
import { useState, useEffect } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const MainSlider = ({autoSlide=false,autoSlideInterval=3000}) => {

    const slides=[
        {
            url:'https://images.unsplash.com/photo-1438751700213-f676a2fd516c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1679063329944-7a0db4a253eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1679662826484-6d3e3a97890a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1679159748666-77baea25e928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1679770884293-a4f41b5f05cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        }
    ]

    const [curr,setCurr] = useState(0)

    const prev =()=>setCurr((curr)=>(curr===0 ? slides.length-1 : curr-1))
    const next =()=>setCurr((curr)=>(curr===slides.length-1 ? 0 : curr+1))

    const goToSlide=(slideIndex)=>{
        setCurr(slideIndex)
    }
    useEffect(()=>{
        if (!autoSlide) return

        const slideInterval =setInterval(next,autoSlideInterval)
        return ()=>clearInterval(slideInterval)
    },[])

    return (
        <div className='mlg:max-w-3xl h-[400px] w-full m-auto relative group'>
            <div style={{backgroundImage:`url(${slides[curr].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>

            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prev} size={30}/>
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30} onClick={next} />
            </div>

            {/* Dots Representing Images */}

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide,slideIndex)=>(
                    <div
                        key={slideIndex}
                        onClick={()=>goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        {curr===slideIndex?<RxDotFilled className='border-2 text-red-500 border-red-600 rounded-full' />:<RxDotFilled />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainSlider