import React, { useState } from "react";

const ZigZag = ({ name, reps, layers }) => {
  const [pattern, setPattern] = useState("");
  const genenratePattern = (name) => {
    const base = `🌹🌼🌺Sorry ${name}🌺🌼🌹`;
    const patternArray = [];

    for (let i = 0; i < reps; i++) {
      for (let j = 0; j <= layers; j++) {
        patternArray.push(" ".repeat(j) + base + " ".repeat(j));
      }

      for (let j = layers - 1; j >= 0; j--) {
        patternArray.push(" ".repeat(j) + base + " ".repeat(j));
      }
    }

    return patternArray.join("\n");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pattern);
    alert("Copied to clipboard! Now go apologize.");
  };

  const generatePatternHandler = () => {
    setPattern(genenratePattern(name));
    console.log(pattern);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={generatePatternHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4 mb-8 border border-blue-700 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-blue-300"
      >
        Generate!
      </button>
      <textarea
        readOnly
        name="name"
        id="name"
        value={pattern}
        className="w-full max-w-md h-48 border border-gray-300 rounded-lg p-4 text-gray-700 bg-gray-50 shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder=""
      ></textarea>

      <button
        onClick={copyToClipboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4 border border-blue-700 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-blue-300"
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default ZigZag;
