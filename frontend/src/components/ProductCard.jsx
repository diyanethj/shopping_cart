import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";

const ProductCard = ({ item }) => {
  const { addCart } = useAppStore();
  const navigate = useNavigate();
  const productName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };
  return (
    <div className="flex items-center bg-white relative flex-col justify-between p-[10px] shadow-md sm:shadow-new rounded-[4px]">
      <div className="h-[150px] sm:h-[200px]">
        <img
          src={item.image}
          className="w-full h-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      <div className="py-[8px] flex flex-col gap-[4px]">
        <h2
          className="cursor-pointer"
        >
          {productName(item.title)}
        </h2>
        <h2 className="text-center">
          {"LKR  "}
          <span className="text-red-500">{Math.ceil(item.price * 81)}</span>
        </h2>
      </div>
      <div className="">
        <button
          onClick={() => addCart(item, navigate)}
          className="rounded-[4px] border-[2px] hover:bg-black hover:text-white hover:border-0 border-slate-400 px-[20px] py-[5px]"
        >
          Add To Cart
        </button>
      </div>

      
    </div>
  );
};

export default ProductCard;
