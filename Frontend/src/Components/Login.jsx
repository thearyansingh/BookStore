import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../config';

const Login = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();  // Define navigate

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password, // to save the input data in the variable
    };
  
    try {
      const res = await axios.post(`${server}/user/login`, userInfo);
      console.log(res.data);
  
      if (res.data) {
        toast.success('Login Success');
        localStorage.setItem("users", JSON.stringify(res.data));
setTimeout(() => {
  window.location.reload();
}, 3000);
        navigate("/");  
      }
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      toast.error("Error",error.response.data.message);

    }
  };
  

  if (!isOpen) return null;

  return (
    <div>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black opacity-40 z-40"
        onClick={onClose}  // Close modal when clicking outside
      ></div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal z-50" open={isOpen}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
              type="button"  // Prevent form submission
            >✕</button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Form Fields */}
            <div className='space-y-6'>
              <div className='flex flex-col mt-4'>
                <label>Email</label>
                <input
                  {...register("email", { required: true })}
                  className='py-1 border rounded-md outline-none'
                  type="email"
                  placeholder='Enter your Email'
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>

              <div className='flex flex-col'>
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  className='py-1 border rounded-md outline-none'
                  type="password"
                  placeholder='Enter your Password'
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>

              {/* Submit and Link to Signup */}
              <div className='flex justify-between items-center'>
                <button className="btn btn-active btn-secondary px-3 py-1" type="submit">
                  Login
                </button>
                <span className='flex gap-2'>
                  Not registered? <Link to="/Signup">SignUp</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
