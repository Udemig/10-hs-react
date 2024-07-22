import React from "react";

// Artık bir bileşen prop geliyorsa mutlaka o bileşen gelen propların tipini tanımlamak zorundayız
type PropsType = {
  count: number;
};

// Prop Tipi Tanımlama 1.Yol
const Display1: React.FC<PropsType> = ({ count }) => {
  return <span>{count}</span>;
};

// Prop Tipi Tanımlama 2.Yol
const Display2 = ({ count }: PropsType) => {
  return <span>{count}</span>;
};

console.log(Display2);
export default Display1;
