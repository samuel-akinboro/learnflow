"use client";
import React from 'react';

function AnimatedCoil({className}) {
  return (
    <svg 
      width="573" 
      height="420" 
      viewBox="0 0 573 420" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="coilPath"
        d="M43.9372 291.309C90.7704 346.309 184.18 372.341 313.97 345.376C486.835 309.461 598.234 181.485 552.324 76.3476C516.896 -4.78527 379.643 -2.42583 258.843 35.0803M43.9372 291.309C28.3939 273.056 17.981 251.611 13.0712 227.855C-3.2313 148.974 76.5213 40.5631 258.843 35.0803M43.9372 291.309C20.8449 216.693 61.1781 128.871 159.007 76.3475C188.803 60.35 223.103 46.1769 258.843 35.0803M43.9372 291.309C51.6508 316.234 66.4413 339.685 88.5297 359.855C154.035 419.671 308.954 432.186 445.897 363.13M258.843 35.0803C296.88 33.9364 339.383 37.2727 386.409 46.292"
        stroke="#353535"
        strokeWidth="20"
        fill="none"
      />
      
      {[...Array(5)].map((_, i) => (
        <g key={i}>
          <circle r={3 + i * 2} fill="url(#gradient)">
            <animateMotion
              dur={`${7 + i * 2}s`}
              repeatCount="indefinite"
              path="M43.9372 291.309C90.7704 346.309 184.18 372.341 313.97 345.376C486.835 309.461 598.234 181.485 552.324 76.3476C516.896 -4.78527 379.643 -2.42583 258.843 35.0803M43.9372 291.309C28.3939 273.056 17.981 251.611 13.0712 227.855C-3.2313 148.974 76.5213 40.5631 258.843 35.0803M43.9372 291.309C20.8449 216.693 61.1781 128.871 159.007 76.3475C188.803 60.35 223.103 46.1769 258.843 35.0803M43.9372 291.309C51.6508 316.234 66.4413 339.685 88.5297 359.855C154.035 419.671 308.954 432.186 445.897 363.13M258.843 35.0803C296.88 33.9364 339.383 37.2727 386.409 46.292"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F7CA4E">
            <animate attributeName="stop-color" 
              values="#F7CA4E; #FF6B6B; #4ECDC4; #F7CA4E" 
              dur="10s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FF6B6B">
            <animate attributeName="stop-color" 
              values="#FF6B6B; #4ECDC4; #F7CA4E; #FF6B6B" 
              dur="10s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export default AnimatedCoil;