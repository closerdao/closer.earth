import React from "react";
import BluTick from "../../public/assets/svg/blue-tick.svg";
import Image from "next/image";
import Line from "../../public/assets/png/line.png";

const yearsAhead = {
  2024: {
    stats: ["4 active villages", "8 under development"],
    subheadings: [
      {
        name: "Increased Utility",
        points: [
          "Improved booking systems",
          "Meeting room rentals",
          "Partial token / credits payments",
          "Admin dashboards",
          "Platform configs",
          "Multi language",
          "Blog",
          "Airdrop page"
        ]
      }
    ]
  },
  2025: {
    subheadings: [
      {
        name: "Scaling The Platform",
        points: [
          "Proof of Presence v2",
          "Multichain deployments",
          "Cross village mapping",
          "Transferable skills & memberships",
          "Proof of Regeneration",
          "Account abstraction (Magic)",
          "Fiat to crypto bridge (Monerium)",
          "Inverter Smart Contract Module",
          "UI Integrations",
          // "App (?)",
          "Airbnb, Booking.com & other partner integrations",
        ]
      }
    ]
  },
  2026: {
    subheadings: [
      {
        name: 'Village Token Index',
        points: ["Partner with IndexCoop to release an index of Closer enabled communities"]
      },
      {
        name: 'Token Swaps',
        points: ["Provide liquidity for cross village token trading"]
      }
    ]
  }
}

export default function Journey() {
  return (
    <>
      <div id="journey" className="bg-[#171717] py-20">
        <div className="w-[90%] xl:w-[80%] 2xl:w-[900px] mx-auto">
          <p className="global-txt font-urbanist font-[700] text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-2xl text-white text-center">
            Our Journey Ahead
          </p>
          <p className="mx-auto line global-para mt-3 font-urbanist font-[400] text-sm md:text-xs lg:text-sm text-[#A5A5A5] md:w-[8f0%] text-center">
            In the coming years, Closer is poised to revolutionize how regenerative communities access and manage shared resources, enabling a global network of sustainable, cooperative living spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-[90%] xl:w-[80%] 2xl:w-[900px] mx-auto">
          {Object.entries(yearsAhead).map(([year, data]) => (
            <div
            key={year}
            style={{
              border: "1px solid var(--Main, #67F8C0)",
              borderRadius: "20px",
            }}
            className="p-5">
              <p className="font-urbanist font-[700] text-5xl bg-clip-text text-transparent bg-gradient-to-t from-[#67F8C0] to-[#3F91DD]">
                {year}
              </p>

              {(data.stats ?? []).map(stat => (
                <div key={stat} className="flex mt-5">
                  <Image src={BluTick} alt="Tick" className="" />
                  <p className="self-center ml-2 font-urbanist font-[600] text-white text-lg">
                    {stat}
                  </p>
                </div>
              ))}

              {data.stats?.length && 
                <div>
                  <Image src={Line} alt="Separator" className="pt-5" />
                </div>
              }

              {data.subheadings.map(data => (
                <div key={data.name} className="pt-5">
                  <p className=" font-urbanist font-[600] text-white text-xl">
                    {data.name}
                  </p>

                  {data.points.map(point => (
                    <div key={point} className="flex mt-3">
                      <Image width="12" src={BluTick} alt="Tick" />
                      <p className="self-center ml-3 font-urbanist font-[600] text-white">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
