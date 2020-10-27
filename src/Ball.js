import React from "react";

export default function Ball({ num }) {
  return (
    <div key={num} className="ball">
      {num}
    </div>
  );
}
