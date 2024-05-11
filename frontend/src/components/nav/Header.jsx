import React, { useEffect, useState } from "react";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAppStore } from "../../../store/appStore";
import API from "../../../utils/axios";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const { user, totalCart } = useAppStore();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const getCartNumber = async () => {
    try {
      const { data, status } = await API("/api/user/get-user-cart-number");
      useAppStore.setState({ totalCart: data });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (user) {
      getCartNumber();
    }
  }, [user]);

  return (
    <header className="bg-[#212429] z-10 border-b-[1px] sticky top-0 text-white backdrop-blur-lg px-5 py-4 flex items-center justify-between">
      <div className="col-5 flex items-center">
        <h2
          onClick={() => navigate("/")}
          className="font text-[26px] cursor-pointer tracking-wide sm:tracking-widest"
        >
          GenDA
        </h2>
      </div>

      <div className="col-3 flex items-center">
        <div className="input-group flex items-center">
          <input
            type="text"
            className="form-control py-1"
            placeholder="Search Product here"
            aria-label="Search Product here"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text p-1" id="basic-addon2">
            <BsSearch className="fs-6" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <img src="images/compare.svg" alt="compare" />
          <p className="mb-0 ml-1">Compare Products</p>
        </div>

        <div className="flex items-center">
          <img src="images/parkingspace.svg" alt="parkingspace" />
          <p className="mb-0 ml-1">My PICKS</p>
        </div>
      </div>

      <div className="hidden sm:block">
        <ul className="flex items-center gap-3 text-[18px] font-semibold">
          {!user && (
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <img src="images/user.svg" alt="user" />
                <p className="mb-0">Login My Account</p>
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="flex items-center gap-3 text-[16px] relative">
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
        >
          <img src="images/cart.svg" alt="cart" />
          {user && (
            <button className="absolute top-[-15px] w-6 h-6 left-4 rounded-full bg-blue-500 text-white border-[1px] text-center">
              <span className="translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
                {totalCart}
              </span>
            </button>
          )}
        </NavLink>
        {user ? (
          <HiUserCircle
            className="cursor-pointer"
            size={30}
            onClick={() => setShowMenu((pre) => !pre)}
          />
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          >
            <HiUserCircle className="cursor-pointer" size={30} />
          </NavLink>
        )}

        {showMenu && <UserMenu setShowMenu={setShowMenu} />}
      </div>
    </header>
  );
};

export default Header;
