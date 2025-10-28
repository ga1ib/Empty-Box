import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div>
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className='text-4xl sn:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR build tools
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> for developers</span>
        </h1>
        <p className='mt-10 text-center text-neutral-500 max-w-4xl'>
            Build, test, and deploy your VR applications with ease using our comprehensive suite of developer tools. Whether you're a seasoned developer or just starting out, our tools are designed to help you create immersive and interactive experiences that captivate your audience.
        </p>
        <div className="flex justify-cebte4r my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                Start for free
                </a>
                <a href="#" className='px-4 py-3 mx-3 rounded-md border'>Documention</a>
                
        </div>
        <div className='flex mt-10 justify-center'>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
          <source src={video1} type ="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
          <source src={video2} type ="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
    </div>
    </div>
  );
};

export default HeroSection
