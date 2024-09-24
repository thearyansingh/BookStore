import React from "react";
 import  book from '../../public/book.png'
const Banner = () => {
  return (
    <>
      <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row mt-12  ">
        <div className="w-full order-2 md:order-1 md:w-1/2 flex-col ">
          <div className="space-y-7">
            <h1 className="text-4xl  md:text-5xl font-bold ">
              Hello Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>{" "}
            </h1>
            <p className=" text-lg md:text-xl">
              
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis maxime nihil saepe? Iusto, eius esse? Lorem ipsum dolor
              sit amet consectetur adipsicing elit. Nesciunt unde totam nulla
              corrupti
            </p>
            <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 dark:bg-slate-900 dark:text-white">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn btn-active btn-secondary flex">Secondary</button>
 </div>

        </div>
        <div className="w-full order-1 md:w-1/2 ml-14 mt-20 mb-14 md:my-16  ">
        <img className="w-100 h-100" src={book} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
