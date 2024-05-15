"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "./ui/container"
import Link from "next/link"

const Home = () => {
    
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  
  const heroData = [
    {
        id:'hero',
        title: 'Start you online Journey',
        description: `Create the marketplace for your own
        products and start selling in minutes`,
        buttonTitle: 'Get Started',
    },
    {
        id:'hero1',
        title: 'Discover Your Business Power',
        description: `Join our platform and unleash the power
        of e-commerce for your products today`,
        buttonTitle: 'Explore More',
    },
    {
        id:'hero2',
        title: 'Empower Your Sales Journey',
        description: `Transform your passion into profits
        with our easy-to-use online store builder`,
        buttonTitle: 'Launch Today',
    },
    {
        id:'hero3',
        title: 'Monetize Your Creativity',
        description: `Turn your ideas into income streams
        with our customizable e-commerce platform`,
        buttonTitle: 'Begin Here',
    }
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full pt-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex gap-2">
        {heroData.map((heroItem: any) => (
          <CarouselItem key={heroItem.id} className="px-2">
            {/* <div className="">
              <Card className='bg-white mx-2 md:mx-20 mb-10 relative pt-10'>
                <CardContent className="border-none outline-none"> */}
                <div id={heroItem.id} className='bg-white mx-2 md:mx-20 lg:mx-10 mb-10 relative'>
                  <div className='absolute top-20 left-0 md:left-10  flex flex-col items-center sm:items-start justify-center gap-4 md:gap-6 lg:gap-5 px-5 md:py-1'>
                      <p className='px-5 py-2 border-2 border-[#E7DFC6] text-[#131b23] font-semibold rounded-full'>Hey you</p>
                      <h1 className='text-2xl md:text-5xl w-2/3 xl:text-6xl text-[#131b23] text-center md:text-left font-extrabold'>{heroItem.title}</h1>
                      <p className='text-center w-2/3  md:text-left text-slate-50 text-sm sm:text-lg md:text-xl'>{heroItem.description}</p>
                      <Link href='' target="_blank" className='px-5 py-3 bg-[#E7DFC6] text-[#131b23] text-xl font-bold rounded-full'>{heroItem.buttonTitle}</Link>
                  </div>
                </div>
                {/* </CardContent>
              </Card>
            </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}

export default Home