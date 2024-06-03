import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);

  // 1) Sadece pozisyon değerlerinden oluşan bir dizi tanımla
  const arr = jobs.map((job) => job[name]);
  // 2) Dizide tekrar eden elemanları kaldırır
  const filtredSet = new Set(arr);
  // 3) set'in dönderdiği nesneyi diziye çevir
  const options = Array.from(filtredSet);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={name} required />

      <datalist id={name}>
        {options.map((i, index) => (
          <option key={index} value={i} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
