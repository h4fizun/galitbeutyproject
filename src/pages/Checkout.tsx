
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import PaymentMethodSelector from '@/components/PaymentMethodSelector';
import CheckoutSummary from '@/components/CheckoutSummary';
import AddressForm from '@/components/AddressForm';
import { featuredProduct } from '@/data/mock-data';

const Checkout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    name: 'Jane Doe',
    street: '123 Beauty Street',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001'
  });
  
  // Mock checkout items - in a real app this would come from the cart
  const checkoutItems = [{
    id: featuredProduct.id,
    name: featuredProduct.name,
    price: featuredProduct.price,
    quantity: 1,
    image: featuredProduct.images[0]
  }];
  
  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleAddressChange = (newAddress: typeof shippingAddress) => {
    setShippingAddress(newAddress);
    setIsEditingAddress(false);
  };
  
  const handleCheckout = async () => {
    if (!selectedPaymentMethod) {
      toast({
        title: "Payment method required",
        description: "Please select a payment method to continue",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Order placed successfully!",
        description: `Your order has been placed using ${selectedPaymentMethod}`,
      });
      
      navigate('/order-success');
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information Section */}
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Shipping Information</h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                >
                  {isEditingAddress ? 'Cancel' : 'Change'}
                </Button>
              </div>
              
              {isEditingAddress ? (
                <AddressForm 
                  initialAddress={shippingAddress}
                  onSave={handleAddressChange}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-800 font-medium">{shippingAddress.name}</p>
                    <p className="text-gray-600">{shippingAddress.street}</p>
                    <p className="text-gray-600">
                      {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Payment Method Section */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Payment Method</h2>
              <PaymentMethodSelector 
                selectedMethod={selectedPaymentMethod}
                onMethodChange={handlePaymentMethodChange}
              />
            </div>
          </div>
          
          <div>
            <CheckoutSummary 
              items={checkoutItems}
              onCheckout={handleCheckout}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4">
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

export default Checkout;
