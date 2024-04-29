/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { MdAlternateEmail } from "react-icons/md";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleLogin, githubLogin } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Sign in Successful");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email & password invalid");
      });
  };

  // google login
  const handleGoogleLogin = () => {
    console.log("hello");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  // github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center my-24 max-w-[1240px] mx-auto max-lg:px-5">
      <div className="w-full border rounded-lg lg:w-1/2 flex items-center justify-center">
        <div className="max-w-lg w-full p-5 py-8 md:py-16">
          <h1 className="text-xl md:text-4xl font-semibold mb-6 text-black text-center">
            Please Sign In
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Email
              </label>
              <div className="relative flex items-center mb-1">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email Address"
                  className="mt-1 p-3 md:p-4 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300"
                  {...register("email", { required: true })}
                />
                <span className="absolute right-3 md:text-xl">
                  <MdAlternateEmail />
                </span>
              </div>
              {errors.email && (
                <span className="text-red-500 text-[14px]">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-[16px] font-medium text-gray-700">
                Password
              </label>
              <div className="relative flex items-center mb-1">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password 6+ characters"
                  className="mt-1 p-3 md:p-4 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute right-3 cursor-pointer md:text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500 text-[14px]">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-emerald-500 font-semibold text-white p-3 md:p-4 rounded-md hover:bg-black focus:outline-none transition-colors duration-300"
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
                <button
                  onClick={() => handleGoogleLogin()}
                  className="text-center w-full font-medium text-white bg-gray-800 p-3 md:p-4 duration-300 rounded-md hover:bg-amber-500"
                >
                  Google
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleGithubLogin()}
                  className="text-center w-full font-medium text-white bg-gray-800 p-3 md:p-4 duration-300 rounded-md hover:bg-sky-500"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <p className="font-medium text-gray-800">
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
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};
export default SignIn;
