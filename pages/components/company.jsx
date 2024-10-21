import React from "react";
import Section from "../../public/assets/png/Section-2-Logo-1.png";
import Section2 from "../../public/assets/png/Section-2-Logo-2.png";
import Section3 from "../../public/assets/png/Section-2-Logo-3.png";
import Section4 from "../../public/assets/png/Section-2-Logo-4.png";
import Section5 from "../../public/assets/png/Section-2-Logo-5.png";
import Image from "next/image";
import Link from "next/link";

export default function Company() {
  return (
    <>
      <div className="bg-[#222] py-20">
        <div className="w-[90%] xl:w-[80%] 2xl:w-[900px] mx-auto grid md:grid-cols-5 gap-10 md:gap-0">
          <div>
            <Link 
              href="https://traditionaldreamfactory.com/?utm_source=closer.earth&utm_medium=website"
              target="_blank">
                <Image
                  src={Section}
                  className="w-[15%] md:w-[20%] mx-auto md:ml-0"
                  alt="Traditional Dream Factory"/>
            </Link>
          </div>

          <div>
            <Link 
              href="https://oasa.earth/?utm_source=closer.earth&utm_medium=website"
              target="_blank">
              <Image
                src={Section2}
                className="w-[40%] md:w-[60%] mx-auto md:ml-0"
                alt="OASA Network"/>
            </Link>
          </div>

          <div>
            <Link 
              href="https://celo.org/?utm_source=closer.earth&utm_medium=website"
              target="_blank">
              <Image
                src={Section3}
                className="w-[50%] md:w-[70%] mx-auto"
                alt="Celo"/>
            </Link>
          </div>

          <div>
            <Link 
              href="https://climatecollective.org/?utm_source=closer.earth&utm_medium=website"
              target="_blank">
              <Image
                src={Section4}
                className="w-[40%] md:w-[55%] mx-auto md:ml-auto"
                alt="Climate Collective"/>
            </Link>
          </div>

          <div>
            <Link 
              href="https://www.regen.network/?utm_source=closer.earth&utm_medium=website"
              target="_blank">
              <Image
                src={Section5}
                className="w-[30%] md:w-[45%] mx-auto md:ml-auto"
                alt="Regen Network"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
