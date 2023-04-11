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

      <CartContainer display={false} />
    </>
  )
}

export default Home
