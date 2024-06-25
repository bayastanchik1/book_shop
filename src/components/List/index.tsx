import { useParams } from "react-router-dom";
import { useProductContext } from "../../contex/ProductContext";
import { useEffect, useState } from "react";
import KategoryBlock from "../KategoryBlock";

function List() {
  const { datas, readProduct } = useProductContext();
  const { id } = useParams();
  const res = datas.filter((el: any) => el.id === id);
  console.log(res, "awef");

  return (
    <div className="container">
      {res.map((el: any) => (
        <div className="flex items-center gap-20 my-11">
          <div className="">
            <img
              className="w-[400px] h-[599px] object-cover rounded-lg"
              src={el.url}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-5xl text-[#010049]">
              <span className="font-[300] text-xl">Name : </span>
              {el.name.toUpperCase()}
            </h2>
            <h2 className="text-3xl font-bold my-5 text-[#010049]">
              <span className="text-xl font-[300]"> Price : </span>
              {el.price}
              <sup className="font-[400]">$</sup>{" "}
            </h2>
            <p className="text-lg">
              {" "}
              <span className="font-[300]">Description : </span>
              {el.description}
            </p>
          </div>
        </div>
      ))}

      <div className="container flex items-center justify-center overflow-scroll h-[600px]">
        {datas.slice(4).map((el: any) => (
          <KategoryBlock el={el} />
        ))}
      </div>
    </div>
  );
}

export default List;
