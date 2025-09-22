import React from 'react'

export const Footer = () => {
  return (
    <section className='max-w-screen h-screen lg:h-[60vh] p-[3rem]  lg:flex gap-6 bg-black text-white grid grid-cols-2'>
        <div className='flex flex-col w-1/2 lg:w-1/5 lg:gap-8 gap-2 lg:px-2 px-0'>
          <h1 className='lg:text-4xl text-2xl'>we craft bold high-quality and unapologetic self-expression everywhere</h1>
          <div className='flex w-full h-max justify-between'>
            <button className=' min-w-[80px] lg:min-w-[120px] h-[40px] rounded-md uppercase bg-amber-500 text-white text-[12px]'>book trip</button>
            <button  className='min-w-[100px] lg:min-w-[120px] h-[40px] rounded-md uppercase bg-amber-500 text-white text-nowrap text-[12px]' >book hotel</button>
          </div> 
        </div>
        <div className='w-1/2 lg:w-1/5 flex flex-col gap-4 justify-start items-center'>
          <h1 className='text-4xl'>our offices</h1>
          <ul className='flex flex-col text-2xl font-medium'>
            <li>nairobi</li>
            <li>Thika</li>
            <li>Nakuru</li>
            <li>Kisumu</li>
            <li>Mombasa</li>
          </ul>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/5 gap-4 justify-start items-center'>
          <h1 className='lg:text-4xl text-2xl'>popular destinations</h1>
          <ul className='flex flex-col gap-2 text-2xl'>
            <li>Bali</li>
            <li>Thailand</li>
            <li>Egypt</li>
            <li>Maasai Mara</li>
          </ul>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/5 gap-4 justify-start items-center'>
          <h1 className='lg:text-4xl text-2xl '>contact us</h1>
            <ul className='flex flex-col font-medium text-[16px] gap-2'>
              <a href="#">+254712345678</a>
              <a href="#">mrgtourssupport@ac.ke</a>
              <a className='flex gap-4' href="#">
                <img className='w-[30px] h-[30px]' src="/tik-tok_white.png" alt="tiktok logo" />
                <h1>tiktok</h1>
              </a>
              <a className='flex gap-4' href="#">
                <img className='w-[30px] h-[30px]' src="/instagram_bg.png" alt="ig logo" />
                <h1>instagram</h1>
              </a>
              <a className='flex gap-4' href="#">
                <img className='w-[30px] h-[30px]' src="/whatsapp_white.png" alt="whatsapp logo" />
                <h1>whatsapp</h1>
              </a>
              <a className='flex gap-4' href="#">
                <img className='w-[30px] h-[30px]' src="/twitter_bg.png" alt="x logo" />
                <h1>x</h1>
              </a>
            </ul>
        </div>
        <div className='flex flex-col w-[100vw] lg:w-1/5 gap-4 lg:justify-start justify-center items-center'>
          <h1 className='text-2xl'>subscribe to our newsletter</h1>
          <div className='flex'>
            <input className='w-[150px] h-[40px] rounded-md outline-0 bg-gray-300 px-2 text-black' type="text" placeholder='enter your email'/>
            <button className='w-[150px] h-[40px] rounded-[40px] bg-amber-500'>subscribe</button>
          </div>
        </div>
    </section>
  )
}