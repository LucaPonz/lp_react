import React, { useState } from 'react';


function Bio() {

    return (
        
        <>
            <section className="section text-white min-h-screen lg:h-1/2 lg:min-h-0 w-screen xl:w-1/2 xl:h-screen flex-col flex justify-between order-2 flex-shrink-0 z-10 border-l border-r border-white">
                <div className="w-full flex flex-col">
                    <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 pt-10 px-5 xl:px-14 z-10">About me</h2>
                    <div className="font-normal leading-normal px-5 xl:px-14 pb-8 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis est, cursus vehicula convallis at, sagittis sit amet neque. Nam sagittis, nunc sed pretium aliquam, nulla tortor accumsan nisi, ut ornare nisi leo ac nisi. Praesent id luctus turpis, quis porta augue. Donec fermentum fringilla turpis, id rutrum felis consectetur a. Morbi varius varius ligula eget consectetur. Praesent egestas congue turpis a ultrices. Curabitur sit amet finibus lacus. Pellentesque elementum dictum tincidunt. Etiam congue tortor nibh, id ullamcorper tellus feugiat vel. Nullam tempus lorem bibendum ligula efficitur, sit amet lacinia arcu rutrum. Integer nec turpis eget velit accumsan euismod dapibus at urna. Vivamus condimentum odio sed magna gravida cursus. Nam gravida molestie pretium. Morbi interdum non leo quis interdum.</div>
                </div>
                <div className="flex-grow min-h-0 z-10"></div>

                <div className="flex">
                    <div className="w-1/3 z-10 hidden md:block"></div>
                    <div className="w-full lg:w-2/3 z-10">
                        <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 px-5 xl:px-14 break-words">Contact</h2>
                        <p className="text-normal px-5 xl:px-14"><span className="uppercase font-black text-xl">Call Me</span><br />+39 329 3324473</p>
                        <p className="text-normal pb-10 px-5 xl:px-14"><span className="uppercase font-black text-xl">Write Me</span><br />lucaponzanelli@hotmail.com</p>
                    </div>
                </div>
            </section>
            
            

        </>
    );
};

export default Bio;