import React from 'react'
import {MainSlider,CategoriesDropDown,SliderContainer,CartContainer} from '../components'



const Home = () => {
  return (
    <>
      <div className='flex w-full mlg:max-w-6xl flex-col mlg:flex-row py-9 px-4 justify-between mlg:m-auto '>
        <MainSlider />
        <CategoriesDropDown />
      </div>

      <section className='w-full my-6'>
        <div className=''>
          <SliderContainer title="New Arrivals" />
        </div>
      </section>

      <section className='w-full my-6'>
        <div className=''>
          <SliderContainer title="Best Sellers" />
        </div>
      </section>

      <section>
        <div  className="bg-[#e63946] my-6 p-5 flex items-center justify-center">
          <hr className="w-[20%]"></hr>
          <h1 className="text-center text-white font-mono text-3xl">PROMOTION & OFFER </h1>
          <hr className="w-[20%]"></hr>
        </div>
        
        <div className="w-[80%] m-auto flex space-x-3 mb-[100px] ">
          <img src="patwar.jpg" alt="" className="h-[500px] w-[300px]" />
          <img src="currentaffairs.jpg" alt="" className="h-[500px] w-[300px]" />
          <div className="space-y-2">
            <div className="flex space-x-3 ">
              <div className="space-y-3">
                <img src="delivery.jpg" alt="" className="h-[250px] w-[300px]" />
                <img src="dlivery-b.jpg" alt="" className="h-[100px] w-[300px]" />
              </div>
              <img src="police.jpg" alt="" className="w-[300px] h-[365px]" />
            </div>
            <img src="statebank.jpg" alt="" className="h-[125px] w-[600px]" />
          </div>
        </div>
      </section>


      <CartContainer display={false} />
    </>
  )
}

export default Home
