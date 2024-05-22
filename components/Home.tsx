"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, CreditCard, Dot, Expand, ShieldCheck, ShoppingCartIcon, Star, Truck } from "lucide-react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
import { Product } from "@/types"
import IconButton from "./ui/icon-button"
import Router from "next/router"

interface ProductCard {
  data: Product
}


const Home:React.FC<ProductCard> = ({data}) => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const handleClick = () => {
    return Router.push(`/product/${data.id}`)
  }

  const previewModal = usePreviewModal()
  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation()

      previewModal.onOpen(data)
  }

  const cart = useCart()
  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation()

      cart.addItem(data)
  }
  
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


  const cardData = [
    {
      title: 'Up to 50% off on all stylish winter jackets.',
      image: '/jacket.jpg',
    },
    {
      title: 'Discover the Perfect Fit: New Shirt Collection',
      image: '/shirt.webp',
    },
    {
      title: 'Get Your Denim Fix: Shop the Latest Jeans',
      image: '/jean.jpg',
    },
  ]

  const denimProducts = [
    {
        id: 1,
        title: 'Classic Jacket',
        image: 'denim-jacket.jpg',
        price: 59.99,
        category: 'jackets',
        description: 'Timeless design, durable fabric.'
    },
    {
        id: 2,
        title: 'Slim Fit Jeans',
        image: 'jeans.jpg',
        price: 49.99,
        category: 'jeans',
        description: 'Comfortable fit, trendy style.'
    },
    {
        id: 3,
        title: 'Shorts',
        image: 'shorts.jpg',
        price: 29.99,
        category: 'shorts',
        description: 'Casual look, summer essential.'
    },
    {
        id: 4,
        title: 'Long Coat',
        image: 'coat.jpg',
        price: 79.99,
        category: 'coats',
        description: 'Elegant cut, warm material.'
    }
];

  const categoriesData = [
    {
      image: `/cshorts.jpg`,
      title: 'Shorts'
    },
    {
      image: `/cjeans.jpg`,
      title: 'Jeans'
    },
    {
      image: `/cs.jpg`,
      title: 'Shirts'
    },
    {
      image: `/cj.jpg`,
      title: 'Jackets'
    },
    {
      image: `/ccoats.jpg`,
      title: 'Coats'
    },
  ]

  
  return (
    // {Hero Section}
    <div className="space-y-20">
      <Carousel
        plugins={[plugin.current]}
        className="w-full pt-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex gap-2">
          {heroData.map((heroItem: any) => (
            <CarouselItem key={heroItem.id}>
                  <div id={heroItem.id} className='bg-white relative'>
                    <div className='absolute top-20 left-10 flex flex-col items-center sm:items-start justify-center gap-4 md:gap-6 lg:gap-5 px-5 md:py-1'>
                        <p className='px-5 py-2 border-2 border-[#E7DFC6] text-white md:text-[#131b23] font-semibold rounded-full'>Hey you</p>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl sm:w-2/3 xl:text-6xl text-[#131b23] text-center sm:text-left font-extrabold'>{heroItem.title}</h1>
                        <p className='text-center sm:w-2/3  sm:text-left text-slate-50 text-sm sm:text-lg md:text-xl'>{heroItem.description}</p>
                        <Link href='' target="_blank" className='px-5 py-3 bg-[#E7DFC6] text-[#131b23] text-sm sm:text-xl font-bold rounded-full'>{heroItem.buttonTitle}</Link>
                    </div>
                  </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>     
      {/* Post Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-5" >
        {
          cardData.map(card => {
            return (
              <Card key={card.title} className="flex flex-row justify-between items-center xs:items-start bg-gray-100 shadow-lg md:h-fit">
                <CardHeader className="grid gap-2 md:gap-4">
                  <h3 className="text-sm xs:text-base font-medium">{card.title}</h3>
                  <button className="flex md:gap-2 text-sm text-left items-center font-bold transition-colors hover:text-slate-500">Shop Now <ArrowRightIcon size={20}/></button>
                </CardHeader>
                <CardContent className="aspect-square">
                    <Image 
                      src={`${card.image}`} 
                      width={200} 
                      height={200} 
                      alt="card image" 
                      className="rounded-xl aspect-square bg-white md:p-2 justify-center object-cover object-top mt-4"
                    />    
                </CardContent>
              </Card>
            )
          })
        }
      </div>     
      {/* {Best seller section} */}
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold ">Bestsellers</h2>
            <p className=" text-sm sm:text-base font-medium">Browse the best of our<br className="md:hidden block" /> favorite sale styles and brands</p>
          </div>    
          <Link href='/store' className="flex gap-2 items-center font-bold transition-colors hover:text-slate-500">Browse All Products <ArrowRightIcon size={20}/></Link>
        </div>

        <div className="grid xs:grid-cols-2 lg:grid-cols-4 justify-center gap-x-8 gap-y-8 px-4 sm:px-6 mx-0 mt-5">
          {
            denimProducts.map(product => {
              return (
                <Card key={product.id} className="max-w-80 md:h-fit shadow-2xl relative -p-4 -space-y-2 flex flex-col items-start bg-[#E9F1F7]">
                  <CardHeader>
                    <div className='aspect-square relative bg-gray-100 rounded-xl'>
                      <Image 
                        src={`/${product.image}`} 
                        alt='productimage'
                        width={400} 
                        height={400}
                        className="object-contain relative aspect-square bg-white p-2 rounded-xl"
                      />
                      <div className='absolute z-20 opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5'>
                        <div className='flex gap-x-6 justify-center'>
                          <IconButton 
                            icon={<Expand size={20}  className='text-gray-600 bg-black'/>}    
                            onClick={onPreview}
                          />
                          <IconButton 
                            icon={<ShoppingCartIcon size={20}  className='text-gray-600'/>}    
                            onClick={onAddToCart}
                          />
                        </div>                 
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg tracking-normal">{product.title}</CardTitle>
                    <CardDescription className="capitalize text-base tracking-wide">
                      <span className="absolute top-12 inline-flex items-center font-semibold rounded-tl-none rounded-bl-none rounded-md bg-gray-200 px-2 py-1 text-sm text-slate-500 ring-1 ring-inset ring-gray-600/10">
                        {product.category}
                      </span>
                      <p>{product.description}</p>
                      </CardDescription>
                  </CardContent>
                  <CardFooter className="text-lg font-semibold text-slate-500">$ {product.price}</CardFooter>
                </Card>
              )
            })
          }
        </div> 
      </div>
      {/* {Lifestyle} */}
      <div className="space-y-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-4xl md:text-6xl text-center font-bold">Denimize Your Lifestyle</h3>
          <p className=" w-full sm:w-1/2 text-sm  sm:text-base md:text-lg text-center tracking-wide">
            Embark on a journey of effortless style and enhanced functionality with our 
            denim-centric solutions, meticulously crafted to elevate your daily 
            attire and experiences.
          </p>
        </div>
        

        <div className="flex flex-col sm:flex-row gap-x-5 gap-y-8 w-full">
          <div className="flex flex-col items-center space-y-3  bg-[#E9F1F7] p-6 rounded-3xl sm:w-1/2 md:w-1/3 h-fit">
            <h3 className=" text-3xl md:text-5xl text-center font-bold">
              Denim Time
            </h3>
            <p className="text-center text-sm md:text-base font-medium text-[#131B23]">
              Smart denim blends fashion with function, offering unparalleled style and versatility, from 
              fabrics to tailored designs that seamlessly integrate with your modern lifestyle.
            </p>
            <Image src='/denim.png' alt="" id="collection" className="grayscale md:h-fit" width={232} height={200} />
          </div>
          <div className="sm:w-1/2 md:w-2/3 md:h-80">
            <div className="bg-[#E7DFC6] p-4 rounded-3xl flex flex-col items-center gap-2 h-fit">
                <h3 className="text-xl md:text-3xl font-bold text-slate-400">Elegance, Redefined</h3>
                <Image className="" src='/access.png' alt="" width={180} height={170}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4 text-white w-full">
              <div className="flex flex-col items-center gap-2 bg-[#131B23] p-4 rounded-3xl">
                <h3 className="text-xl md:text-3xl font-bold text-center"><span className="text-[#E7DFC6] text-4xl">30 Hours</span> left to get Your Denim Bliss</h3>
                <p className="text-center">Last Chance: 30 Hours Left to Embrace Your Denim Delight! Act Now Before It&apos;s Gone!</p>
                <Image src='/collection.jpg' id="hours" className="grayscale" alt="" width={200} height={100}/>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center gap-4 bg-[#2274A5] p-4 rounded-3xl">
                <p className="text-center text-xl md:text-3xl">Checkout our store for the most exclusive new collection</p>
                <Link href='/store' className="flex gap-2 items-center font-bold rounded-xl  transition-colors text-black p-2 bg-[#E9F1F7] hover:text-slate-500">
                  Browse All Products 
                  <ArrowRightIcon size={20}/>
                </Link>
              </div>
            </div>
          </div>          
        </div>
      </div>
      {/* {Infinite Scroll Animation} */}
      <div className="scroller bg-gray-100">
        <div className="flex w-max justify-center">
          <ul className="flex py-5 md:py-10 justify-between animate-loop-scroll">
            <li className="flex items-center gap-8 text-gray-500 font-extrabold text-3xl sm:text-5xl md:text-7xl"><Dot size={60} /> <ShieldCheck size={60} strokeWidth={2}/> 30 day guarantee <Dot size={70} /></li>
            <li className="flex items-center gap-8 text-gray-500 font-extrabold text-3xl sm:text-5xl md:text-7xl"><CreditCard size={60} strokeWidth={2}/> Secure payments </li>
            <li className="flex items-center gap-8 text-gray-500 font-extrabold text-3xl sm:text-5xl md:text-7xl"><Dot size={60} /> <Truck size={60} strokeWidth={2}/> Free delivery</li>  
          </ul>
          <ul className="flex py-5 md:py-10 justify-between animate-loop-scroll">
            <li className="flex items-center gap-8 text-gray-500 font-extrabold text-3xl sm:text-5xl md:text-7xl"><Dot  size={60} /> <ShieldCheck size={60} strokeWidth={2}/> 30 day guarantee <Dot size={70} /></li>
            <li className="flex items-center gap-8 text-gray-500 font-extrabold text-3xl sm:text-5xl md:text-7xl"><CreditCard size={60} strokeWidth={2}/> Secure payments </li>
            <li className="flex items-center gap-8 text-gray-500 font-extrabold text-3xl sm:text-5xl md:text-7xl"><Dot size={60} /> <Truck size={60} strokeWidth={2}/> Free delivery</li>  
          </ul>
        </div>       
      </div>
      {/* {Catgories} */}
       <div className="grid justify-items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9">
          {
            categoriesData.map(category => {
              return (
                <div key={category.title} className="cursor-pointer bg-gray-200 ease-in-out duration-300 h-[14rem] hover:scale-125 flex flex-col gap-3 items-center aspect-square p-2 rounded-3xl">
                  <Image src={category.image} alt='category image' className="object-cover aspect-square h-40 rounded-2xl" width={200} height={200} />
                  <h2 className="text-[#131B23] font-extrabold text-2xl tracking-normal">{category.title}</h2>
                </div>
              )
            })
          }
      </div>
      {/* {Testimonials} */}
      <div className="flex flex-col sm:flex-row gap-x-5 gap-y-3 md:gap-y-8 w-full">
        <div className="flex flex-col items-start space-y-3 rounded-3xl xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-left inline-flex z-10">
            Testimon<span className="sm:text-[#131B23] md:text-[#E9F1F7] lg:text-[#131B23]">ials</span>
          </h2>
          <div className="bg-[#131B28] rounded-3xl p-4 space-y-5">
            <div className="flex gap-4 items-start">
              <Image src='/user1.jpg' className="grayscale rounded-xl object-contain" alt="user image" width={60} height={50} />
              <div>
                <div className="flex gap-1">
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5"  strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                </div>
                <h3 className="text-xl md:text-2xl text-slate-100 font-semibold">Anna Hickson</h3>
              </div>                
            </div>
            
            <p className="text-left font-medium  text-slate-100">
              These denim shorts and jeans are amazing! Perfect fit, great quality, and super comfortable.
              The jacket I bought is also fantastic. Will definitely shop here again!
            </p>
          </div>
          
          <div className="bg-slate-200 rounded-3xl p-4 space-y-5">
            <div className="flex gap-4 items-end justify-end">
              <Image src='/user5.jpg' className="grayscale rounded-xl object-contain" alt="user image" width={60} height={50} />
              <div>
                <div className="flex gap-1">
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Yvonne Thompson</h3>
              </div>                
            </div>
            
            <p className="text-left font-medium  text-[#131B23]">
              Absolutely in love with my new shirt and trench coat! They&apos;re 
              comfortable, and perfect for any occasion. Exceptional quality and fast delivery!
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 h-fit">
          <div className="bg-[#2274A5] bg-opacity-90 p-4 rounded-3xl flex flex-col items-center lg:items-start gap-2">
            <div className="flex gap-4 items-start">
                <Image src='/user2.jpg' className="grayscale rounded-xl object-contain" alt="user image" width={60} height={50} />
                <div>
                  <div className="flex gap-1">
                    <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                    <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                    <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                    <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                    <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                  </div>
                  <h3 className="text-xl md:text-2xl text-slate-100 font-semibold">Samantha Samuels</h3>
                </div>                
              </div>
              <p className="text-left font-medium w-full text-slate-100">
                I purchased a jacket, trench coat, and shorts. All three are of excellent quality,
                fit perfectly, and are very stylish. Couldn&apos;t be happier with my purchase!
              </p>  
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4 text-white">
              <div className="flex flex-col items-end md:items-center gap-2 bg-[#E9F1F7] p-4 rounded-3xl">
                <div className="flex gap-4 items-start">
                  <Image src='/user3.jpg' className="grayscale rounded-xl object-contain" alt="user image" width={60} height={50} />
                  <div>
                    <div className="flex gap-1">
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                    </div>
                    <h3 className="text-xl md:text-2xl text-[#131B28] font-semibold">Gerald Mhlanga</h3>                   
                  </div>                                  
                </div>
                <p className="text-left font-medium w-full text-[#131B28]">
                  I am thrilled with my jacket and jeans! Both pieces fit perfectly 
                  and are incredibly fashionable. Quality and comfort are top-notch. Highly recommend this store!
                </p>
              </div>
              <div className="flex flex-col md:items-center justify-center gap-4 bg-[#E7DFC6] p-4 rounded-3xl">
                <div className="flex gap-4 items-start">
                  <Image src='/user4.jpg' className="grayscale rounded-xl object-contain" alt="user image" width={60} height={50} />
                  <div>
                    <div className="flex gap-1">
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                      <Star className="bg-clip-text text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3}/>
                    </div>
                    <h3 className="text-xl md:text-2xl text-[#131B28] font-semibold">Thomas Rafik</h3>                   
                  </div>                                  
                </div>
                <p className="text-left font-medium w-full text-[#131B28]">
                  The trench coat I purchased is fantastic! It&apos;s stylish, fits well, and the material is 
                  durable. Also loved the shirts I got. Great quality
                </p>
              </div>
            </div>
          </div>          
        </div>
      {/* {FAQ} */}
      <div className="bg-[#131B28] text-[#E9F1F7] flex flex-col items-center justify-center gap-5 rounded-3xl h-[30rem]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white">Have A Question? <br/> We Are Here To Help</h1>
        <div className="flex">
          <Image src="/user6.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
          <Image src="/user7.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
          <Image src="/user8.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
          <Image src="/user9.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
        </div>
        <p className="text-center">Our customer support is available<br /> monday to friday: 8am-8:30pm.</p>
        <button className="bg-[#E7DFC6] py-4 px-8 text-xl font-bold text-slate-500 rounded-2xl">Contact us</button>
      </div>
    </div>
  )
}

export default Home