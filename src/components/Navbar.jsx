/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Navbar = () => {
  const { logOut, user } = UseAuth();
  return (
    <div className="navbar bg-base-100 shadow-sm lg:py-6 px-[16px] md:px-[40px] lg:px-[90px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                    : "text-black hover:text-emerald-500 duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-medium">
              <NavLink
                to="/allTouristsSpot"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                    : "text-black hover:text-emerald-500 duration-200"
                }
              >
                All Tourists Spot
              </NavLink>
            </li>
            <li className="font-medium">
              <NavLink
                to="/addTouristsSpot"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                    : "text-black hover:text-emerald-500 duration-200"
                }
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li className="font-medium">
              <NavLink
                to="/myList"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                    : "text-black hover:text-emerald-500 duration-200"
                }
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl md:text-2xl font-semibold cursor-pointer text-emerald-500 hover:text-black duration-200"
        >
          TouristTrove
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                : "text-black hover:text-emerald-500 duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allTouristsSpot"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                : "text-black hover:text-emerald-500 duration-200"
            }
          >
            All Tourists Spots
          </NavLink>
          <NavLink
            to="/addTouristsSpot"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                : "text-black hover:text-emerald-500 duration-200"
            }
          >
            Add Tourists Spot
          </NavLink>
          <NavLink
            to="/myList"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-medium border-b-2 border-emerald-500"
                : "text-black hover:text-emerald-500 duration-200"
            }
          >
            My List
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4 ">
        {user ? (
          <div className="dropdown dropdown-end ml-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost flex items-center btn-circle avatar"
            >
              <div className="w-10 md:w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between font-medium">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="font-medium">Maria Grande</a>
              </li>
              <li>
                <button className="font-medium" onClick={logOut}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/signUp"
              className="rounded px-4 md:px-6 py-1.5 md:py-2.5 overflow-hidden group bg-emerald-500 relative hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 text-white transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-medium lg:text-[16px]">
                Sign Up
              </span>
            </Link>
            <Link
              to="/signIn"
              className="rounded px-4 md:px-6 py-1.5 md:py-2.5 overflow-hidden group bg-emerald-500 relative hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 text-white transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-medium lg:text-[16px]">
                Sign In
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
