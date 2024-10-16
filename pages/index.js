import React from 'react';
import Link from 'next/link';
import Navbar from './components/navbar';
import Banner from '../public/assets/jpg/home-banner.jpg';
import MobileBanner from '../public/assets/jpg/mobile-banner.jpg';
import Company from './components/company';
import Global from './components/global';
import Product from './components/product';
import Journey from './components/journey';
import Meet from './components/meet';
import Footer from './components/footer';

// backgroundImage
const banner = { pic: Banner,img:MobileBanner };

export default function Home() {
  return (
    <>
      <Navbar />

      {/* desktop-banner */}
      <div 
      id="home"
        className=" h-[560px]  hidden md:block"
        style={{
          backgroundImage: `url(${banner.pic.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main w-[90%] xl:w-[80%] 2xl:w-[1100px] mx-auto pt-28">
          <p className="font-urbanist font-[600] text-[30px] md:text-5xl text-white ">
            Pioneering the Future <br /> of Regenerative Living <br /> Through
            Technology.
          </p>
          <p className="font-[400] font-urbanist text-[#A5A5A5] text-lg mt-5">
            The operating system for regenerative communities.
          </p>
          <div className="mt-5 ">
            <Link
              href="https://traditionaldreamfactory.com/?utm_source=closer.earth&utm_medium=website"
              target="_blank"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#67F8C0] to-[#3F91DD] font-[700] font-urbanist text-[#171717]"
            >
              See it in action
            </Link>
            <Link
              href="https://closer.gitbook.io/closer-protocol"
              target="_blank"
              className="ml-5 py-3 px-6 rounded-xl border-[1px] border-white font-[700] font-urbanist text-white text-xs lg:text-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* mobile-banner */}
      <div
        className="h-[560px] block md:hidden"
        style={{
          backgroundImage: `url(${banner.img.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] mx-auto pt-20">
          <p className="title-banner font-urbanist font-[700] text-[35px] md:text-xl text-white">
            Pioneering the Future <br /> of Regenerative Living <br /> Through Technology.
          </p>
          <p className="font-[400] font-urbanist text-[#A5A5A5] text-lg mt-5">
            The operating system for regenerative communities.
          </p>
          <div className="mt-5 ">
            <Link
              href="https://traditionaldreamfactory.com/?utm_source=closer.earth&utm_medium=website"
              target="_blank"
              className="banner-btn py-3 px-6 rounded-xl bg-gradient-to-r from-[#67F8C0] to-[#3F91DD]  font-[700] font-urbanist text-[#171717] text-lg">Get Started</Link>
            <Link 
              href="https://closer.gitbook.io/closer-protocol"
              target="_blank"
              className="banner-btn ml-5 py-3  px-6 rounded-xl border-[1px] border-white font-[700] font-urbanist text-white text-lg">Learn More</Link>
          </div>
        </div>
      </div>

      <Company/>
      <Global/>
      <Product/>
      <Journey/>
      <Meet/>
      <Footer/>

    </>
  );
}
