import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import {motion} from 'framer-motion'
import {FaSearch,FaShoppingBag,FaFacebookF} from 'react-icons/fa'
import {AiOutlineCloseCircle,AiOutlineTwitter,AiFillLinkedin,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import {ImUsers} from 'react-icons/im'
import {TbWorldWww} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Catalogue from './Catalogue'
import CustomerCare from './CustomerCare'
import Feedback from './Feedback'
import { useState, useEffect} from 'react'
import {CartContainer} from '../components'
import { useLocation,useNavigate } from 'react-router-dom'

const Header = () => {

    const [showCC, setShowCC] = useState(false)
    const [showCatalogue, setShowCatalogue] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const [showIcons,setShowIcons] = useState(true)

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
    <Feedback feedbackState={showFeedback} setShowFeedback={setShowFeedback}/>
    <CustomerCare ccState={showCC} setShowCC={setShowCC} />
    <CartContainer cartState={showCart} setShowCart={setShowCart}/>
    
    {/* Fixed Elements Goes Here */}

        <div className='fixed xs:top-[50%]  md:top-[35%] lg:top-[30%] left-5 z-50 '>
            <div className='flex flex-col space-y-2'>
                <div className='cursor-pointer bg-gray-300 p-3 rounded-lg transition duration-500 ease-in'>
                    {showIcons ? <AiOutlineCloseCircle className='text-2xl text-red-600' onClick={()=>{setShowIcons((prevState)=>!prevState)}}  /> :
                        <TbWorldWww className='text-2xl text-slate-600' onClick={()=>{setShowIcons((prevState)=>!prevState)}}  />
                    }
                        
                </div>

                <div className={`${showIcons?'block':'hidden'} flex flex-col space-y-2`}>

                    <div className='cursor-pointer bg-gray-300 p-3 rounded-lg'>
                        <Link to="https://api.whatsapp.com/send?phone=917017944662">
                            <FaFacebookF  className='text-2xl text-blue-500'  />
                        </Link>
                    </div>

                    <div className='cursor-pointer bg-gray-300 p-3 rounded-lg'>
                        <Link to="https://api.whatsapp.com/send?phone=917017944662">
                            <AiOutlineTwitter className='text-2xl text-blue-600'  />
                        </Link>
                    </div>

                    <div className='cursor-pointer bg-gray-300 p-3 rounded-lg'>
                        <Link to="https://api.whatsapp.com/send?phone=917017944662">
                            <AiFillLinkedin className='text-2xl text-blue-800'  />
                        </Link>
                    </div>

                    <div className='cursor-pointer bg-gray-300 p-3 rounded-lg'>
                        <Link to="https://api.whatsapp.com/send?phone=917017944662">
                            <AiOutlineInstagram className='text-2xl text-red-500'  />
                        </Link>
                    </div>

                    <div className='cursor-pointer bg-gray-300 p-3 rounded-lg'>
                        <Link to="https://api.whatsapp.com/send?phone=917017944662">
                            <AiFillYoutube className='text-2xl text-red-600'  />
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
       
        <div className='fixed hidden md:block top-[30%] right-0 z-50 cursor-pointer'>
            <img src="./feedback.png" alt="Feedback" onClick={()=>{setShowFeedback((prevState)=>!prevState)}} />
        </div>

        <div className='fixed xs:bottom-[15%] md:top-[60%] right-0 z-50 cursor-pointer'>
            <img src='./cC.png' alt="Customer Care"  onClick={()=>{setShowCC((prevState)=>!prevState)}} />
        </div>

        <div className='fixed xs:bottom-4 xs:right-2 md:top-[85%] md:right-14 z-50 cursor-pointer'>
            <Link to="https://api.whatsapp.com/send?phone=917017944662" className='flex'>
                <ImWhatsapp className='xs:text-3xl text-green-400 md:text-5xl' />
            </Link>
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
                    <p onClick={()=>{setShowCart((prevState)=>!prevState)}} className="cursor-pointer">Cart</p>
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