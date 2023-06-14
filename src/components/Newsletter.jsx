import React from "react";

const Newsletter = () => {
    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p>Sing up to our newletter and stay uo to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                        <input className="p-3 w-full rounded-md" type="email" placeholder="Enter Your Email"></input>
                        <button className="bg-[#00df9a] rounded-md text-black font-medium w-[200px] ml-4 my-6 px-6 py-2">Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read <span className="text-[#00df9a] underline">Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;