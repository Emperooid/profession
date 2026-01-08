"use client";
import { useEffect, useState } from "react";

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {

    const generatedFireflies = [...Array(50)].map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 3,
    }));
    setFireflies(generatedFireflies);
  }, []);

  
  if (fireflies.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full w-0.5 h-0.5 bg-white"
          style={{
            top: `${firefly.top}%`,
            left: `${firefly.left}%`,
            animation: `move ${firefly.animationDuration}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default FireFliesBackground;