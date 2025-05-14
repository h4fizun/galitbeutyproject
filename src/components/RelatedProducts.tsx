
import React from 'react';
import { Product } from '@/data/mock-data';
import StarRating from './StarRating';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <section className="my-16">
      <h2 className="section-title">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex items-center gap-1 mb-2">
              <StarRating rating={product.rating} />
              <span className="text-xs text-gray-500">({product.reviewCount})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">
                {product.discountPercentage ? (
                  <>
                    <span className="text-red-500">
                      {product.currency}
                      {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className="text-gray-400 text-sm line-through ml-1">
                      {product.currency}{product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span>{product.currency}{product.price.toFixed(2)}</span>
                )}
              </span>
              <button className="text-sm text-beauty-700 hover:text-beauty-900 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
