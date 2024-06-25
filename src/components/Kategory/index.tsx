import React, { useEffect, useState } from "react";
import { useProductContext } from "../../contex/ProductContext";
import KategoryBlock from "../KategoryBlock";
import { IProduct } from "../../types";
import Footer from "../Footer";
import "./kategory.css";
interface Props {}

function Kategory(props: Props) {
  const { datas, readProduct, selecting, setSel } = useProductContext();
  const [sortBy, setSortBy] = useState(""); // Состояние для отслеживания текущего выбранного значения сортировки

  useEffect(() => {
    readProduct();
  }, []);

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSel(e.target.value);
    selecting();
  };

  // Функция для сортировки данных в соответствии с выбранным значением сортировки
  const sortData = (data: IProduct[]) => {
    if (sortBy === "priceLowToHigh") {
      return data.slice().sort((a: any, b: any) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      return data.slice().sort((a: any, b: any) => b.price - a.price);
    } else if (sortBy === "о любви") {
      return data.filter((el) => el.category === sortBy);
    } else if (sortBy === "сказки") {
      return data.filter((el) => el.category === sortBy);
    } else if (sortBy === "музыки") {
      return data.filter((el) => el.category === sortBy);
    } else if (sortBy === "мотивационный") {
      return data.filter((el) => el.category === sortBy);
    } else {
      return data;
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold my-11">Категории</h1>
      <div className="">
        <div className="">
          <div className="flex items-center justify-between">
            {datas.slice(0, 4).map((el: any) => (
              <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <img
                      className="w-[300px] h-[200px] object-cover contrast-50 duration-500 bg-gradient-to-bl via-orange-900 to-indigo-600  hover:contrast-100"
                      src={el.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold my-11">Возможно , Вам нравится</h1>
        <div className="relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
          {/* Select element for sorting */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
          >
            <option value="">All</option>
            <option value="priceLowToHigh">Цена: от низкой к высокой</option>
            <option value="priceHighToLow">Цена: от высокой к низкой</option>
            <option value="о любви">о любви</option>
            <option value="сказки">сказки</option>
            <option value="музыки">музыки</option>
            <option value="мотивационный">мотивационный</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 flex-wrap ">
        {/* Rendering sorted data */}
        {sortData(datas.slice(5)).map((el: IProduct, index: number) => (
          <KategoryBlock key={index} el={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Kategory;
