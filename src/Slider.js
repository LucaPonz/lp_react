import Bio from './Bio';
import Work from './Work';
import Biowork from './Biowork';    
import { ScrollTrigger } from 'gsap/all';
import { useEffect, createRef, useRef } from 'react';
import gsap, {Power1} from 'gsap';

gsap.registerPlugin(ScrollTrigger);


function Slider() {

    const panels = useRef([]);
    const panelsContainer = useRef();
    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };

    const panelsDesk = useRef([]);
    const panelsContainerDesk = useRef();
    const createPanelsRefsDesk = (panel, index) => {
        panelsDesk.current[index] = panel;
    };

    

  useEffect(() => {
    const totalPanels = panels.current.length;
    const totalPanelsDesk = panelsDesk.current.length;
    let mm = gsap.matchMedia(window);

    mm.add("(min-width: 1024px)", () => {
    gsap.to(panelsDesk.current, {
      xPercent: -100 * (totalPanelsDesk - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainerDesk.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanelsDesk - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainerDesk.current.offsetWidth
      }
    });
    })
    mm.add("(max-width: 1023px)", () => {
    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth
      }
    });
    })
  }, []);

  useEffect(() =>{
        let textAnimation = gsap.timeline();
        textAnimation.from('.animation',{
        y:-100,
        stagger: {
            each: 0.25
        },
        ease: Power1.easeOut,
    }).delay(1)
}, [])

     return(
    <>
    <div ref={panelsContainer} className="flex-row items-center no-scrollbar flex lg:hidden">
        <section ref={(e) => createPanelsRefs(e, 0)}>
            <div className="section h-screen w-screen z-10 flex-shrink-0 order-1">
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
        <section ref={(e) => createPanelsRefs(e, 1)}><Bio/></section>
        <section ref={(e) => createPanelsRefs(e, 2)}><Work/></section>
    </div>

    <div ref={panelsContainerDesk} className="flex-row items-center no-scrollbar hidden lg:flex">
    <section ref={(e) => createPanelsRefsDesk(e, 0)}>
            <div className="section h-screen w-screen z-10 flex-shrink-0 order-1">
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
        <section ref={(e) => createPanelsRefsDesk(e, 1)}><Biowork/></section>
    </div>
    </>
    )
}

export default Slider;