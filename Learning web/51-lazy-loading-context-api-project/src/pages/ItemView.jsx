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

  const addButtonFunction = (item) => {
    addToCart(item);
    const itemInCart = isItemInCart(item.id);
    if (itemInCart) {
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (viewItem) {
      setMainImg(viewItem.imgUrl[0]);
      setImgBorderIndex(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="bg-slate-200 mt-16 sm:mt-20 lg:mt-14 ">
        <div className="flex flex-col lg:flex-row items-center justify-center p-1 lg:p-10 bg-white shadow-lg">
          <div className="flex flex-col lg:flex-row justify-center gap-5 sm:gap-5   ">
            <div className="w-full lg:w-1/2  select-none flex justify-center ">
              <img
                src={mainImg}
                alt={viewItem.name}
                className="object-contain h-48 lg:h-96"
              />
            </div>
            <div className="p-1 img-container flex items-center lg:flex-col lg:h-96 overflow-auto">
              {viewItem.imgUrl.map((img, index) => (
                <img
                  src={img}
                  className={`${
                    index === imgBorderIndex ? "border" : ""
                  } w-16 lg:w-20 h-16 lg:h-20 p-1 m-1 lg:m-2 border-black rounded-lg object-contain cursor-pointer`}
                  key={index}
                  onClick={() => setImage(index, img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col p-4 lg:p-6">
            <h1 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-4">
              {viewItem.name}
            </h1>
            <p className="text-lg lg:text-2xl text-blue-600 mb-1 lg:mb-4">
              ₹{viewItem.price}
            </p>
            <Link to={`/category/${viewItem.category}`}>
              <p className="text-base lg:text-lg text-gray-600 mb-1 lg:mb-4 hover:text-blue-600">
                {viewItem.category}
              </p>
            </Link>
            <p className="text-sm lg:text-base mb-4 lg:mb-6">
              {viewItem.description}
            </p>
            <div className="w-full flex gap-2 lg:gap-0  lg:space-y-0 lg:space-x-4 mb-4 lg:mb-6">
              <button
                onClick={() => addButtonFunction(viewItem)}
                className={`py-2 px-4 lg:py-3 lg:px-6 rounded ${
                  isAddedToCart
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                {isAddedToCart ? "View Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => buyNow(viewItem)}
                className="bg-green-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
            <div className="rounded">
              <h2 className="text-lg lg:text-2xl font-semibold mb-2 lg:mb-4">
                Product Specifications
              </h2>
              <table className="table-auto w-full text-left">
                <tbody>
                  {Object.entries(specifications).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="border px-2 lg:px-4 py-2 font-semibold">
                        {key}
                      </td>
                      <td className="border px-2 lg:px-4 py-2">{value}</td>
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
