
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

const Auth = () => {
  const navigate = useNavigate();
  const { user, loading, signIn, signUp } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applyAsReseller, setApplyAsReseller] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await signIn(email, password);
    setIsSubmitting(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await signUp(email, password, firstName, lastName, applyAsReseller);
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-serif font-bold text-beauty-800">
              Welcome to Ila's Beauty
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account or create a new one
            </p>
          </div>
          
          <Tabs defaultValue="signin" className="mt-8">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="signupEmail">Email</Label>
                    <Input 
                      id="signupEmail" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signupPassword">Password</Label>
                    <Input 
                      id="signupPassword" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="reseller" 
                      checked={applyAsReseller}
                      onCheckedChange={(checked) => setApplyAsReseller(checked === true)}
                    />
                    <label
                      htmlFor="reseller"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Apply to become a reseller
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="py-4 text-center text-sm text-gray-500">
        <p>© 2025 Ila's Beauty. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Auth;
