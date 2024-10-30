import React, { useState } from "react";
import ZigZag from "./ZigZag";

function App() {
  const [name, setName] = useState("");
  const [reps, setReps] = useState(3);
  const [layers, setLayers] = useState(10);

  const nameChangeHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const repChangeHandler = (e) => {
    const value = e.target.value;
    setReps(value);
  };
  const layerChangeHandler = (e) => {
    const value = e.target.value;
    setLayers(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">
          I am sorry 😢😢
        </h1>

        <div className="space-y-12">
          <div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Write the name of your angry flower:
            </p>
            <input
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              type="text"
              value={name}
              onChange={nameChangeHandler}
              placeholder="Enter name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                Amount of Repetitions:
              </p>
              <input
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                type="number"
                value={reps}
                onChange={repChangeHandler}
              />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                Amount of Layers:
              </p>
              <input
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                type="number"
                value={layers}
                onChange={layerChangeHandler}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ZigZag name={name} reps={reps} layers={layers} />
        </div>
      </div>
    </div>
  );
}

export default App;
