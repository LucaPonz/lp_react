import Bio from './Bio';
import Title from './Title';

function Slider() {
     return(
    <div id='container' className="scroll-smooth flex flex-col xl:flex-row items-center xl:overflow-x-scroll overflow-y-scroll snap-y xl:snap-x snap-mandatory no-scrollbar">
        <Title />
        <Bio />
    </div>
    )
}

export default Slider;