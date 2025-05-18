
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutSummaryProps {
  items: CheckoutItem[];
  onCheckout: () => void;
  isLoading: boolean;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ 
  items, 
  onCheckout,
  isLoading
}) => {
  // Calculate totals
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
  
  return (
    <div className="bg-white p-6 rounded-lg border sticky top-4">
      <h2 className="text-xl font-medium mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex gap-3">
            <div className="h-16 w-16 rounded-md overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <Separator className="my-2" />
        
        <div className="flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full mt-6 bg-beauty-600 hover:bg-beauty-700"
        onClick={onCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Complete Purchase"}
      </Button>
    </div>
  );
};

export default CheckoutSummary;
