import React from 'react';
import vlog from '../assets/landing.gif';

const LandingPage = () => {
  return (
    <div className='h-[100vh] overflow-hidden content-center mx-auto'>
        <img src={vlog.src} className='imagine-landing bg-cover object-cover h-[100vh] w-full absolute top-0 left-0 -z-10 blur-md shadow-lg '/> 
       <div className='text-center xs:w-[80%] w-[50%]  text-white mx-auto gap-8 flex flex-col items-center justify-center'>
       <h2 className=' text-4xl font-semibold ' >Agenția de TikTok Marketing cu cele mai multe vizualizări din România</h2> 
        <p>Brandstage este o agenție de marketing specializată pe platforma TikTok.Noi iți putem oferi toate soluțiile necesare pentru ca brandul tău sa devină viral</p>
        <button className='duration-500 hover:bg-white hover:text-yellow-600 hover:duration-500 bg-yellow-600 w-60 h-12 rounded-3xl block mx-auto'>Contacteaza-ne</button>
       </div>
    
    </div>
  )
}

export default LandingPage
