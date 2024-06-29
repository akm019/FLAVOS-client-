import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ title, types, image,cuisine }) => {
  return (

      <article className="w-[250px] transition-all duration-150 ease-in-out rounded-[10px] p-[5px] border-[4px] border-transparent cursor-pointer border-white hover:shadow-[10px_10px_0_orange,20px_20px_0_orange] hover:border-orange-500 hover:transform hover:-translate-x-[20px] hover:-translate-y-[20px] active:shadow-none active:transform active:translate-x-0 active:translate-y-0">
      <div
        className="rounded-[10px] bg-cover bg-center w-full h-[150px]"
        
      ><img src={image} alt="" /></div>
      <div className="pt-[20px] p-[10px] flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <Link to ='/cuisine'>
          <div className="rounded-full w-[50px] h-[50px] p-[9px] transition-all duration-300 ease bg-white hover:transform hover:-rotate-45 hover:bg-slate-500">
            <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
          </Link>
        </div>
        <div className="text-2xl font-semibold text-white overflow-hidden text-ellipsis whitespace-nowrap">{title}</div>
          
        <div className="flex gap-[10px]">
          {types.map((type, index) => (
            <span key={index} className="bg-[rgba(165,96,247,0.43)] text-[rgb(174,154,206)] font-bold px-[0.7em] py-[0.3em] rounded-[15px] text-[12px] tracking-[-0.6px]">{`• ${type}`}</span>
          ))}
        </div>
      </div>
    </article>
   
  );
};

export default Card;
