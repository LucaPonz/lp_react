import gsap, {Power1} from 'gsap';
import { useEffect } from 'react';


function Title() {
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
    const goToSection = () => {
        let scrollable = document.getElementById("container");
        scrollable.scrollTo({
            left: scrollable.scrollWidth,
            behavior: "smooth",
        });
    }
    return (
        <section className="section h-screen w-screen z-0 flex-shrink-0 order-1">
            <div className="w-full h-full text-white opacity-90 font-roboto flex justify-center items-center">
                <button className="min-w-0 text-7xl uppercase font-bold tracking-wide flex flex-col items-start" onClick={goToSection}>
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
        </section>
    )
}

export default Title