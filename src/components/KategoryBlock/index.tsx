import { MdEdit } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { useProductContext } from "../../contex/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useBasketContext } from "../../contexBasket/BasketContext";
// contrast-50 - background grey кылып турат
// contrast-50 duration-500  h-48 bg-gradient-to-bl via-orange-900 to-indigo-600  hover:contrast-100
// hover:contrast-100

function KategoryBlock({ el }: any) {
  const { addBasket } = useBasketContext();

  const { delProduct, readProduct, onProduct, getProducts } =
    useProductContext();

  console.log("product", onProduct);

  function handleBasket(el: any) {
    getProducts(el.id);
    addBasket(onProduct);
  }

  const nav = useNavigate();
  return (
    <div className="">
      <div className="">
        <div className="w-[250px] h-[490px] bg-gray-50 p-3 flex flex-col gap-1">
          <div className=" duration-500  h-48 bg-gradient-to-bl via-orange-900 to-indigo-600 ">
            <img
              onClick={() => nav(`/list/${el.id}`)}
              className="w-[230px] h-[340px] object-cover rounded-t-lg"
              src={el.url}
              alt="igm"
            />
          </div>
          <div className="flex flex-col gap-4 px-2 py-[159px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold">{el.name}</span>
                <p className="text-xs text-gray-700">{el.category}</p>
                {/* <p className="text-xs text-gray-700">{el.description}</p> */}
              </div>
              <span className="font-bold  text-red-600">${el.price}</span>
            </div>
            <div className="flex gap-10">
              <Link to={`/edit/${el.id}`}>
                <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 px-3 rounded-lg">
                  <MdEdit />
                </button>
              </Link>
              <button
                onClick={() => handleBasket(el)}
                className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 px-3 rounded-lg"
              >
                <SlBasket />
              </button>
              <button
                onClick={() => delProduct(el.id)}
                className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 px-3 rounded-lg"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KategoryBlock;
