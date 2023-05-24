import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import {motion} from 'framer-motion'
import {FaSearch,FaShoppingBag} from 'react-icons/fa'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import {ImUsers} from 'react-icons/im'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Catalogue from './Catalogue'
import CustomerCare from './CustomerCare'
import { useState, useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const Header = () => {

    const [showCC, setShowCC] = useState(false)
    const [showCatalogue, setShowCatalogue] = useState(false)

    const auth = getAuth()  
  const location = useLocation()
  const navigate = useNavigate()

  const [title,setTitle]=useState('Sign In')

  useEffect(()=>{
    
        onAuthStateChanged(auth,(user)=>{
            if(user){
            setTitle('Profile')
            }else{
            setTitle('Sign In')
            }
        })
    },[auth])

  return (
    <>
    <Catalogue catalogueState={showCatalogue} setShowCatalogue={setShowCatalogue}/>
    <CustomerCare ccState={showCC} setShowCC={setShowCC} />
    {/* Fixed Elements Goes Here */}
        <div className='fixed xs:bottom-[5%] md:top-1/3 left-0 z-50 cursor-pointer'>
            <img src="./dc.png" alt="Download Catalogue" onClick={()=>{setShowCatalogue((prevState)=>!prevState)}} />
        </div>

        <div className='fixed hidden md:block top-[30%] right-0 z-50 cursor-pointer'>
            <img src="./feedback.png" alt="Feedback" />
        </div>

        <div className='fixed xs:bottom-[10%] md:top-[60%] right-0 z-50 cursor-pointer'>
            <img src='./cC.png' alt="Customer Care"  onClick={()=>{setShowCC((prevState)=>!prevState)}} />
        </div>
    {/* Fixed Elements Ends Here */}


    {/* Header Top Section Starts Here */}
        <div className='w-full flex justify-center md:justify-end bg-slate-700 h-10 py-2'>
            <ul className='flex text-white gap-4 md:mr-40'>
                <motion.li
                    className=' cursor-pointer'
                    whileTap={{scale:0.75}}
                >
                    <Link to="/profile">
                        My Account
                    </Link>
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
                    <Link to="https://api.whatsapp.com/send?phone=917017944662" className='flex'>
                        Contact Us
                        <ImWhatsapp className='ml-3 h-5 w-5' />
                    </Link>
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
                            <Link to="/profile">{title}</Link>
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