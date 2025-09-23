import React from 'react'

export const Footer = () => {
  return (
    <section className='max-w-screen h-screen lg:h-[60vh] p-[3rem]  lg:flex lg:gap-6 gap-9 bg-black text-white grid grid-cols-2 overflow-x-hidden'>
        <div className='flex flex-col w-1/2 lg:w-1/5 lg:gap-8 gap-2 lg:px-2 px-0 justify-start items-start'>
          <h1 className='lg:text-4xl text-[16px]'>we craft bold high-quality and unapologetic self-expression everywhere</h1>
          <div className='flex w-full h-max gap-2'>
            <button className='w-[100px] lg:w-[180px] h-[30px] lg:h-[40px] rounded-md uppercase bg-amber-500 text-white text-[10px] px-2 text-nowrap'>book trip</button>
            <button  className='w-[100px] lg:w-[180px] h-[30px] lg:h-[40px] rounded-md uppercase bg-amber-500 text-white text-nowrap text-[10px] px-2' >book hotel</button>
          </div> 
        </div>
        <div className='w-1/2 lg:w-1/5 flex flex-col gap-4 justify-start items-center'>
          <h1 className='text-xl lg:text-4xl text-nowrap'>our offices</h1>
          <ul className='flex flex-col text-[16px] lg:text-2xl font-medium'>
            <li>nairobi</li>
            <li>Thika</li>
            <li>Nakuru</li>
            <li>Kisumu</li>
            <li>Mombasa</li>
          </ul>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/5 gap-4 justify-start items-center'>
          <h1 className='lg:text-4xl text-xl text-nowrap'>popular</h1>
          <ul className='flex flex-col gap-2 lg:text-2xl text-[16px]'>
            <li>Bali</li>
            <li>Thailand</li>
            <li>Egypt</li>
            <li>Maasai Mara</li>
          </ul>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/5 gap-4 justify-start items-start'>
          <h1 className='lg:text-4xl text-xl text-nowrap'>contact us</h1>
            <ul className='flex flex-col font-medium text-[16px] lg:text-2xl gap-3'>
              <a href="#">+254712345678</a>
              <a href="#">mrgtourssupport@ac.ke</a>
              <div className='w-full h-max flex gap-2'>
                <img className='w-[30px] h-[30px]' src="/tik-tok_white.png" alt="tiktok logo" />
                <img className='w-[30px] h-[30px]' src="/instagram_bg.png" alt="ig logo" />
                <img className='w-[30px] h-[30px]' src="/whatsapp_white.png" alt="whatsapp logo" />
                <img className='w-[30px] h-[30px]' src="/twitter_bg.png" alt="x logo" />

              </div>
            </ul>
        </div>
        <div className='flex flex-col w-[100vw] lg:w-1/5 gap-4 lg:justify-start justify-center items-center px-2'>
          <h1 className='lg:text-2xl text-xl'>subscribe to our newsletter</h1>
          <div className='flex gap-2'>
            <input className='w-[100px] lg:w-[150px] h-[40px] rounded-md outline-0 bg-gray-300 px-2 text-black text-[10px] lg:text-2xl' type="text" placeholder='enter your email'/>
            <button className='w-[100px] lg:w-[150px] h-[40px] rounded-md bg-amber-500'>subscribe</button>
          </div>
        </div>
    </section>
  )
}