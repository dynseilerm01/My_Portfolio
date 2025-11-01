import { assets } from '@/assets/assets'
import Image from "next/image";

import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10'>
    <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
        justify-between z-50'>
            <a href="#top">
                <Image src={assets.logo} alt ='logo of my website' className='w-28 
                cursor pointer mr-14'/>
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 
            rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50' >
                <li><a className='font-Inter' href="top">Home</a></li>
                <li><a className='font-Inter'href="#about">About</a></li>
                <li><a className='font-Inter'href="#service">Services</a></li>
                <li><a className='font-Inter'href="#work">My work</a></li>
                <li><a className='font-Inter' href="#contact">Contact me</a></li>
            </ul>

            <div>
                <a href="contact" className='hidden lg:flex items-center
                gap-3 px-10 py-2.5 border border-black-500 rounded-full ml-4 font-Inter'>
                    contact <Image src={assets.arrow_icon} alt ='' className='w-3'/> 
                </a>

            </div>
        </nav>
    </>
  )
}

export default Navbar