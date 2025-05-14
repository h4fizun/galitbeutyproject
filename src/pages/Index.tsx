
import React from 'react';
import Navbar from '@/components/Navbar';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import ReviewSection from '@/components/ReviewSection';
import RelatedProducts from '@/components/RelatedProducts';
import { featuredProduct, productReviews, relatedProducts } from '@/data/mock-data';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-2">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-sm text-gray-500">
              <span className="hover:text-beauty-700 cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-beauty-700 cursor-pointer">Skincare</span>
              <span className="mx-2">/</span>
              <span className="hover:text-beauty-700 cursor-pointer">Moisturizers</span>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{featuredProduct.name}</span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <ProductGallery images={featuredProduct.images} />
            <ProductInfo product={featuredProduct} />
          </div>
          
          <Separator className="my-16" />
          
          <ReviewSection reviews={productReviews} averageRating={featuredProduct.rating} />
          
          <Separator className="my-16" />
          
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      
      <footer className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">BeautyMoment</h4>
              <p className="text-gray-600 text-sm">Luxury skincare products made with natural ingredients that deliver real results.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-beauty-700">Skincare</a></li>
                <li><a href="#" className="hover:text-beauty-700">Makeup</a></li>
                <li><a href="#" className="hover:text-beauty-700">Body</a></li>
                <li><a href="#" className="hover:text-beauty-700">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Help</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-beauty-700">FAQs</a></li>
                <li><a href="#" className="hover:text-beauty-700">Shipping</a></li>
                <li><a href="#" className="hover:text-beauty-700">Returns</a></li>
                <li><a href="#" className="hover:text-beauty-700">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">About</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-beauty-700">Our Story</a></li>
                <li><a href="#" className="hover:text-beauty-700">Ingredients</a></li>
                <li><a href="#" className="hover:text-beauty-700">Sustainability</a></li>
                <li><a href="#" className="hover:text-beauty-700">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center text-gray-500 text-sm">
            <p>© 2025 BeautyMoment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
