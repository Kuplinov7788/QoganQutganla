import React from 'react'


function CourseCard({ image, category, title, price, author }) {

    return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 w-[520px]  shadow-lg">
      
      <div className="bg-yellow-400 rounded-xl p-3">
        <img
          src={image}
          alt={author}
          className="w-[90px] h-[90px] rounded-lg object-cover"
        />
      </div>

      <div className="flex-1">
        <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full mb-2">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-black mb-2">
          {title}
        </h3>

        <p className="text-sm">
          <span className="text-red-500 font-bold mr-2">${price}</span>
          <span className="text-gray-500">| by {author}</span>
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
