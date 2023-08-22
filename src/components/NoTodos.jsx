import React from 'react'

export default function NoTodos() {
  return (
    <div className="flex flex-col items-center justify-center text-xl font-medium p-4">
    <svg
      className="justify-center"
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 150 150"
    >
      <rect
        x="15"
        y="10"
        width="120"
        height="130"
        rx="10"
        ry="10"
        fill="#F6F6F6"
      />
      <line
        x1="40"
        y1="35"
        x2="110"
        y2="35"
        stroke="#444"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="60"
        x2="110"
        y2="60"
        stroke="#444"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="85"
        x2="110"
        y2="85"
        stroke="#444"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="110"
        x2="110"
        y2="110"
        stroke="#444"
        strokeWidth="2"
      />
      <circle cx="25" cy="32.5" r="2.5" fill="#444" />
      <circle cx="25" cy="57.5" r="2.5" fill="#444" />
      <circle cx="25" cy="82.5" r="2.5" fill="#444" />
      <circle cx="25" cy="107.5" r="2.5" fill="#444" />
      <line
        x1="15"
        y1="10"
        x2="15"
        y2="140"
        stroke="#444"
        strokeWidth="2"
      />
      <line
        x1="135"
        y1="10"
        x2="135"
        y2="140"
        stroke="#444"
        strokeWidth="2"
      />
    </svg>
    <p>Please add some tasks!</p>
  </div>
  )
}
