/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center my-24">
      <div className="w-full border rounded-lg lg:w-1/2 flex items-center justify-center">
        <div className="max-w-lg w-full p-5 py-8 md:py-16">
          <h1 className="text-xl md:text-4xl font-semibold mb-6 text-black text-center">
            Please sign In
          </h1>
          <form className="space-y-5">
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="mt-1 p-3 md:p-4 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                <span className="absolute right-3 md:text-xl">
                  <MdAlternateEmail />
                </span>
              </div>
            </div>
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password 6+ characters"
                  className="mt-1 p-3 md:p-4 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                <span
                  className="absolute right-3 cursor-pointer md:text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black font-semibold text-white p-3 md:p-4 rounded-md hover:bg-emerald-500 focus:outline-none transition-colors duration-300"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-7">
            <p className="text-center py-3 font-medium text-gray-700">
              Sign in with social Account
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              <div>
                <button className="text-center w-full font-medium text-white bg-gray-800 p-3 md:p-4 duration-300 rounded-md hover:bg-amber-500">
                  Google
                </button>
              </div>
              <div>
                <button className="text-center w-full font-medium text-white bg-gray-800 p-3 md:p-4 duration-300 rounded-md hover:bg-sky-500">
                  Github
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 text-gray-800 text-center">
            <p className="font-medium text-gray-700">
              Don't have an account?
              <Link
                to="/signUp"
                className="text-[#10b981] font-semibold hover:underline ml-2"
              >
                Create One
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
