import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
const handleLogout=()=>{
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("users")
        toast.success("Logout succeccfully")
        setTimeout(() => {
    window.location.reload();
        },3000);
    } catch (error) {
        toast.error("error"+error.message)
    }
}
  return (
    <div>
      <button
      onClick={handleLogout}
      className="btn bg-black text-white px-5 py-2
       rounded-3xl hover:bg-slate-600 cursor-pointer">Logout</button>
    </div>
  )
}

export default Logout
