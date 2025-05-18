import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const OrderSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-serif font-medium mb-3">Order Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
            You will receive a confirmation email shortly.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border mb-8">
            <h2 className="font-medium mb-2">Order #BM28467</h2>
            <p className="text-sm text-gray-600">May 18, 2025</p>
            <div className="text-sm text-gray-600 mt-4">
              <p>Estimated delivery: 2-5 business days</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate('/')} variant="outline">
              Continue Shopping
            </Button>
            <Button onClick={() => navigate('/profile')} className="bg-beauty-600 hover:bg-beauty-700">
              View My Orders
            </Button>
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

export default OrderSuccess;
