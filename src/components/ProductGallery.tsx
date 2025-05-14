
import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="product-gallery space-y-4">
      {/* Main image */}
      <div className="main-image-container w-full h-[500px] overflow-hidden rounded-lg">
        <img 
          src={images[activeImageIndex]} 
          alt="Product" 
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="thumbnails-scroll overflow-x-auto pb-2">
        <div className="flex space-x-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail-item flex-shrink-0 cursor-pointer overflow-hidden rounded-md h-20 w-20 border-2 transition-all ${
                activeImageIndex === index ? 'border-beauty-500' : 'border-transparent'
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
