import React, { useEffect } from 'react'
import Card from './Card'
import list from "../../public/list.json"
import { Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import axios from "axios"
import { useState } from 'react'
import { server } from '../config'
const Course = () => {
  const [book,setBook]=useState([]);
  useEffect(() => {
    const getBook=async()=>{
      try {
    const res = await axios.get(`${server}/book/`)
    console.log(res.data);
    setBook(res.data)
      } 
      catch (error) {
      console.log(error)
      }
    };
    getBook();

  }, [])
  
  
  return (
    <>
  
    <div className="container mx-auto px-4 md:px-20 mt-28">
    <div className="text-center justify-center space-y-8 items-center">
      <h1 className="text-2xl font-semibold md:text-4xl">
        We're delighted to have you <span className='font-bold text-pink-500'>Here!!</span> 
      </h1>
      <p className="text-sm md:text-base md:leading-loose font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis,
        nam doloribus nemo quia quae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque nobis, nam doloribus nemo quia quae. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Neque nobis, nam
        doloribus nemo quia quae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque nobis, nam doloribus nemo quia quae.
      </p>
     <Link to="/">
      <button  className="btn btn-active btn-secondary px-6 mt-7 text-base">Back</button>
      </Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-14 container md:ml-0 ml-14 '>
      {
         book.map((item)=>(
          <Card  item={item} key={item.id}/>
         )) 
      }
    </div>
  </div>
  </>
  )
}

export default Course
