import { createRoot} from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import { Effects } from "@react-three/drei"
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass"
import './App.css'
import Squares from './Squares'
import Plane from './Plane'
import Slider from './Slider'

extend({GlitchPass});
createRoot(document.getElementById('root')).render(
  <>
    <Canvas id='canvas' style={{position:'fixed', top:'0'}}>
        <Plane />
        <Effects>
            <glitchPass />
        </Effects>
    </Canvas>
    <Squares />
    <Slider />
  </>
)