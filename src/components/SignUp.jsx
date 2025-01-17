import NavBar from './NavBar';

import google from '../assets/google.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Passsword must be at least 8 characters.';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Password confirmation required.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Password does not match.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success('Login Successful!');
    } else {
      toast.error('Login Failed!');
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-white  p-4 min-h-full md:min-h-screen  w-screen lg:w-4/5 xl:w-1/2">
      <NavBar />
      <div className="p-10">
        <h1 className="text-2xl font-semibold mb-6  ">Create account</h1>
        {/* Google button */}
        <div className="flex border-2 rounded-lg p-2 items-center justify-center gap-2">
          <img src={google} alt="" className="w-6" />
          <p className="text-center">Sign up with Google</p>
        </div>
        {/* or */}
        <div className="flex items-center justify-center mt-4 gap-1">
          <hr className="w-2/5 border-neutral-400" />
          <p className="text-neutral-600">OR</p>{' '}
          <hr className="w-2/5 border-neutral-400" />
        </div>
        {/* form */}
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="block mb-1">
              Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={changeHandler}
              placeholder="Enter your name"
              className={` rounded-lg p-2 w-full border-2 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block mb-1">
              Email*
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={changeHandler}
              className={` rounded-lg p-2 w-full border-2 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block mb-1">
              Password*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              onChange={changeHandler}
              className={` rounded-lg p-2 w-full border-2 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <p className="text-neutral-600">Must be at least 8 characters</p>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm password*
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              onChange={changeHandler}
              className={` rounded-lg p-2 w-full border-2 ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            className="bg-black hover:bg-neutral-800 text-white py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline mt-2"
            type="submit"
          >
            Create account
          </button>
          <ToastContainer />
        </form>
        <div className="flex gap-1 mt-5 items-center justify-center text-sm lg:text-md">
          <p>Already have an account?</p>{' '}
          <Link to="/signin" className=" underline ">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
