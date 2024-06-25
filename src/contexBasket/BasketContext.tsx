import axios from "axios";
import { createContext, useContext, useState } from "react";

const basketContext = createContext<any | undefined>(undefined);
export const useBasketContext = () => useContext(basketContext);

export default function BasketContext({ children }: any) {
  const API = "https://65dafcdf3ea883a15290f8ff.mockapi.io/basket";

  async function addBasket(newBasket: any) {
    await axios.post(API, newBasket);
  }
  const [basketDate, setBasketDate] = useState([]);

  async function readBasket() {
    const { data } = await axios(API);
    setBasketDate(data);
  }

  async function delBasket(id: any) {
    await axios.delete(`${API}/${id}`);
    readBasket();
  }

  const [onBasket, setOnBasket] = useState<object>({});

  async function getBaskets(id: any) {
    const { data } = await axios(`${API}/${id}`);
    setOnBasket(data);
  }

  async function editBasket(id: number, editProduct: object) {
    await axios.put(`${API}/${id}`, editProduct);
  }

  const values = {
    addBasket,
    readBasket,
    basketDate,
    delBasket,
    getBaskets,
    onBasket,
    editBasket,
  };

  return (
    <basketContext.Provider value={values}>{children}</basketContext.Provider>
  );
}
