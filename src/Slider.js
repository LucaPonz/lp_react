import angelica from './images/angelica.png';
import umberto from './images/umberto.png';
import claudia from './images/claudia.png';
import billy from './images/billy.png';
import SitePopover from './SitePopover'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useEffect, useRef } from 'react';
import gsap, {Power2} from 'gsap';
import { useHorizontalScroll } from "./useSideScroll";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function Slider() {

    const workTitle= useRef();
    const bio= useRef();
    const work= useRef();
    const contactTitle= useRef();
    const bioTitle= useRef();

    const scrollRef = useHorizontalScroll();

  useEffect(() => {    
      let links = gsap.utils.toArray("nav a");
      if (links) {
          links.forEach(a => {
              let element = document.querySelector(a.getAttribute("href")),
                  linkST = ScrollTrigger.create({
                      trigger: element,
                      start: "top top"
                  });
              ScrollTrigger.create({
                  trigger: element,
                  start: "top center",
                  end: "bottom center",
                  onToggle: self => self.isActive && setActive(a)
              });
              a.addEventListener("click", e => {
                  e.preventDefault();
                  gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
              });
              function setActive(link) {
                  links.forEach(el => el.classList.remove("active"));
                  link.classList.add("active");
              }
          });
      }    
  }, []);

  useEffect(() =>{
        let textAnimation = gsap.timeline();
        textAnimation.from('.animation',{
        y:-100,
        stagger: {
            each: 0.25
        },
        ease: Power2.easeOut,
    }).delay(1)
}, [])

    useEffect(() => {
        gsap.from(contactTitle.current, {
            scrollTrigger: { trigger: contactTitle.current, start: "top center" },
            y: -200,
            duration: 2,
            ease: Power2.easeOut,
        }).delay(1)
        gsap.from(bioTitle.current, {
            scrollTrigger: { trigger: bioTitle.current, start: "top center" },
            y: -200,
            duration: 2,
            ease: Power2.easeOut,
        }).delay(1)
        gsap.from(workTitle.current, {
            scrollTrigger: { trigger: workTitle.current, start: "top center" },
            y: -200,
            duration: 2,
            ease: Power2.easeOut,
        }).delay(1)
    }, [])

    function scrollToEnd() {
        const w = scrollRef.current.getBoundingClientRect().width
        scrollRef.current.scrollTo({
            left: w,
            behavior: "smooth",
          });
    }

     return(
    <>
    <div id='start' className="flex-col items-center flex lg:hidden h-screen">
        <nav className='fixed top-6 flex gap-6 z-50'>
            <a href='#start' className='font-normal text-base uppercase border-white border text-white px-6 py-1 rounded-full'>Start</a>
            <a href='#bio' className='font-normal text-base uppercase border-white border text-white px-6 py-1 rounded-full'>Bio</a>
            <a href='#work' className='font-normal text-base uppercase border-white border text-white px-6 py-1 rounded-full'>Work</a>
        </nav>
        <section>
            <div className="min-h-screen w-screen z-10 flex-shrink-0 flex items-center">
                <div className="w-full h-full text-white opacity-90 font-roboto flex justify-center items-center">
                    <button className="min-w-0 text-7xl uppercase font-bold tracking-wide flex flex-col items-start">
                        <p className="block-inline overflow-hidden h-16"><span className="block leading-16 animation">luca</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16"><span className="block leading-16 animation">ponza</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16"><span className="block leading-16 animation">nelli</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16 self-end stroke"><span className="block leading-16 animation">web</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16 self-end stroke"><span className="block leading-16 animation">arti</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16 self-end stroke"><span className="block leading-16 animation">san</span>
                        </p>
                    </button>
                </div>
            </div>
        </section>
        <section ref={bio} id='bio'>
            <div className="text-white flex-col flex justify-center flex-shrink-0 z-10 w-screen min-h-screen">
                <div className="w-full flex flex-col">
                    <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 pt-10 px-5 xl:px-14 z-10 overflow-hidden"><span className='block' ref={bioTitle}>About me</span></h2>
                    <div className="font-normal leading-normal px-5 xl:px-14 pb-8 z-10">Hi, I'm Luca Ponzanelli and this is my first React Webapp project. I've become passionate about programming quite recently and my desire to learn has led me to experiment with various languages ​​even though I'm moving more and more towards frontend side programming. I'm pretty familiar with markup and stylesheet languages ​​and frameworks like bootstrap and tailwind. I currently work as a Freelance Frontend Developer and in addition to my work I am passionate about photography, music, surfing, video, graphics and much more.</div>
                </div>

                <div className="flex">
                    <div className="w-1/3 z-10 hidden md:block"></div>
                    <div className="w-full lg:w-2/3 z-10">
                        <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 px-5 xl:px-14 overflow-hidden"><span className='block' ref={contactTitle}>Contact</span></h2>
                        <p className="text-normal px-5 xl:px-14"><span className="uppercase font-black text-xl">Call Me</span><br />+39 329 3324473</p>
                        <p className="text-normal pb-10 px-5 xl:px-14"><span className="uppercase font-black text-xl">Write Me</span><br />lucaponzanelli@hotmail.com</p>
                    </div>
                </div>
            </div>
        </section>
        <section ref={work} id='work'>
            <div class="flex items-center flex-shrink-0 z-10 w-screen min-h-screen">
                <div class="w-full flex flex-col px-14">
                    <h2 class="text-6xl lg:text-7xl font-roboto font-black uppercase text-white opacity-90 pb-4 overflow-hidden"><span className='block' ref={workTitle}>Works</span></h2>
                    <div class="flex flex-col z-10">
                    
                        <SitePopover
                            content = {<a href="https://www.angelicastella.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center"><span><strong class="uppercase font-black text-xl">Angelica Stella</strong><br />— Pilates Master Trainer</span>
                                <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>}
                            panel = {<div className='h-72 object-cover'><img src={angelica} alt='angelica stella pilates' className='h-full w-full rounded-none' /></div>}
                        />
                        <SitePopover
                            content = {<a href="https://www.studioumbertostella.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center"><span><strong class="uppercase font-black text-xl">Umberto Stella</strong><br />— Studio Dentistico</span>
                                <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>}
                            panel = {<div className='h-72 object-cover'><img src={umberto} alt='studio dentistico umberto stella' className='h-full w-full rounded-none' /></div>}
                        />
                        <SitePopover
                            content = {<a href="https://www.claudiacastellani.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center"><span><strong class="uppercase font-black text-xl">Claudia Castellani</strong><br />— Psicologa Psicoterapeuta</span>
                                <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>}
                            panel = {<div className='h-72 object-cover'><img src={claudia} alt='claudia castellani psicologa psicoterapeuta' className='h-full w-full rounded-none' /></div>}
                        />
                        <SitePopover
                            content = {<a href="https://www.wildbillygoat.it" class="font-normal text-white mt-2 leading-tight flex justify-between items-center"><span><strong class="uppercase font-black text-xl">Wild Billy Goat</strong><br />— E-mtb Versilia Experience</span>
                                <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>}
                            panel = {<div className='h-72 object-cover'><img src={billy } alt='wild billy goat' className='h-full w-full rounded-none' /></div>}
                        />
                          
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div ref={scrollRef} className="flex-row overflow-x-scroll snap-x scroll-smooth items-center no-scrollbar hidden lg:flex">
    <section className='snap-start'>
            <div className="section h-screen w-screen z-10 flex-shrink-0 order-1">
                <div className="w-full h-full text-white opacity-90 font-roboto flex justify-center items-center">
                    <button className="min-w-0 text-7xl uppercase font-bold tracking-wide flex flex-col items-start" onClick={scrollToEnd}>
                        <p className="block-inline overflow-hidden h-16"><span className="block leading-16 animation">luca</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16"><span className="block leading-16 animation">ponza</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16"><span className="block leading-16 animation">nelli</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16 self-end stroke"><span className="block leading-16 animation">web</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16 self-end stroke"><span className="block leading-16 animation">arti</span>
                        </p>
                        <p className="block-inline overflow-hidden h-16 self-end stroke"><span className="block leading-16 animation">san</span>
                        </p>
                    </button>
                </div>
            </div>
        </section>
        <section className='snap-start'>
            <div className="w-screen flex h-screen">
                <div className="text-white bg-white w-1/2 flex-col flex justify-between flex-shrink-0 z-10 mix-blend-screen">
                    <div className="w-full flex flex-col">
                        <h2 className="text-6xl xl:text-7xl text-black font-roboto font-black uppercase pb-4 pt-10 px-5 xl:px-14 z-10">About me</h2>
                        <div className="font-normal text-black leading-normal px-5 xl:px-14 pb-8 z-10">Hi, I'm Luca Ponzanelli and this is my first React Webapp project. I've become passionate about programming quite recently and my desire to learn has led me to experiment with various languages ​​even though I'm moving more and more towards frontend side programming. I'm pretty familiar with markup and stylesheet languages ​​and frameworks like bootstrap and tailwind. I currently work as a Freelance Frontend Developer and in addition to my work I am passionate about photography, music, surfing, video, graphics and much more.</div>
                    </div>
                    <div className="flex-grow min-h-0 z-10"></div>

                    <div className="flex">
                        <div className="w-1/3 z-10 hidden md:block"></div>
                        <div className="w-full lg:w-2/3 z-10">
                            <h2 className="text-6xl xl:text-7xl font-roboto font-black uppercase pb-4 px-5 xl:px-14 text-black">Contact</h2>
                            <p className="text-normal px-5 xl:px-14 text-black"><span className="uppercase font-black text-xl">Call Me</span><br />+39 329 3324473</p>
                            <p className="text-normal pb-10 px-5 xl:px-14 text-black"><span className="uppercase font-black text-xl">Write Me</span><br />lucaponzanelli@hotmail.com</p>
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
            </div>
        </section>
    </div>
    </>
    )
}

export default Slider;