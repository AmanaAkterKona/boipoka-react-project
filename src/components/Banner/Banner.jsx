import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[554px] w-[1170px] rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
     
      <button className="btn bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;