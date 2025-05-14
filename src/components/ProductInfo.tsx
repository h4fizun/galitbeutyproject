
import React, { useState } from 'react';
import { Product } from '@/data/mock-data';
import StarRating from './StarRating';
import SizeVariantSelector from './SizeVariantSelector';
import ProductQuantity from './ProductQuantity';
import AddToCartButton from './AddToCartButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.sizeVariants[1]);
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityIncrease = () => setQuantity(prev => prev + 1);
  const handleQuantityDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    console.log('Added to cart:', {
      ...product,
      selectedVariant,
      quantity
    });
  };
  
  return (
    <div className="product-info">
      <div className="badge inline-block px-3 py-1 bg-beauty-100 text-beauty-800 rounded-full text-xs font-medium mb-3">
        Bestseller
      </div>
      
      <h1 className="product-title mb-1">{product.name}</h1>
      <p className="text-gray-600 mb-3">{product.description}</p>
      
      <div className="flex items-center gap-3 mb-3">
        <StarRating rating={product.rating} />
        <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
      </div>
      
      <div className="price-container mb-6">
        <span className="text-2xl font-medium">
          {product.currency}{selectedVariant.price.toFixed(2)}
        </span>
        {product.discountPercentage ? (
          <span className="ml-2 text-sm text-red-500">
            ({product.discountPercentage}% off)
          </span>
        ) : null}
      </div>
      
      <p className="text-gray-700 mb-6">{product.fullDescription}</p>
      
      <SizeVariantSelector
        variants={product.sizeVariants}
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
        currency={product.currency}
      />
      
      <ProductQuantity
        quantity={quantity}
        onIncrease={handleQuantityIncrease}
        onDecrease={handleQuantityDecrease}
      />
      
      <div className="mt-8 flex gap-4">
        <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
      
      <div className="mt-12">
        <Tabs defaultValue="ingredients" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ingredients">Key Ingredients</TabsTrigger>
            <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredients" className="p-4 border rounded-b-md">
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {product.keyIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="how-to-use" className="p-4 border rounded-b-md">
            <ul className="list-decimal pl-5 text-gray-700 space-y-2">
              {product.howToUse.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="benefits" className="p-4 border rounded-b-md">
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductInfo;
