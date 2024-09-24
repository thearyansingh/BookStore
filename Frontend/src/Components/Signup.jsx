import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../config';
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit =async (data) => {
const userInfo={
  fullname:data.fullname, // to save the data from the signup form
  email:data.email,
  password:data.password,
}
try {
 const res= await axios.post(`${server}/user/signUp`,userInfo)
 console.log(res.data);
 
 if(res.data){
  // alert("signup successfull");
  toast.success('Successfully created!');

  navigate("/");
 }
 localStorage.setItem("users",JSON.stringify(res.data))
} catch (error) {
  toast.error("Error"+ error.message);
}
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Signup</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='flex flex-col mt-4'>
              <label>Fullname</label>
              <input
                {...register("fullname", { required: true })}
                className='w-80 px-1 py-1 border rounded-md outline-none'
                type="text"
                placeholder='Enter your fullname'
              />
              
            </div>
            
            <div className='flex flex-col'>
              <label>Email</label>
              <input
                {...register("email", { required: true })}
                className='w-80 px-1 py-1 border rounded-md outline-none'
                type="email"
                placeholder='Enter your email'
              />
         
            </div>
            
            <div className='flex flex-col mt-4'>
              <label>Password</label>
              <input
                {...register("password", { required: true })}
                className='w-80 px-1 py-1 border rounded-md outline-none'
                type="Password"
                placeholder='Enter your Password'
              />
             
            </div>
            
            <div className='flex justify-between items-center'>
              <button type='submit' className="btn btn-active btn-secondary px-3 py-1">
                Signup
              </button>
              <span className='flex gap-2'>
                Have an account? 
                <span className='text-blue-400 font-bold'>
                  <Link to="/" onClick={() => navigate('/?login=true')}>Login</Link>
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
