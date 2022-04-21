import React from 'react'
import Image from 'next/image'
import Tech1 from "../public/Tech2.jpg";

const schoolContent = () => {
  return (
    <div className="min-w-7xl mx-0 md:mx-20">
      <div className=" flex md:flex-row flex-col justify-between items-center my-10">
        <div className="flex-col px-10 ">
          <h1 className="text-6xl text-blue-500 font-bold">
            About us
          </h1>
          <p className="text-2xl text-gray-400 mt-5 mb-10">
            We enourage and nuture the next generation of tech innovators
          </p>
          <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:shadow-lg px-8 h-14 rounded-md hover:text-white ">
            See Our Work
          </button>
        </div>
        <div className="px-10">
          <Image src={Tech1} width={500} height={500} objectFit="contain" />
        </div>
      </div>
    </div>
  )
}

export default schoolContent