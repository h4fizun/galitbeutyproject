
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface AddressFormProps {
  initialAddress: Address;
  onSave: (address: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ initialAddress, onSave }) => {
  const [address, setAddress] = useState<Address>(initialAddress);

  const handleInputChange = (field: keyof Address, value: string) => {
    setAddress(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(address);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            value={address.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="street">Street Address</Label>
          <Input
            id="street"
            type="text"
            value={address.street}
            onChange={(e) => handleInputChange('street', e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            type="text"
            value={address.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            type="text"
            value={address.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            type="text"
            value={address.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="flex gap-2 pt-4">
        <Button type="submit" className="bg-beauty-600 hover:bg-beauty-700">
          Save Address
        </Button>
      </div>
    </form>
  );
};

export default AddressForm;
