import React from "react";

// create a profile component in reactJS.
export default function ProfilerCard(){
    return (
        <div className="flex h-screen justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className="flex flex-col justify-center "> 
                    <div className="bg-white shadow-lg shadow-white transition ease-in-out delay-150 hover:scale-110 duration-1000 rounded-lg overflow-hidden">

                        <div className="relative">
                            <div className="absolute left-[112px] top-[120px]">
                                <img src="images.jpeg" alt="" className="h-24 w-24 rounded-full "/>
                            </div>
                            <div className="h-44 w-80">
                                <img src="images.webp" alt="" className="h-44 w-80"/>
                            </div>
                            <div className="h-36 w-80 bg-white ">
                                <div className="flex flex-col h-full justify-center items-center">
                                    <div className="details flex justify-between space-x-2">
                                        <div className="name font-serif font-semibold">Shriyansh Vishwakarma</div>
                                        <div className="age font-serif text-slate-400">24</div>
                                    </div>
                                    <div className="location font-serif text-slate-400">
                                        Bengaluru
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="h-14 w-80 bg-white flex justify-around items-center">
                            <div >
                                <div className="flex flex-col items-center font-semibold">80K</div>
                                <div className="text-xs font-thin flex flex-col items-center ">Followers</div>
                            </div>
                            <div>
                                <div className="font-semibold flex flex-col items-center ">803K</div>
                                <div className="text-xs font-thin flex flex-col items-center ">Likes</div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center font-semibold">1.4K</div>
                                <div className="text-xs font-thin flex flex-col items-center ">Photos</div>
                            </div>
                        </div>
                        <hr />
                    </div>
            
                </div>
        </div>
    )
}