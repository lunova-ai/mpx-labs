"use client";

export default function NeuralNet() {
  return (
    <svg
      className="absolute inset-0 -z-10 opacity-[0.25]"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Linien */}
      <g stroke="#3A7AFE" strokeWidth="1.2">
        <line x1="100" y1="100" x2="200" y2="150" />
        <line x1="200" y1="150" x2="350" y2="100" />
        <line x1="350" y1="100" x2="500" y2="180" />
        <line x1="200" y1="300" x2="400" y2="350" />
        <line x1="400" y1="350" x2="600" y2="250" />
      </g>

      {/* Knoten */}
      <g fill="#00E6C3">
        <circle cx="100" cy="100" r="5">
          <animate
            attributeName="r"
            values="4;6;4"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="200" cy="150" r="5">
          <animate
            attributeName="r"
            values="4;7;4"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="350" cy="100" r="5">
          <animate
            attributeName="r"
            values="4;6;4"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="500" cy="180" r="5">
          <animate
            attributeName="r"
            values="4;8;4"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
