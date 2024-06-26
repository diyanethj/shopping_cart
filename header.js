import React from "react";
import { NavLink, Link } from "react-router-dom";
import{BsSearch} from "react-icons/bs";

const Header = () => {
  return  (
  <>
  <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
      <div className="col-6">
        <p className="text-white mb-0">Free Shipping Over 50+ Regions ✔🎯 & Free Returns</p>
      </div>
      <div className="col-6">
        <p className="text-end text-white mb-0">
          Hotline: <a className="text-white" href="tel: +(94)11 2735678">+(94) 11 4457880</a></p>
      </div>
      </div>
      </div> 
  </header>
  <header className="header-upper py-3">
    <div className="container-xxl">
      <div className="row align-items-center">
      <div className="col-2">
        <h1>
          <Link className="text-white">GenDA</Link>
          </h1>
      </div>
      <div className="col-5">
      <div className="input-group ">
        <input 
        type="text" 
        className="form-control py-2" 
        placeholder="Search Product here" 
        aria-label="Search Product here" 
        aria-describedby="basic-addon2"
        />
        <span className="input-group-text p-3" id="basic-addon2">
          <BsSearch className="fs-6"/>
        </span>
      </div>
          
      </div>
      <div className="col-5">
        <div className="header-upper-links d-flex align-items-center justify-content-between">
          <div>
            <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
            <img src="images/compare.svg" alt="compare" />
            <p className="mb-0">
              Compare <br /> Products
              </p>
            </Link>
          </div>
          <div>
          <Link to="/my-picks" className="d-flex align-items-center gap-10 text-white">
          <img src="images/parkingspace.svg" alt="parkingspace" />
            <p className="mb-0">
              My <br /> PICKS
              </p>
            </Link>
          </div>
          <div>
          <Link to="/login" className="d-flex align-items-center gap-10 text-white">
          <img src="images/user.svg" alt="user" />
            <p className="mb-0">
              Login <br />My Account
              </p>
            </Link>
          </div>
          <div>
          <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
          <img src="images/cart.svg" alt="cart" />
            <div className="d-flex flex-column gap-10">
              <span className="badge bg-white text-dark">0</span>
              <p className="mb-0"> $ 500</p>
            </div>
            </Link>
          </div>
          </div>   
      </div>
      </div>
      </div> 
  </header>
  <header className="header-bottom py-3">
    <div className="container-xxl">
      <div className="row ">
      <div className="col-12">
      <div className="menu-bottom d-flex align-items-center gap-30">
      <div>
      <div className ="dropdown">
  <button 
    className ="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
    type="button" id="dropdownMenuButton1" 
    data-bs-toggle="dropdown" 
    aria-expanded="false">
    SHOP CATEGORIES
  </button>
  <ul className ="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="">Zara</Link></li>
    <li><Link className="dropdown-item text-white" to="">Mimosa</Link></li>
    <li><Link className= "dropdown-item text-white" to="">Gucci</Link></li>
    <li><Link className= "dropdown-item text-white" to="">Blue Spinach</Link></li>
    <li><Link className= "dropdown-item text-white" to="">Nike</Link></li>
  </ul>
</div>
      </div>
        <div className="menu-links">
          <div className="d-flex align-items-center gap-15">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/product">OurStore</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        </div>
      </div>
      
      </div>
      </div>
  </header>
  

  </>
  );    
};

export default Header;