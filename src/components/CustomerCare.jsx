import React from 'react'
import {RiCloseCircleFill} from 'react-icons/ri'
const CustomerCare = ({ccState,setShowCC}) => {
  return (
    <div className={`${ccState ? 'flex' :'hidden'} justify-center items-center z-[1111] backdrop-blur-[1px] h-screen w-screen fixed`}>
        
        <div className='p-4 rounded-md border-2 bg-gray-100 md:w-1/2 md:h-1/2 xs:w-[80%] xs:h-[80%] relative'>
        <RiCloseCircleFill className="absolute -top-4 -right-2 z-50] cursor-pointer text-3xl " onClick={()=>{setShowCC(false)}} />    
            <div className='bg-gray-100 p-3 h-[100%] scroll-smooth overflow-y-scroll'>
                <h1 className='text-xl'>Dear Valued Customer</h1>
                <div className='border-gray-400 border-b-2 mb-4'></div>
                <div>
                    <div className='text-sm mb-5'>
                        <p>
                            Your satisfaction is the top-most priority for us. We respect your valuable time spent on our website. 
                        </p>
                        
                        <p>
                            Please visit our FAQs section for general queries. If our FAQs are not able to deliver the best, feel free to drop in your query below. You can also write to us at care@upkar.in or call us at +91.562.2531101 .
                        </p>
                        <p>
                            Each query is a special case to us. We assure a satisfactory response within 3 working days* 
                        </p>
                        <p>Sincerely yours, </p>
                        <p className=''>Customer Care Cell</p>
                    </div>

                    <form>
                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>Type</label>
                            </div>
                            <div className='w-[65%]'>
                                <select className='w-[100%] rounded-md bg-white px-3 py-1'>
                                    <option>Enquiry</option>
                                    <option>Enquiry</option>
                                    <option>Enquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>Related To</label>
                            </div>
                            <div className='w-[65%]'>
                                <select className='w-[100%] rounded-md bg-white px-3 py-1'>
                                    <option>--Select--</option>
                                    <option>Enquiry</option>
                                    <option>Enquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>For</label>
                            </div>
                            <div className='w-[65%]'>
                                <select className='w-[100%] rounded-md bg-white px-3 py-1'>
                                    <option>--Select--</option>
                                    <option>Enquiry</option>
                                    <option>Enquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>Name</label>
                            </div>
                            <div className='w-[65%]'>
                                <input type="text" className='w-[100%] rounded-md bg-white px-3 py-1' />
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>Email</label>
                            </div>
                            <div className='w-[65%]'>
                                <input type="text" className='w-[100%] rounded-md bg-white px-3 py-1' />
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>Mobile</label>
                            </div>
                            <div className='w-[65%]'>
                                <input type="text" className='w-[100%] rounded-md bg-white px-3 py-1' />
                            </div>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-[20%]'>
                                <label className='font-semibold'>Message</label>
                            </div>
                            <div className='w-[65%]'>
                                <textarea className='w-[100%] rounded-md bg-white px-3 py-1'>
                                    </textarea>
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <button className='bg-orange-400 rounded-md px-3 py-1 space-x-4'>Cancel</button>
                            <button className='bg-orange-400 rounded-md px-3 py-1 space-x-4'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerCare