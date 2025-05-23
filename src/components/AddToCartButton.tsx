
import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    onAddToCart();
    toast({
      title: "Added to cart",
      description: "Your item has been added to your cart.",
    });
    
    // In a real app, you might not navigate immediately, but after a short delay
    // or provide a button in the toast to navigate to checkout
    setTimeout(() => {
      navigate('/checkout');
    }, 1000);
  };
  
  return (
    <Button 
      className="w-full md:w-auto px-8 py-6 bg-beauty-600 hover:bg-beauty-700 text-white"
      onClick={handleAddToCart}
    >
      <ShoppingBasket className="w-5 h-5 mr-2" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
