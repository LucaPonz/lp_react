import Bio from './Bio';
import Title from './Title';
import { useHorizontalScroll } from "./useSideScroll";

function Slider() {
    const scrollRef = useHorizontalScroll();
     return(
    <div id='container' ref={scrollRef} className="scroll-smooth flex flex-col lg:h-screen xl:flex-row items-center xl:overflow-x-scroll overflow-y-scroll snap-y xl:snap-x snap-mandatory no-scrollbar">
        <Title />
        <Bio />
    </div>
    )
}

export default Slider;