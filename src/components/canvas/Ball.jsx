import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  useTexture,
} from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh
      scale={2.75}
      rotation={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 10]} />

      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        map={decal}
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas>
      <Suspense >
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
