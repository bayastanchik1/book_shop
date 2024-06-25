import axios from "axios";
import { createContext, useContext, useState } from "react";

const productContext = createContext<any | undefined>(undefined);

export const useProductContext = () => useContext(productContext);

export default function ProductContext({ children }: any) {
  const [onProduct, setOnProduct] = useState<object>({});
  const [datas, setDatas] = useState([]);

  const API = "https://65dafcdf3ea883a15290f8ff.mockapi.io/book";

  async function addProduct(newProduct: object) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API);
    setDatas(data);
  }
  async function delProduct(id: any) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getProducts(id: any) {
    const { data } = await axios(`${API}/${id}`);
    setOnProduct(data);
  }

  async function editProduct(id: number, editProduct: object) {
    await axios.put(`${API}/${id}`, editProduct);
  }

  // const [sel , setSel] = useState("")

  // function selecting() {
  //   datas.filter((el: any) => {
  //     if(el.category === sel ) {
  //       return el;

  //     }else {
  //       return el
  //     }
  //   })
  // }

  const values = {
    addProduct,
    datas,
    readProduct,
    delProduct,
    getProducts,
    onProduct,
    editProduct,
    // sel,
    // setSel,
    // selecting
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}
