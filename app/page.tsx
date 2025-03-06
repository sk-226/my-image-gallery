"use client";

import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

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
  default: 4, // デスクトップでは4列
  1400: 3,    // 大きめの画面では3列
  1000: 2,    // タブレットでは2列
  700: 1      // モバイルでは1列
};

const HomePage = () => {
  const [imageData, setImageData] = useState<Array<{src: string; alt: string; width?: number; height?: number}>>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    // 画像のメタデータを取得して正確な寸法を保存
    const loadImageDimensions = async () => {
      // Make sure we're in browser environment
      if (typeof window === 'undefined') {
        return;
      }
      
      const loadPromises = images.map(image => {
        return new Promise<{src: string; alt: string; width: number; height: number}>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            resolve({
              src: image.src,
              alt: image.alt,
              width: img.width,
              height: img.height
            });
          };
          img.src = image.src;
        });
      });
      
      const loadedImages = await Promise.all(loadPromises);
      setImageData(loadedImages);
      setImagesLoaded(true);
    };
    
    loadImageDimensions();
  }, []);
  
  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">My Image Gallery</h1>
      
      {imagesLoaded ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {imageData.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </Masonry>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p>Loading gallery...</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
