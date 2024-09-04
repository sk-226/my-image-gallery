"use client";


import React from 'react';
import Masonry from 'react-masonry-css'

const images = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
  { src: '/images/photo4.jpg', alt: 'Photo 4' },
  { src: '/images/photo5.jpg', alt: 'Photo 5' },
  { src: '/images/photo6.jpg', alt: 'Photo 6' },
  { src: '/images/photo7.jpg', alt: 'Photo 7' },
  // 追加の画像をここに
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">My Image Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default HomePage;
