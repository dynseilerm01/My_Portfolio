import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen 
    flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-ex1 mb-3 font-Inter'>
            Hi! I am Dyn-Seiler Moutsiesse <Image src={assets.hand_icon} alt='' 
            className='rounded-full w-6'/> </h3>
            

    <h1 className='text-3x1 sm:text-6x1 lg:text-[66px] mb-3 font-Inter'>
        Computer student with AI Specialisation based in Warsaw </h1>
            <p className='max-w-2x1 mx-auto font-Inter'>
                I am a computer science student from Warsaw, Poland 
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href='#contact' className='px-10 py-3 border rounded-full bg-black text-white
                 flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} 
                alt='' className='w-4'/></a>

                <a href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full
                 border-gray-500 flex items-center gap-2'>
                My resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header