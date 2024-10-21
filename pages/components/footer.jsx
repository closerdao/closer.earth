import React from 'react';
import Link from 'next/link';
import Flogo from '../../public/assets/svg/Footers.svg';
import LinkedIn from '../../public/assets/svg/Linkedin.svg';
import Instagram from '../../public/assets/svg/Instagram.svg';
import Email from '../../public/assets/svg/Email.svg';
import Location from '../../public/assets/svg/Location.svg';
import Image from 'next/image';
import Github from '../../public/assets/svg/github.svg'
import XLogo from '../../public/assets/svg/x-logo.svg'
import Gitbook from '../../public/assets/svg/gitbook.svg'

export default function Footer() {
  return (
    <div className="bg-[#171717] py-20 ">
      <div className="grid md:grid-cols-4 w-[90%] xl:w-[80%] 2xl:w-[1100px] mx-auto">
        <div>
          <Image src={Flogo} alt="Closer" />
          <p className="mt-5 font-urbanist font-[400] text-sm md:text-xs lg:text-sm text-[#A5A5A5]">
            The operating system for regenerative communities.
          </p>

          <div className="flex mt-5">
            <Link target="_blank" href="https://www.linkedin.com/company/proofofpresenceprotocol/">
              <Image src={LinkedIn} alt="LinkedIn" height="24" className="mr-3 cursor-pointer" />
            </Link>
            <Link target="_blank" href="https://instagram.com/closerearth">
              <Image src={Instagram} alt="Instagram" height="24" className="mr-3 cursor-pointer" />
            </Link>
            <Link target="_blank" href="https://x.com/closerearth">
              <Image src={XLogo} alt="X" height="24" className="mr-3 cursor-pointer" />
            </Link>
            <Link target="_blank" href="https://github.com/closerdao">
              <Image src={Github} alt="Github" height="24" className="mr-3 cursor-pointer" />
            </Link>
            <Link target="_blank" href="https://closer.gitbook.io/closer-protocol">
              <Image src={Gitbook} alt="Gitbook" height="24" className="cursor-pointer" />
            </Link>
          </div>
          <p className="mt-5 font-urbanist font-[400] text-sm md:text-xs lg:text-sm text-[#A5A5A5]">
            © Copyright {(new Date()).getFullYear()}
          </p>
        </div>

        <div className="md:mx-auto mt-5 md:mt-0">
          <Link
            href="mailto:team@closer.earth"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex">
            <Image src={Email} alt="Email" className="cursor-pointer" />
            <span className="self-center ml-2 font-urbanist font-[400] text-sm md:text-xs lg:text-sm text-[#A5A5A5] cursor-pointer">
              team@closer.earth
            </span>
          </Link>

          <Link
            href="https://t.me/+rdZvSdohTzs0Njlh"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex mt-5">
            <Image src={Location} alt="Telegram" className="cursor-pointer" />
            <span className="self-center ml-2 font-urbanist font-[400] text-sm md:text-xs lg:text-sm text-[#A5A5A5] cursor-pointer">
              Join our community                
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
