import { Canvas, useFrame } from "@react-three/fiber"
import "./App.css"
import { useCallback, useRef } from "react"
import { OrbitControls, MeshWobbleMaterial, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from "three"
import { useControls } from "leva"
import React, { useState } from 'react';




// const Cube = ({ position, size, color }) => {
//   const ref = useRef()



//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta  //difference in time between the current frame and the last frame
//     // console.log(state)
//     ref.current.rotation.y += delta * 2.0
//     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
//     console.log(state.clock.elapsedTime)
//   })

//   return (
//     <mesh position={position} ref={ref}>
//     <boxGeometry args ={size}  />
//     <meshStandardMaterial color={color}/>
//   </mesh>
//   )
// }

// const Sphere = ({ position, size, color }) => {

//   const ref = useRef()

<<<<<<< HEAD
  useFrame((state, delta) => {
    ref.current.rotation.x  += delta  //difference in time between the current frame and the last frame
    // console.log(state)
    // ref.current.rotation.y += delta * 2.0
    // console.log(state.clock.elapsedTime)
  })

  return (
    <mesh position = {position} ref={ref}> 
      <sphereGeometry args = {size} />
      <meshStandardMaterial color = {color} wireframe = {true}/>
=======
//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta  //difference in time between the current frame and the last frame
//     // console.log(state)
//     // ref.current.rotation.y += delta * 2.0
//     // console.log(state.clock.elapsedTime)
//   })

//   return (
//     <mesh position = {position} ref={ref}> 
//       <sphereGeometry args = {size} />
//       <meshStandardMaterial color = {color} wireframe/>
>>>>>>> 7c872c8ba2a38e236967eb4e696e9a53e1216784

//     </mesh>
//   )
// }

<<<<<<< HEAD
const Torus = ({ position, size, color }) => {
  return (
    <mesh position = {position} rotation = {[Math.PI / 2, 0, 0]} >
      <torusGeometry args = {size} />
      <meshStandardMaterial color = {color} wireframe/>
    </mesh>
  )
}
=======
// const Torus = ({ position, size, color }) => {
//   return (
//     <mesh position = {position}>
//       <torusGeometry args = {size} />
//       <meshStandardMaterial color = {color} wireframe/>
//     </mesh>
//   )
// }
>>>>>>> 7c872c8ba2a38e236967eb4e696e9a53e1216784

// const TorusKnot = ({ position, size}) => {

//   const ref = useRef()

//   const {color, radius} = useControls({
<<<<<<< HEAD
//     color: "pink",
=======
//     color: "lightblue",
>>>>>>> 7c872c8ba2a38e236967eb4e696e9a53e1216784
//     radius: {
//       min: 1,
//       max: 10,
//       step: 0.5,
//     }
//   })
//   // useFrame((state, delta) => {
//   //   ref.current.rotation.x += delta  //difference in time between the current frame and the last frame
//   //   console.log(state)
//   //   ref.current.rotation.y += delta * 2.0
//   //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
//   //   console.log(state.clock.elapsedTime)
//   // })

//   return (
//     <mesh position = {position} ref ={ref}>
//       <torusKnotGeometry args = {size} />
//       {/* <meshStandardMaterial color = {color} /> */}
//       <MeshWobbleMaterial factor={2} speed={0.8} color={color}/>
//     </mesh>
//   )
// }


const TorusKnotAvatar = ({ wobbleIntensity, thickness, color, posx, posy, posz }) => {
  const ref = useRef();
  console.log(posx);
  console.log(posy);
  // let pos = [posx, posy, 0]

   // Mapping the input values to the required ranges
   const mappedWobbleIntensity = 1 + (wobbleIntensity / 100) * 9; // Maps 0-100 to 1-10
   const mappedThickness = 0.1 + (thickness / 100) * 0.6; // Maps 0-100 to 0.1-0.7

   useFrame(() => {
    // posx+=.01*Math.random();
    // posy+=.01*Math.random();
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.position.set(posx, posy, posz);
  });

  return (
    <mesh ref={ref}>
<<<<<<< HEAD
      <torusKnotGeometry args={[1.5, mappedThickness, 2000, 20]} />
=======
      <torusKnotGeometry args={[.25, mappedThickness, 2000, 20]} />
>>>>>>> 7c872c8ba2a38e236967eb4e696e9a53e1216784
      <MeshWobbleMaterial factor={mappedWobbleIntensity} color={color} speed={2} />
    </mesh>
  );


}

const SphereAvatar = ({ wobbleIntensity, thickness, color, posx, posy, posz }) => {
  const ref = useRef();
  console.log(posx);
  console.log(posy);
  // let pos = [posx, posy, 0]

   // Mapping the input values to the required ranges
   const mappedWobbleIntensity = 1 + (wobbleIntensity / 100) * 9; // Maps 0-100 to 1-10
   const mappedThickness = 0.1 + (thickness / 100) * 0.6; // Maps 0-100 to 0.1-0.7

  //  useFrame(() => {
  //   // posx+=.01*Math.random();
  //   // posy+=.01*Math.random();
  //   // ref.current.rotation.x += 0.01;
  //   // ref.current.rotation.y += 0.01;
  //   ref.current.position.set(posx, posy, posz);
  // });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[mappedThickness, 32, 32]} />
      {/* <MeshWobbleMaterial factor={mappedWobbleIntensity} color={color} speed={2} /> */}
    </mesh>
  );


}

const Scene = ({avatars, section}) => {

  console.log(avatars);

  
  if(avatars.length > 1) {
    for(var i=0; i<avatars.length; i++) {
      console.log(section);
      console.log(avatars[i].section);
      console.log((avatars[i].section) == 1);
      console.log((avatars[i].section) == 2);
      console.log((avatars[i].section) == 3);
      console.log((avatars[i].section) == section);
    };
    
  };

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

  // useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")




  return (
    <>
      <directionalLight position={[0, 0, 2]} intensity ={lightIntensity} ref={directionalLightRef} color = {lightColor}/>
      <ambientLight intensity={0.4} />

      {avatars.map((avatar, index) => (
                <mesh
                key={index}
                >
                  {avatar.section == 1 && section == 1 ? <TorusKnotAvatar wobbleIntensity={avatar.wobbleIntensity} thickness={avatar.thickness} color={avatar.color} posx={avatar.posx}  posy={avatar.posy} posz={avatar.posz} /> : null }
                  {avatar.section == 2 && section == 2 ? <TorusKnotAvatar wobbleIntensity={avatar.wobbleIntensity} thickness={avatar.thickness} color={avatar.color} posx={avatar.posx}  posy={avatar.posy} posz={avatar.posz} /> : null }
                  {avatar.section == 3 && section == 3 ? <TorusKnotAvatar wobbleIntensity={avatar.wobbleIntensity} thickness={avatar.thickness} color={avatar.color} posx={avatar.posx}  posy={avatar.posy} posz={avatar.posz} /> : null }

                  {/* <TorusKnotAvatar wobbleIntensity={avatar.wobbleIntensity} thickness={avatar.thickness} color={avatar.color} posx={avatar.posx}  posy={avatar.posy} posz={avatar.posz}/> */}
                </mesh>
            ))}

<<<<<<< HEAD
      <Sphere position={[0,1.5,0.8]} size = {[1, 30, 30]} color = {"lightblue"} />
      <Torus position={[0,3,0]} size = {[0.8, 0.1, 3000, 30]} color = {"blue"}/>
      {/* <TorusKnot position={[-2,0,0]} size = {[1, 0.7, 1000, 50]} color = {"hotpink"}/>  */}

      <TorusKnotAvatar wobbleIntensity={wobbleIntensity} thickness={thickness} color={color} />

      <OrbitControls enableZoom = {false} />
=======
      <OrbitControls enableZoom = {true} autoRotate={true} autoRotateSpeed={1}/>
>>>>>>> 7c872c8ba2a38e236967eb4e696e9a53e1216784
      </>
  )
}



const App = ()  => {

    // just a default state for the TorusKnotAvatar controls
    const [wobbleIntensity, setWobbleIntensity] = useState(50);
    const [thickness, setThickness] = useState(50);
    const [color, setColor] = useState("#ff00ff");
    const [section, setSection] = useState(1);
    const [avatars, setAvatars] = useState([]);

    const sliderStyle = {
    width: '200px', 
    margin: '10px 0', //vertical spacing
  };


  // const generateAvatar = useCallback((e, index) => {
  //   console.log(avatars);
  //   setAvatars([...avatars, {wobble: wobbleIntensity, thick: thickness, col: color}])
  //   console.log(wobbleIntensity);
  // }, [avatars])

  // return (
  //   <Canvas>
  //     <Scene />
  //   </Canvas>
  // )

  return (
  <div style={{ width: "100vw", height: "100vh" }}>
    <div>
    <label>Section {section}</label>
      <input
        type="range"
        min="1"
        max="3"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        style={sliderStyle}
      />
      
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

      <button onClick={() => {
        setAvatars([
          ...avatars,
          {section: section, wobbleIntensity: wobbleIntensity, thickness: thickness, color: color, posx: (Math.random()-.5)*10, posy:(Math.random()-.5)*10, posz: (Math.random()-.5)*10}
        ]);
        // console.log(wobbleIntensity);
      }}> generate</button>

      </div>
      
      <div style ={{display: "flex"}}>
        <Canvas style={{ background: "black", width: "33.3vw", height: "100vh"}} camera={{ position: [-5, 12, 13], fov: 50}}>
          <Scene avatars={avatars} section={1}/>
        </Canvas>
        <Canvas style={{ background: "black", width: "33.3vw", height: "100vh" }} camera={{ position: [-5, 12, 13], fov: 50}}>
        <Scene avatars={avatars} section={2}/>
        </Canvas>
        <Canvas style={{ background: "black", width: "33.3vw", height: "100vh" }} camera={{ position: [-5, 12, 13], fov: 50}}>
        <Scene avatars={avatars} section={3}/>
        </Canvas>
      </div>

    </div>
  );

}

export default App;
