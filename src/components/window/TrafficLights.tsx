import { useState } from "react";

export interface TrafficLightsProps {
  classname?: string;
  closeFunc: () => void;
}

export const TrafficLights = ({ classname, closeFunc }: TrafficLightsProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`flex gap-2 ${classname ? classname : ""}`}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <button
        className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FF453A]"
        onClick={closeFunc}
      >
        {isHovering && (
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.9325 6.92494C7.25769 6.59974 7.25769 6.05043 6.94568 5.73402L5.20984 3.99379L6.94568 2.26234C7.25769 1.94593 7.25769 1.39222 6.9325 1.06703C6.60291 0.737438 6.05359 0.741833 5.73718 1.05384L4.00134 2.78529L2.26111 1.04945C1.96228 0.750622 1.39099 0.733044 1.0658 1.06263C0.740601 1.38783 0.753784 1.95912 1.05261 2.25795L2.79285 3.99379L1.05261 5.73841C0.753784 6.03724 0.740601 6.60414 1.0658 6.92933C1.39099 7.25892 1.96228 7.24574 2.26111 6.94252L4.00134 5.20228L5.73718 6.93812C6.05359 7.25453 6.60291 7.25453 6.9325 6.92494Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        )}
      </button>
      <button className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FEBC2E]">
        {isHovering && (
          <svg
            width="10"
            height="3"
            viewBox="0 0 10 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.62598 2.38281C1.47624 2.38281 1.33464 2.34212 1.20117 2.26074C1.06771 2.17611 0.957031 2.06543 0.869141 1.92871C0.784505 1.79199 0.742188 1.64225 0.742188 1.47949C0.742188 1.31673 0.784505 1.16699 0.869141 1.03027C0.957031 0.893555 1.06771 0.784505 1.20117 0.703125C1.33464 0.621745 1.47624 0.581055 1.62598 0.581055H8.37402C8.53353 0.581055 8.68001 0.621745 8.81348 0.703125C8.94694 0.784505 9.05436 0.893555 9.13574 1.03027C9.21712 1.16699 9.25781 1.31673 9.25781 1.47949C9.25781 1.64225 9.21712 1.79199 9.13574 1.92871C9.05436 2.06543 8.94694 2.17611 8.81348 2.26074C8.68001 2.34212 8.53353 2.38281 8.37402 2.38281H1.62598Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        )}
      </button>
      <button className="flex h-3 w-3 items-center justify-center rounded-full bg-[#28C840]">
        {isHovering && (
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 2.62137C6.00007 2.17585 5.4614 1.95272 5.14641 2.26778L2.26833 5.14649C1.95342 5.46146 2.17646 5.99993 2.62185 6L4.99965 6.00035C5.55193 6.00035 5.99965 5.55264 5.99965 5.00035L6 2.62137ZM0.999646 0.000354174C0.447361 0.000354174 -0.000354184 0.448069 -0.000354184 1.00035L1.17211e-07 3.37834C6.6473e-05 3.8237 0.538488 4.04675 0.853476 3.7319L3.733 0.853631C4.04811 0.538654 3.82499 -6.63004e-05 3.37945 6.12025e-09L0.999646 0.000354174Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
