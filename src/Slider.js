import Bio from './Bio';
import Title from './Title';
import Work from './Work';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);


function Slider() {
    

    const sections = gsap.utils.toArray("section");
    let maxWidth = 0;

    const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
        maxWidth += section.offsetWidth;
    });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    useEffect(() => {
    gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
    }
    });

    sections.forEach((sct, i) => {
    ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: {targets: sct, className: "active"}
    });
    });
    });

   



     return(
    <div id='container' className="scroll-smooth flex flex-col lg:h-screen xl:flex-row items-center xl:overflow-x-scroll overflow-y-scroll snap-y xl:snap-x snap-mandatory no-scrollbar">
        <Title />
        <Bio />
        <Work />
    </div>
    )
}

export default Slider;