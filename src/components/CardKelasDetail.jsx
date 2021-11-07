/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { DetailContentImage } from '../assets';
const CardKelasDetail = ({ img, onClick, name, price, desc }) => {

  return (
    <section className="py-20 px-10">
      <div className="bg-white w-auto 2xl:w-105 h-screen 2xl:h-100 2xl:mx-36 shadow-lg border-gray-700 border-2">
        <div className="flex flex-col md:flex-row space-x-7 mx-7 p-10">
          <img
            className="w-48 h-50 rounded-md object-cover"
            src={img ? img : DetailContentImage}
            alt="food"
          />
          <div className="flex flex-col">
            <h5 className="text-black font-bold text-2xl mt-4 2xl:mt-20 2xl:ml-20"> Title {name}</h5>
            <h5 className="text-black font-semibold text-lg 2xl:ml-20"> IDR {price}</h5>
          </div>
        </div>
        <div>
          <h5 className="text-black font-semibold text-lg ml-20">Description: </h5>
          <p className="px-20">{desc} </p>
        </div>
        <div className="flex flex-col items-center md:items-start mt-44 px-20">
          <button onClick={onClick} className="bg-red-700 p-3 hover:bg-red-900 text-center text-white w-36 rounded-md font-semibold">
            <span className="">Daftar</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardKelasDetail;
