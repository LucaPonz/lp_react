import angelica from './images/angelica.png';
import umberto from './images/umberto.png';
import claudia from './images/claudia.png';
import billy from './images/billy.png';
import SitePopover from './SitePopover'

function Biowork() {
    return (
        <>
            <section className="w-screen flex h-screen">
                <div className="text-white bg-white bg-opacity-25 w-1/2 flex-col flex justify-between flex-shrink-0 z-10">
                    <div className="w-full flex flex-col">
                        <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 pt-10 px-5 xl:px-14 z-10">About me</h2>
                        <div className="font-normal leading-normal px-5 xl:px-14 pb-8 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis est, cursus vehicula convallis at, sagittis sit amet neque. Nam sagittis, nunc sed pretium aliquam, nulla tortor accumsan nisi, ut ornare nisi leo ac nisi. Praesent id luctus turpis, quis porta augue. Donec fermentum fringilla turpis, id rutrum felis consectetur a. Morbi varius varius ligula eget consectetur. Praesent egestas congue turpis a ultrices. Curabitur sit amet finibus lacus. Pellentesque elementum dictum tincidunt. Etiam congue tortor nibh, id ullamcorper tellus feugiat vel. Nullam tempus lorem bibendum ligula efficitur, sit amet lacinia arcu rutrum. Integer nec turpis eget velit accumsan euismod dapibus at urna. Vivamus condimentum odio sed magna gravida cursus. Nam gravida molestie pretium. Morbi interdum non leo quis interdum.</div>
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
                </div>
                <div class="flex items-center w-1/2 flex-shrink-0 z-0">
                    <div class="w-full flex flex-col px-14">
                        <h2 class="text-6xl lg:text-7xl font-roboto font-black uppercase text-white opacity-90 pb-4">Works</h2>
                        <div class="flex flex-col">

                            <SitePopover
                                content={<a href="https://www.angelicastella.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center focus-visible:outline-none"><span><strong class="uppercase font-black text-xl focus-visible:outline-none">Angelica Stella</strong><br />— Pilates Master Trainer</span>
                                    <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                </a>}
                                panel={<div className='h-96 object-cover'><img src={angelica} alt='angelica stella pilates' className='h-full w-full rounded-none' /></div>}
                            />
                            <SitePopover
                                content={<a href="https://www.studioumbertostella.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center focus-visible:outline-none"><span><strong class="uppercase font-black text-xl focus-visible:outline-none">Umberto Stella</strong><br />— Studio Dentistico</span>
                                    <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                </a>}
                                panel={<div className='h-96 object-cover'><img src={umberto} alt='studio dentistico umberto stella' className='h-full w-full rounded-none' /></div>}
                            />
                            <SitePopover
                                content={<a href="https://www.claudiacastellani.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center focus-visible:outline-none"><span><strong class="uppercase font-black text-xl focus-visible:outline-none">Claudia Castellani</strong><br />— Psicologa Psicoterapeuta</span>
                                    <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                </a>}
                                panel={<div className='h-96 object-cover'><img src={claudia} alt='claudia castellani psicologa psicoterapeuta' className='h-full w-full rounded-none' /></div>}
                            />
                            <SitePopover
                                content={<a href="https://www.wildbillygoat.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center focus-visible:outline-none"><span><strong class="uppercase font-black text-xl focus-visible:outline-none">Wild Billy Goat</strong><br />— E-mtb Versilia Experience</span>
                                    <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                </a>}
                                panel={<div className='h-96 object-cover'><img src={billy} alt='wild billy goat' className='h-full w-full rounded-none' /></div>}
                            />

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
export default Biowork;