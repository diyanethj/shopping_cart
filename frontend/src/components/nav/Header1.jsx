import React, { useEffect, useState } from "react";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAppStore } from "../../../store/appStore";
import API from "../../../utils/axios";

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
      <div className="">
        <h2>
         
        Free Shipping Over 50+ Regions ✔🎯 & Free Returns
        </h2>
      </div>
      <div className="hidden sm:block">
        
        <h2>
         
        Hotline: <a className="text-white" href="tel: +(94)11 2735678">+(94) 11 4457880</a>
       </h2>
        
        
      </div>
      
    </header>

    
    
  );
};

export default Header;
