import { useParams } from "react-router-dom";
import { useProductContext } from "../../contex/ProductContext";
import { useEffect } from "react";

function Search() {
  const { datas , readProduct } = useProductContext();
  const { name } = useParams();
  console.log(name);
  const ress = datas.filter((el: any) => el.name === name);
  console.log(ress);

  return (
    <div className="flex items-center justify-center flex-wrap my-11">
      {ress.map((el:any) => (
        <div className="w-[380px] h-[600px] bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div className="w-[350px] h-[500px] bg-sky-300 rounded-2xl">
            <img className="w-[350px] h-[440px] rounded-lg object-cover" src={el.url} alt="img" />
          </div>
          <div className="">
            <p className="font-extrabold">{el.name}</p>
            <p className="">{el.description}</p>
            <p className="">{el.price}</p>
          </div>
          <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </div>
      ))}
    </div>
  );
}

export default Search;
