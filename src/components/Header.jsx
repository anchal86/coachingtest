import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import {motion} from 'framer-motion'
import {FaSearch,FaShoppingBag} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    {/* Header Top Section Starts Here */}
        <div className='w-full flex justify-center md:justify-end bg-slate-700 h-10 py-2'>
            <ul className='flex text-white gap-4 md:mr-40'>
                <motion.li
                    className=' cursor-pointer'
                    whileTap={{scale:0.75}}
                >
                    My Account
                </motion.li>
                
                <li className='w-[2px] h-6 bg-white'></li>
                
                <motion.li
                    className=' cursor-pointer'
                    whileTap={{scale:0.75}}
                >
                    FAQs
                </motion.li>
                
                <li className='w-[2px] h-6 bg-white'></li>
                
                <motion.li 
                    className='flex cursor-pointer'
                    whileTap={{scale:0.75}}
                >
                    Contact Us
                    <ImWhatsapp className='ml-3 h-5 w-5' />
                </motion.li>

            </ul>
        </div>
    {/* Header Top Section Ends Here */}

    {/* Header Middle Section Starts Here */}

        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-white shadow-md px-10 py-1 flex-wrap sticky top-0 z-[100]'>

            <div className='flex justify-center items-center mt-2 md:mt-0'>
                <img src="./logo.png" className='w-auto md:min-w-[100px] md:max-w-[150px] lg:w-auto' alt="Logo" />
            </div>

            <div className='flex justify-center items-center mt-2 md:mt-0'>
                <div className='max-w-fit xs:text-xs sm:text-sm md:text-base  lg:text-lg  justify-center items-center border-red-500 border-4 rounded-md py-1 px-3 flex'>
                    <div className='flex border-[1px] rounded-md border-red-600'>
                        <input type='text' className='rounded-sm px-4 py-1 outline-none' placeholder='Enter Keyword' />
                        <select className='border-[1px] hidden sm:block border-red-600'>
                            <option>All Categories</option>
                            <option>All Categories Alert</option>
                        </select>
                        <div className='flex items-center justify-center px-3 bg-orange-600'>
                            <FaSearch className='text-white text-lg'  />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-4 mt-2 md:mt-0'>
                <div className='flex justify-center items-center text-lg md:text-base  lg:text-lg gap-2'>
                    <ImUsers/>
                    <ul className='flex gap-2 items-center'>
                        <motion.li className=' cursor-pointer'
                            whileTap={{scale:0.75}}>
                            <Link to="/sign-in">Login</Link>
                        </motion.li>
                        <li className='w-[2px] h-5 bg-black'></li>
                        <motion.li className=' cursor-pointer'
                            whileTap={{scale:0.75}}>
                            <Link to="sign-up">Register</Link>
                        </motion.li>
                    </ul>
                </div>

                <div className='flex justify-center items-center text-lg md:text-base lg:text-lg gap-2'>
                    <FaShoppingBag/>
                    <p>Cart</p>
                </div>
            </div>

        </div>

    {/* Header Top Section Ends Here */}

    {/* Header Menu Section Starts Here */}

        <Navbar />

    {/* Header Menu Section Ends Here */}
    </>
  )
}

export default Header