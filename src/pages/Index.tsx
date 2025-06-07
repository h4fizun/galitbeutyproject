
import React from 'react';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import RelatedProducts from '@/components/RelatedProducts';
import { featuredProduct, relatedProducts } from '@/data/mock-data';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
          
          {/* Related Products Section */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
    </div>
  );
};

export default Index;
