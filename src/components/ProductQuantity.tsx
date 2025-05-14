
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductQuantityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center mt-6">
      <span className="text-gray-700 font-medium mr-4">Quantity:</span>
      <div className="flex items-center border border-gray-300 rounded-md">
        <Button 
          type="button" 
          variant="ghost" 
          className="px-3 py-1 h-10 rounded-r-none hover:bg-gray-100" 
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          -
        </Button>
        <div className="w-12 text-center py-2 border-x border-gray-300">{quantity}</div>
        <Button 
          type="button" 
          variant="ghost" 
          className="px-3 py-1 h-10 rounded-l-none hover:bg-gray-100" 
          onClick={onIncrease}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;
