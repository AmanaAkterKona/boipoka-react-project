import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book=>book.bookId === bookId);
  const {bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = singleBook;

//   console.log(singleBook);
//   console.log(typeof id,data);

const handleMarkAsRead= id =>{
   // store with id
   // where to store
   //array or collection
   //if book already exist the show a alart
   // if book not exist then push in the collection or array

   addToStoredDB(id)
}
    return (
         <div className="w-[1440px] h-[1030px] mx-auto flex gap-12 p-6">
   
    <div className="w-1/2 flex items-center justify-center bg-slate-400">
      <img className="w-full h-auto rounded-lg shadow-md object-contain p-25 " src={image} alt={bookName} />
    </div>

    
    <div className="w-1/2 flex flex-col p-25">
      <h2 className="font-bold text-3xl mb-2">{bookName}</h2>
      <h4 className="font-normal mb-4">By : {author}</h4>

      <div className="divider divider-start"></div>
      <h2 className="mb-4">{category}</h2>

      <div className="divider divider-start"></div>
      <h2 className="mb-4">
        <span className="font-bold text-xl">Review :</span> {review}
      </h2>

      <div className="flex items-center gap-4 mb-4">
        <span className="font-bold">Tag :</span>
        {tags.map((tag, index) => (
          <button key={index} className="btn btn-outline btn-sm">{tag}</button>
        ))}
      </div>

      <div className="divider divider-start"></div>

      <h2>
        <span className="font-semibold">Number of Pages:</span>{" "}
        <span className="text-gray-400">{totalPages}</span>
      </h2>
      <h2>
        <span className="font-semibold">Publisher:</span>{" "}
        <span className="text-gray-400">{publisher}</span>
      </h2>
      <h2>
        <span className="font-semibold">Year Of Publishing:</span>{" "}
        <span className="text-gray-400">{yearOfPublishing}</span>
      </h2>
      <h2>
        <span className="font-semibold">Rating:</span>{" "}
        <span className="text-gray-400">{rating}</span>
      </h2>

      {/* Action Buttons */}
      <div className="mt-6">
        <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
        <button className="btn btn-info m-2">Add To WishList</button>
      </div>
    </div>
  </div>
);
};

export default BookDetails;