import React, { useState } from 'react';


function Bio() {

    return (
        
        <>
            <section className="text-white flex-col flex justify-between flex-shrink-0 z-10 w-screen h-screen">
                <div className="w-full flex flex-col">
                    <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 pt-10 px-5 xl:px-14 z-10">About me</h2>
                    <div className="font-normal leading-normal px-5 xl:px-14 pb-8 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis est, cursus vehicula convallis at, sagittis sit amet neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis est, cursus vehicula convallis at, sagittis sit amet neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis est, cursus vehicula convallis at, sagittis sit amet neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis est, cursus vehicula convallis at, sagittis sit amet neque.</div>
                </div>
                <div className="flex-grow min-h-0 z-10"></div>

                <div className="flex">
                    <div className="w-1/3 z-10 hidden md:block"></div>
                    <div className="w-full lg:w-2/3 z-10">
                        <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 px-5 xl:px-14">Contact</h2>
                        <p className="text-normal px-5 xl:px-14"><span className="uppercase font-black text-xl">Call Me</span><br />+39 329 3324473</p>
                        <p className="text-normal pb-10 px-5 xl:px-14"><span className="uppercase font-black text-xl">Write Me</span><br />lucaponzanelli@hotmail.com</p>
                    </div>
                </div>
            </section>
            
            

        </>
    );
};

export default Bio;