import React from "react";
import Laptop from "../assets/laptop.jpg"
 const Analytics = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-6" src={Laptop} alt="laptop-img" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       Laboriosam, numquam. Iusto, dolorum obcaecati voluptas distinctio sed ab 
                       hic laudantium totam aliquid fugit nisi optio laboriosam quod beatae eveniet repellendus. Quaerat!
                    </p>
                    <button className="bg-[#000000] w-[200px] rounded-md font-medium py-3 mx-auto md:mx-0 my-4 text-[#00df9a] ">Get Start</button>
                </div>
            </div>
        </div>
    )
 }

 export default Analytics;