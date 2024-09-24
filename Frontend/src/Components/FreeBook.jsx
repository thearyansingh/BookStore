import React, { useState, useEffect } from 'react';
import list from "../../public/list.json" // Adjust the path if you move the file to src
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
import { server } from '../config';
const FreeBook = () => {
    const [filter,setFilter]=useState([]);
useEffect(() => {

const filterBook=async()=>{
  try {
    const res=await axios.get(`${server}/book/`)
    const Data =res.data.filter((data) => data.category === "Free"); // Corrected typo

console.log(res.data);
setFilter(Data);
  } catch (error) {
    console.log(error);
  }


}
filterBook();
}, [])



    // console.log(Data);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  
    return (
      <>
        <div className='navbar max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col items-start'>
           <div className='flex-col items-start'>
           <h1 className='font-semibold text-4xl '>Free offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt quas sapiente nemo accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt quas sapiente nemo accusantium</p>
           </div> 
          </div>
<div className=' max-w-screen-2xl container md:mx-auto  my-7  md:px-20 px-4 '>
<Slider {...settings}>
       {filter.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
</div>
        
      </>
    );
}

export default FreeBook;
