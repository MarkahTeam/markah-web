/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentImage } from '../assets';
const CardKelas = ({ to, name, desc, img, onClick }) => {
  return (
    <div className="space-y-2 shadow-xl rounded-md bg-white w-82 h-56 flex flex-col justify-center items-center py-5">
      <h4 className="text-center flex-1 font-bold w-40 flex justify-center text-lg leading-tight">
        {name}
      </h4>
      <div className="flex flex-row space-x-7 mx-7">
        <img
          className="w-28 h-28 rounded-md object-cover"
          src={img ? img : ContentImage}
          alt="food"
        />
        <div className="flex flex-col">
          <h5 className="text-yellow-900 text-sm text-justify font-normal"> {desc}</h5>
          <Link to={to} onClick={onClick} className="bg-red-700 hover:bg-red-900 text-white text-center mt-3 rounded-md font-semibold">
            see detail
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CardKelas;
