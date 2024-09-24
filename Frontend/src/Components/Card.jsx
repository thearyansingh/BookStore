import React from 'react'

const Card = ({item}) => {
  return (
    <>
     <div className="card bg-base-100 w-80 shadow-xl mb-7 hover:scale-105 ease-in-out duration-200 dark:bg-slate-900 dark:text-white dark:border"> 
  <figure>
    <img
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title p-0">
     {item.name}
      <div className="badge badge-success text-white px-5 py-3 text-base">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-3">
      <div className="badge badge-outline text-base  px-4 py-3 font-bold"> $ {item.price}</div>
      <div className="badge badge-outline  text-base hover:bg-pink-500 duration-200 px-5 py-3 text-center">Buy Now</div>
    </div>
 
  </div>
</div> 
    </>
  )
}

export default Card
