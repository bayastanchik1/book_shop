import { useEffect, useState } from "react";
import "./edit.css";
import { useProductContext } from "../../contex/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
  const { editProduct, getProducts, onProduct } = useProductContext();
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getProducts(id);
  }, []);

  useEffect(() => {
    if (onProduct) {
      setUrl(onProduct.url);
      setCategory(onProduct.category);
      setName(onProduct.name);
      setDescription(onProduct.description);
      setPrice(onProduct.price);
    }
    ///bayastan
  }, [onProduct]);
const nav = useNavigate()
  function edit() {
    const valuesing = {
      url: url,
      category: category,
      name: name,
      description: description,
      price: price,
    };
    editProduct(id, valuesing);
    nav("/")
  }

  return (
    <div className="container">
      <div className="flex items-center justify-center gap-32">
        <input
          value={url}
          onChange={(e: any) => setUrl(e.target.value)}
          type="text"
          name="text"
          className="input input11"
          placeholder="URL"
        ></input>

        <div className="flex items-center justify-center flex-col my-32 gap-5 ">
          <input
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            type="text"
            name="text"
            className="input"
            placeholder="Product Name"
          ></input>
          <input
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
            type="text"
            name="text"
            className="input"
            placeholder="Category"
          ></input>
          <input
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
            type="text"
            name="text"
            className="input"
            placeholder="Price"
          ></input>
          <input
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            type="text"
            name="text"
            className="input"
            placeholder="Description"
          ></input>
          <button onClick={edit} className="button mt-11">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
