

    
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {  PerspectiveCamera, OrbitControls, useGLTF  } from '@react-three/drei';
import gsap from 'gsap';

// Componente Cubo individual
const Cubo = ({ position }) => {
  const ref = useRef();
  const { scene } = useGLTF('/models/modulolow.gltf');
  let timeoutId = useRef(null);  // Usado para almacenar el ID del temporizador

  useEffect(() => {
    // Limpieza del temporizador si el componente se desmonta o se reinicia la animación
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const handlePointerOver = () => {
    // Cancelar cualquier temporizador pendiente para evitar que se reinicie la rotación prematuramente
    clearTimeout(timeoutId.current);
    gsap.to(ref.current.rotation, {
      y: Math.PI,
      duration: 1
    });
  };

  const handlePointerOut = () => {
    // Establecer un temporizador para retrasar la reversión de la rotación
    timeoutId.current = setTimeout(() => {
      gsap.to(ref.current.rotation, {
        y: 0,
        duration: 1
      });
    }, 2000); // 3 segundos de retraso
  };

  return (
    <primitive
      object={scene.clone()}
      position={position}
      ref={ref}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

// Componente principal que renderiza la grilla de cubos con una cámara personalizada y controles de órbita
const CuboGrid = () => {
  const gridX = 4;
  const gridY = 4;

  return (
    <div className='h-full  w-full '>
    <Canvas>
     
     <PerspectiveCamera position={[8,3 , 11]} makeDefault />
    
     


      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {
        Array.from({ length: gridY }, (_, y) => (
          Array.from({ length: gridX }, (_, x) => (
            <Cubo
              key={`${x}-${y}`}
              position={[x * 2, y * 2, 0]}
            />
          ))
        ))
      }
    </Canvas>
    </div>
  );
};

export default CuboGrid;
