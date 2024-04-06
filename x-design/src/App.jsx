import { Canvas, useFrame } from "@react-three/fiber"
import "./App.css"
import { useRef } from "react"
import { OrbitControls, MeshWobbleMaterial, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from "three"
import { useControls } from "leva"
import React, { useState } from 'react';



const Cube = ({ position, size, color }) => {
  const ref = useRef()



  useFrame((state, delta) => {
    ref.current.rotation.x += delta  //difference in time between the current frame and the last frame
    // console.log(state)
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    console.log(state.clock.elapsedTime)
  })

  return (
    <mesh position={position} ref={ref}>
    <boxGeometry args ={size}  />
    <meshStandardMaterial color={color}/>
  </mesh>
  )
}

const Sphere = ({ position, size, color }) => {

  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta  //difference in time between the current frame and the last frame
    // console.log(state)
    // ref.current.rotation.y += delta * 2.0
    // console.log(state.clock.elapsedTime)
  })

  return (
    <mesh position = {position} ref={ref}> 
      <sphereGeometry args = {size} />
      <meshStandardMaterial color = {color} wireframe/>

    </mesh>
  )
}

const Torus = ({ position, size, color }) => {
  return (
    <mesh position = {position}>
      <torusGeometry args = {size} />
      <meshStandardMaterial color = {color} wireframe/>
    </mesh>
  )
}

const TorusKnot = ({ position, size}) => {

  const ref = useRef()

  const {color, radius} = useControls({
    color: "lightblue",
    radius: {
      min: 1,
      max: 10,
      step: 0.5,
    }
  })
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta  //difference in time between the current frame and the last frame
  //   console.log(state)
  //   ref.current.rotation.y += delta * 2.0
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  //   console.log(state.clock.elapsedTime)
  // })

  return (
    <mesh position = {position} ref ={ref}>
      <torusKnotGeometry args = {size} />
      {/* <meshStandardMaterial color = {color} /> */}
      <MeshWobbleMaterial factor={2} speed={0.8} color={color}/>
    </mesh>
  )
}


const TorusKnotAvatar = ({ wobbleIntensity, thickness, color }) => {
  const ref = useRef();

   // Mapping the input values to the required ranges
   const mappedWobbleIntensity = 1 + (wobbleIntensity / 100) * 9; // Maps 0-100 to 1-10
   const mappedThickness = 0.1 + (thickness / 100) * 0.6; // Maps 0-100 to 0.1-0.7

   useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.7, mappedThickness, 2000, 20]} />
      <MeshWobbleMaterial factor={mappedWobbleIntensity} color={color} speed={2} />
    </mesh>
  );


}

const Scene = ({wobbleIntensity, thickness, color}) => {

  const directionalLightRef = useRef()

  const {lightColor, lightIntensity} = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 10,
      step: 0.4,
    }
  })

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

  return (
    <>
      <directionalLight position={[0, 0, 2]} intensity ={lightIntensity} ref={directionalLightRef} color = {lightColor}/>
      <ambientLight intensity={0.4} />

       {/* <group position = {[0, -1, 0]}>
       <Cube position={[1,0,0]} color = {"green"} size ={[1, 1, 1]} />
       <Cube position = {[-1, 0, 0]} color = {"purple"} size = {[1, 1, 1]} />
       <Cube position = {[-1, 2, 0]} color = {"hotpink"} size = {[1, 1, 1]} />
       <Cube position = {[1, 2, 0]} color = {"yellow"} size = {[1, 1, 1]} />
       </group> */}

      {/* <Cube position = {[0, 0, 0]} size = {[1, 1, 1]} color = {"orange"} /> */}

      {/* <Sphere position={[0,0,0]} size = {[1, 30, 30]} color = {"orange"}/> */}
      {/* <Torus position={[2,0,0]} size = {[0.8, 0.1, 30, 30]} color = {"blue"}/> */}
      {/* <TorusKnot position={[-2,0,0]} size = {[1, 0.7, 1000, 50]} color = {"hotpink"}/>  */}

      <TorusKnotAvatar wobbleIntensity={wobbleIntensity} thickness={thickness} color={color} />

      <OrbitControls enableZoom = {false} />
      </>
  )
}


const App = ()  => {

    // just a default state for the TorusKnotAvatar controls
    const [wobbleIntensity, setWobbleIntensity] = useState(50);
    const [thickness, setThickness] = useState(50);
    const [color, setColor] = useState("#ff00ff");

   
    const sliderStyle = {
    width: '200px', 
    margin: '10px 0', //vertical spacing
  };


  // return (
  //   <Canvas>
  //     <Scene />
  //   </Canvas>
  // )

  return (
    <div>
      <label>Wobble Intensity: {wobbleIntensity}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={wobbleIntensity}
        onChange={(e) => setWobbleIntensity(e.target.value)}
        style={sliderStyle}
      />
      <label>Thickness: {thickness}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={thickness}
        onChange={(e) => setThickness(e.target.value)}
      />
      <label>Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Canvas>
        <Scene wobbleIntensity={wobbleIntensity} thickness={thickness} color={color} />
      </Canvas>
    </div>
  );

}



export default App
