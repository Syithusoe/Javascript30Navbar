/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Button from "./Button";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
function Navbar({ onMouseEnter, onMouseLeave, isHover }) {
  const [menu, setMenu] = useState(false);
  const [isProductSection, setIsProductSection] = useState(false);
  function handleMenuChange() {
    setMenu((menu) => !menu);
  }
  function handleProductsSection() {
    setIsProductSection((isProductSection) => !isProductSection);
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between items-center md:mx-32 mx-8 py-6">
        <div>
          <img src="src\assets\Logo.svg" alt="logo" />
        </div>
        <div className="sm:flex flex-row gap-8 hidden">
          <Link
            to=""
            className="text-slate-500"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Products
          </Link>
          <Link to="" className="text-slate-500">
            Challanges
          </Link>
          <Link to="" className="text-slate-500">
            Resources
          </Link>
          <Link to="" className="text-slate-500">
            Other Links
          </Link>
        </div>
        <div className="space-x-4">
          <IoMenu size={25} className="sm:hidden" onClick={handleMenuChange} />
          <Link to="" className="text-slate-500 hidden sm:inline-block">
            Sign in
          </Link>
          <div className="hidden sm:inline-block">
            <Button>Try For Free</Button>
          </div>
        </div>
      </div>
      {/*For Mobile View*/}
      {menu && (
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } flex flex-col transition-all duration-300 gap-8 sm:hidden justify-between items-center`}
        >
          <Link
            to=""
            className="text-slate-500"
            onClick={handleProductsSection}
          >
            Products
          </Link>
          <Link to="" className="text-slate-500">
            Challanges
          </Link>
          <Link to="" className="text-slate-500">
            Resources
          </Link>
          <Link to="" className="text-slate-500">
            Other Links
          </Link>
          <Link to="" className="text-slate-500">
            Sign in
          </Link>
          <Link to="" className="text-slate-500">
            Try For Free
          </Link>
        </div>
      )}

      {/* Hover element*/}
      {isHover && (
        <div className="bg-white pr-10 max-w-xl w-[30rem] h-[23rem] absolute px-10 py-10 flex flex-col justify-center items-center gap-5 rounded-lg left-[40rem]">
          <div>
            <p className="flex flex-row space-x-2">
              <img src="src\assets\Spense_Icon.svg" alt="" />
              <span>Spense</span>
            </p>
            <p className="px-6 ml-2 font-light text-slate-400">
              Spense is a landing page for the writers. Greate for practicing
              absolute positioning and flex layouts.
            </p>
          </div>
          <div>
            <p className="flex flex-row space-x-2">
              <img src="src/assets/Fiber_Icon.svg" alt="" />
              <span>Fiber Landing Page</span>
            </p>
            <p className="px-6 ml-2 font-light text-slate-400">
              An online portfolio generator. Great to practice flex/grid layout,
              and absolute positioning.
            </p>
          </div>
          <div>
            <p className="flex flex-row space-x-2 ">
              <img src="src\assets\Gradie_Icon.svg" alt="" />
              <span>Gradie Sign Up Page</span>
            </p>
            <p className="px-6 ml-2 font-light text-slate-400">
              Gradie is a simple sing up page, greate to practice centering
              layouts.
            </p>
          </div>
        </div>
      )}
      {menu && !isProductSection && (
        <div className="bg-white absolute top-5 flex flex-col justify-center items-center gap-8 rounded-xl w-[25rem] h-[30rem] ml-4 px-8">
          <div className="flex flex-row items-center justify-between w-[22rem] pt-2">
            <p className="uppercase font-semibold text-slate-400">Products</p>
            <div className="text-slate-400 cursor-pointer">
              <RxCross2 size={25} onClick={handleProductsSection} />
            </div>
          </div>
          <div>
            <p className="flex flex-row space-x-2">
              <img src="src\assets\Spense_Icon.svg" alt="" />
              <span className="font-semibold">Spense</span>
            </p>
            <p className="px-6 ml-2 font-light text-slate-400">
              Spense is a landing page for the writers. Greate for practicing
              absolute positioning and flex layouts.
            </p>
          </div>
          <div>
            <p className="flex flex-row space-x-2">
              <img src="src/assets/Fiber_Icon.svg" alt="" />
              <span className="font-semibold">Fiber Landing Page</span>
            </p>
            <p className="px-6 ml-2 font-light text-slate-400">
              An online portfolio generator. Great to practice flex/grid layout,
              and absolute positioning.
            </p>
          </div>
          <div>
            <p className="flex flex-row space-x-2 ">
              <img src="src\assets\Gradie_Icon.svg" alt="" />
              <span className="font-semibold">Gradie Sign Up Page</span>
            </p>
            <p className="px-6 ml-2 font-light text-slate-400">
              Gradie is a simple sing up page, greate to practice centering
              layouts.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
