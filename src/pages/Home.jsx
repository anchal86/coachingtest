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
          <hr className="xs:w-[7%] md:w-[20%]"></hr>
          <h1 className="text-center text-white font-mono xs:text-lg md:text-3xl">PROMOTION & OFFER </h1>
          <hr className="xs:w-[7%] md:w-[20%]"></hr>
        </div>
        
        <div className="w-[80%] m-auto md:flex space-x-3 mb-[100px] ">
          <img src="patwar.jpg" alt="" className="xs:w-[100%] xs:mt-3 md:m-auto md:h-[500px] md:w-[300px]" />
          <img src="currentaffairs.jpg" alt="" className="xs:w-[100%] xs:mt-3 md:m-auto  md:h-[500px] md:w-[300px]" />
          <div className="space-y-2">
            <div className="md:flex space-x-3 ">
              <div className="space-y-3">
                <img src="delivery.jpg" alt="" className="xs:w-[100%] xs:mt-3 md:m-auto md:h-[250px] md:w-[300px]" />
                <img src="dlivery-b.jpg" alt="" className="xs:w-[100%] xs:mt-3 md:m-auto md:h-[100px] md:w-[300px]" />
              </div>
              <img src="police.jpg" alt="" className="xs:w-[100%] xs:mt-3 md:m-auto md:w-[300px] md:h-[365px]" />
            </div>
            <img src="statebank.jpg" alt="" className="xs:w-[100%] xs:mt-3 md:m-auto md:h-[125px] md:w-[600px]" />
          </div>
        </div>
      </section>


      <CartContainer display={false} />
    </>
  )
}

export default Home
