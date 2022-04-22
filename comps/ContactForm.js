import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-[#f8f8f8] m-0 p-0 min-h-[20vh]">
        <div className="flex justify-center items-center">
            

            <div className="bg-[#49acaeb] w-3/5 p-2 rounded-lg shadow-md">
            <h1 className="text-center text-[#2b2a2a] text-6xl font-bold mt-28">Contact Us</h1>
                <form className="mx-auto">
                    <div className="my-3 mx-auto">
                        <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your name" />
                    </div>
                    <div className="my-3 mx-auto">
                        <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your e-mail" />
                    </div>
                    <div className="my-3 mx-auto">
                        <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your password" />
                    </div>
                    <div className="my-3 mx-auto">
                        <textarea className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Type Message..."></textarea>
                    </div>

                    <button className="w-full p-3 mt-2 bg-blue-500 text-lg text-white round-lg outline-none border-none">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm