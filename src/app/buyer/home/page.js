import Header from '@/components/buyer/home/buyer/home/Header'
import MyBasket from '@/components/buyer/home/buyer/home/MyBasket'
import React from 'react'

const page = () => {
  return (
    <div className='container-fluid flex flex-col justify-center items-center  w-[100%] min-h-[100vh] gap-[5vh]'>
    <Header/>
    <MyBasket/>
    </div>
  )
}

export default page