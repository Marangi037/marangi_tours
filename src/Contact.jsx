import React from 'react'

export const Contact = () => {
  return (
    <section className='max-w-screen  h-screen flex flex-col bg-[url("/call_bg.jpg")] bg-center bg-no-repeat bg-cover justify-between items-center text-white bg-white' id='contact'>
        <div className='w-full h-full backdrop-blur-[5px] gap-[3rem] flex flex-col'>
            <h1 className='w-full text-center text-2xl lg:text-5xl text-black lg:text-white'>Contact us</h1>
            <div className='h-[90%] flex flex-col lg:flex-row w-[70%] justify-center items-center lg:w-full'>
                <div className=' w-full lg:w-1/2 h-[80%] flex flex-col px-4 lg:px-[12rem] gap-5 pt-[6rem] text-black lg:text-white justify-start items-start'>
                    <div className='w-full h-max flex justify-between items-center gap-4'>
                        <div className='w-1/2 h-max flex flex-col items-start justify-center'>
                            <label className='text-xl lg:text-2xl text-nowrap' htmlFor="input">First name</label>
                            <input className='w-[120px] lg:w-[180px] h-[40px] rounded-md outline-0 bg-gray-200 px-2 text-black' placeholder='first name' type="text" />
                        </div>
                        <div className='w-1/2 h-full flex flex-col items-start justify-center'>
                            <label className='text-xl lg:text-2xl text-nowrap' htmlFor="input">Last name</label>
                            <input className='w-[120px] lg:w-[180px] h-[40px] rounded-md outline-0 bg-gray-200 px-2 text-black' placeholder='last name' type="text" />
                        </div>
                    </div>
                    
                    <div className='w-full h-max flex flex-col items-start justify-center'>
                        <label className='lg:text-2xl text-nowrap text-xl' htmlFor="input">Phone number</label>
                        <input className='w-full h-[40px] px-2 rounded-md outline-0 bg-gray-200 text-black' placeholder='+254712345678' type="tel" />
                    </div>
                    <div className='w-full h-max flex flex-col items-start justify-center'>
                        <label className='text-2xl' htmlFor="textarea">Message</label>
                        <textarea className='w-full lg:h-[150px] h-[100px]  bg-gray-200 px-2 rounded-md  text-black' placeholder='write a message'  name="message" id="message"></textarea>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 h-[80%] flex flex-col px-4 lg:px-[12rem] justify-center items-start gap-5 pb-[8rem] text-white'>
                    <h1 className='text-2xl'>chat with our team on our socials</h1>
                    <div className='flex gap-4'>
                        <img className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover' src="/instagram_bg.png" alt="ig icon" />
                        <img className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover' src="/twitter_bg.png" alt="x icon" />
                        <img className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover' src="/tik-tok_white.png" alt="tiktok icon" />
                        <img className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover' src="/whatsapp_white.png" alt="whatsapp icon" />
                    </div>
                    <div className='flex gap-2 justify-start items-center'>
                        <span><img className='w-[20px] h-[20px] object-cover' src="/call.png" alt="call icon" /></span>
                        <a className='text-2xl' href="#">call us</a>
                    </div>
                    <h1 className='text-xl lg:text-3xl'>or you can visit our various offices across the country</h1>
                    <ul className='grid grid-cols-2 gap-4 text-xl lg:text-2xl'>
                        <a href="#">Nairobi</a>
                        <a href="#">Kisumu</a>
                        <a href="#">Nakuru</a>
                        <a href="#">Mombasa</a>
                    </ul>
                </div>
            </div>

        </div>
        

    </section>
  )
}
