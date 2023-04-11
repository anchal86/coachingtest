import React from 'react'
import Webmenu from './Webmenu'
import MobileMenu from './MobileMenu'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
const Navbar = () => {

    const links=[
        {
            text:"Home",
            path:'/'
        },
        {
            text:"News",
            path:'/news'
        },
        {
            text:"Employment News",
            path:'/employment'
        },
        {
            text:"Forthcoming Exams",
            path:'/forthcoming'
        },
        {
            text:"Ebooks",
            path:'/ebooks'
        },
        {
            text:"Events & Press",
            path:'/events'
        },
        {
            text:"Local Agents/Dealers",
            path:'/local'
        },
        {
            text:"Something",
            path:'/local'
        }
    ]

    const [open,setOpen]= useState(false)

    return (
        <>
            <Webmenu links={links}  />
            <div className='flex z-10 justify-end w-full mt-5 pr-5 lg:hidden'>
                <button className='bg-white shadow-md px-3 py-3 rounded-full text-zinc-500' onClick={()=>{
                        setOpen(true)
                    }}>
                    <GiHamburgerMenu className='text-2xl' />
                </button>
            </div>
            
            {open ? <MobileMenu links={links} close={()=>setOpen(false)} />:<></>}
        </>
    )
}

export default Navbar