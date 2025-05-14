
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    onAddToCart();
    toast({
      title: "Added to cart",
      description: "Your item has been added to your cart.",
    });
  };
  
  return (
    <Button 
      className="w-full md:w-auto px-8 py-6 bg-beauty-600 hover:bg-beauty-700 text-white"
      onClick={handleAddToCart}
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
