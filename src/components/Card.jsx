import React from "react";
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Card = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-[20px] hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="img-png"/>
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">Start Trial</button>
                </div>
                <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-[20px] hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="img-png"/>
                    <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
                    <p className="text-center text-4xl font-bold">$249</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                        <p className="py-2 border-b mx-8 mt-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8 mt-8">Send up to 5 GB</p>
                    </div>
                    <button className="bg-[#000000] text-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-[20px] hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3.5rem] bg-white" src={Triple} alt="img-png"/>
                    <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
                    <p className="text-center text-4xl font-bold">$549</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
                        <p className="py-2 border-b mx-8 mt-8">10 Granted User</p>
                        <p className="py-2 border-b mx-8 mt-8">Send up to 10 GB</p>
                    </div>
                    <button className="bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Card;