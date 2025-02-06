import React, { useState } from 'react';

const Superelevation = () => {
  const [radius, setRadius] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [superelevation, setSuperelevation] = useState(0);
  const [friction, setfriction] = useState(0);

  const calculateSuperelevation = () => {
    const g = 9.81; // Gravitational constant in m/s^2
    if (radius > 0 && speed > 0) {
      const e = ((0.75*speed) ** 2) / (g * radius);
      if(e<=0.07){
        setSuperelevation(e*100);
      }
      else{
        setSuperelevation(7);
        setfriction(((speed**2)/(g*radius))-0.07)
      }
    } else {
      setSuperelevation("Invalid inputs");
    }
  };

  return (
    <div className="flex flex-col item-center justify-center container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Superelevation Calculation</h1>
      <div className="mb-4">
        <label className="block mb-2">Curve Radius (m):</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Design Speed (m/s):</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={calculateSuperelevation}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Calculate Superelevation
      </button>
      <div className="mt-4">
        <h2 className="font-semibold">Operating Speed: {`${0.75*speed}`}</h2>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Superelevation Value: {superelevation}</h2>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Friction Coef: {friction}</h2>
      </div>

    </div>
  );
};

export default Superelevation;
