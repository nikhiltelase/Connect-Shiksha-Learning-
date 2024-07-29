import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { contextData } from "../context/ContextApi";
import CategoryLinks from "../components/CategoryLinks";
import RelatedItems from "../components/RelatedItems";

const Specifications = (specification) => {
  const pairs = specification.split(", ");
  const result = {};

  pairs.forEach((pair) => {
    if (pair.includes(": ")) {
      const [key, value] = pair.split(": ");
      result[key] = value;
    } else {
      const lastKey = Object.keys(result).pop();
      result[lastKey] += ", " + pair;
    }
  });

  return result;
};

function ItemView() {
  const navigate = useNavigate();
  const { items, addToCart, isItemInCart } = useContext(contextData);
  const { itemId } = useParams();
  const viewItem = items.find((item) => item.id === parseInt(itemId));
  const [mainImg, setMainImg] = useState("");
  const [imgBorderIndex, setImgBorderIndex] = useState(0);
  const imgContainerRef = useRef(null);

  useEffect(() => {
    if (viewItem) {
      setMainImg(viewItem.imgUrl[0]);
      setImgBorderIndex(0);
      if (imgContainerRef.current) {
        imgContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [itemId, viewItem]);

  if (!viewItem) {
    return <div className="text-center mt-10">Item not found</div>;
  }

  const isAddedToCart = isItemInCart(viewItem.id);
  const specifications = Specifications(viewItem.specification);

  function buyNow(item) {
    addToCart(item);
    navigate("/checkout");
  }
  function setImage(index, img) {
    setMainImg(img);
    setImgBorderIndex(index);
  }

  return (
    <>
      <div className="bg-slate-200" ref={imgContainerRef}>
        <CategoryLinks />
        <div className="flex items-center justify-center p-10 bg-white shadow-lg">
          <div className="img-container flex flex-col h-96 overflow-scroll ">
            {viewItem.imgUrl.map((img, index) => (
              <img
                src={img}
                className={`${
                  index === imgBorderIndex ? "border" : ""
                } w-20 h-20 p-1 m-2 border-black object-contain cursor-pointer`}
                key={index}
                onClick={() => setImage(index, img)}
              />
            ))}
          </div>
          <div className="w-1/2 select-none flex justify-center">
            <img
              src={mainImg}
              alt={viewItem.name}
              className=""
            />
          </div>
          <div className="w-1/2 flex flex-col p-6">
            <h1 className="text-3xl font-bold mb-4">{viewItem.name}</h1>
            <p className="text-2xl text-blue-600 mb-4">₹{viewItem.price}</p>
            <Link to={`/category/${viewItem.category}`}><p className="text-lg text-gray-600 mb-4 hover:text-blue-600">{viewItem.category}</p></Link>
            <p className="text-base mb-6">{viewItem.description}</p>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => addToCart(viewItem)}
                className={`py-3 px-6 rounded ${
                  isAddedToCart
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                {isAddedToCart ? "Add more" : "Add to Cart"}
              </button>
              <button
                onClick={() => buyNow(viewItem)}
                className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
            <div className="p-4 rounded">
              <h2 className="text-2xl font-semibold mb-4">
                Product Specifications
              </h2>
              <table className="table-auto w-full text-left">
                <tbody>
                  {Object.entries(specifications).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 font-semibold">{key}</td>
                      <td className="border px-4 py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <RelatedItems viewItem={viewItem} items={items} />
      </div>
    </>
  );
}

export default ItemView;
