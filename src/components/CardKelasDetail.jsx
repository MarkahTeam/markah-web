/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { DetailContentImage } from '../assets';
const CardKelasDetail = ({ img, onClick, name, price, desc, old_price, type }) => {

  return (
    <section className="py-20 px-10">
      <div className="bg-white w-105 h-100 mx-36 shadow-lg border-gray-700 border-2">
        <div className="flex flex-row space-x-7 mx-7 p-10">
          <img
            className="w-48 h-50 rounded-md object-cover"
            src={img ? img : DetailContentImage}
            alt="food"
          />
          <div className="flex flex-col">
            <h5 className="text-black font-bold text-2xl mt-20 ml-20"> {name}</h5>
            {type === 'premium' ?
              <div className="flex flex-row">
                <h5 className="text-black font-semibold text-lg ml-20 line-through">IDR {old_price}</h5>
                <h5 className="text-black font-semibold text-lg ml-20 ">IDR {price}</h5>
              </div> :
              <div className="flex flex-row">
                <h5 className="text-black font-semibold text-lg ml-20 line-through"> IDR {old_price}</h5>
                <h5 className="text-black font-semibold text-lg ml-20 ">FREE</h5>
              </div>
            }

          </div>
        </div>
        <div>
          <h5 className="text-black font-semibold text-lg ml-20 ">Description: </h5>
          <p className="px-20">{desc} </p>

        </div>
        <div className="flex flex-col mt-32 px-20">
          <button onClick={onClick} className="bg-red-700 p-3 hover:bg-red-900 text-center text-white w-36 rounded-md font-semibold">
            <span className="">Daftar</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardKelasDetail;
