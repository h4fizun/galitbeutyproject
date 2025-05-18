
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Building, Wallet } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ 
  selectedMethod, 
  onMethodChange 
}) => {
  const handleChange = (value: string) => {
    onMethodChange(value);
  };
  
  return (
    <RadioGroup value={selectedMethod} onValueChange={handleChange} className="space-y-4">
      <div className="flex items-start space-x-3 border rounded-md p-4 hover:bg-gray-50 transition-colors">
        <RadioGroupItem value="credit-card" id="credit-card" className="mt-1" />
        <div className="flex-grow">
          <div className="flex items-center">
            <Label htmlFor="credit-card" className="text-base font-medium flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-beauty-600" />
              Credit Card
            </Label>
          </div>
          <p className="text-sm text-gray-500 mt-1">Pay securely with your credit card</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3 border rounded-md p-4 hover:bg-gray-50 transition-colors">
        <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
        <div className="flex-grow">
          <div className="flex items-center">
            <Label htmlFor="bank-transfer" className="text-base font-medium flex items-center">
              <Building className="mr-2 h-5 w-5 text-beauty-600" /> 
              Bank Transfer
            </Label>
          </div>
          <p className="text-sm text-gray-500 mt-1">Transfer directly from your bank account</p>
          <div className="mt-2 text-sm">
            <p>Bank Account: 1234-5678-9012-3456</p>
            <p>Account Name: BeautyMoment Inc.</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-start space-x-3 border rounded-md p-4 hover:bg-gray-50 transition-colors">
        <RadioGroupItem value="e-wallet" id="e-wallet" className="mt-1" />
        <div className="flex-grow">
          <div className="flex items-center">
            <Label htmlFor="e-wallet" className="text-base font-medium flex items-center">
              <Wallet className="mr-2 h-5 w-5 text-beauty-600" />
              E-Wallet
            </Label>
          </div>
          <p className="text-sm text-gray-500 mt-1">Pay using your favorite e-wallet service</p>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="border rounded p-2 text-center">
              <div className="font-medium text-sm">PayLite</div>
            </div>
            <div className="border rounded p-2 text-center">
              <div className="font-medium text-sm">QuickPay</div>
            </div>
            <div className="border rounded p-2 text-center">
              <div className="font-medium text-sm">WalletPro</div>
            </div>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
};

export default PaymentMethodSelector;
