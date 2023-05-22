import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import logo from '../assets/rami-icon.png'
import fotoPerfil from '../assets/cvimg.png'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
   const [text, count] = useTypewriter({
      words: [
         'Hi, My name`s Ramirez Alejandro', 
         'A-guy-who-loves-Cooking', 
         '<ButLovesToCodeMore/>'
      ],
      loop: true,
      delaySpeed: 2000
   })
  return (
    <div className='h-screen flex flex-col pt-40 space-y-2 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='pt-9'>
         <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={fotoPerfil} alt="rami picture" />
      </div>
      <div className='z-20'>
         <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
            Web Developer
         </h2>
         <h1 className='text-2xl lg:text-3xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
         </h1>
         <div className='pt-5'>
            <Link href="#about">
               <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
               <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
               <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
               <button className='heroButton'>Projects</button>
            </Link>
         </div>
      </div>
    </div>
  )
}