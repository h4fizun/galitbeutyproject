
import React from 'react';
import { SizeVariant } from '@/data/mock-data';

interface SizeVariantSelectorProps {
  variants: SizeVariant[];
  selectedVariant: SizeVariant;
  onVariantChange: (variant: SizeVariant) => void;
  currency: string;
}

const SizeVariantSelector: React.FC<SizeVariantSelectorProps> = ({
  variants,
  selectedVariant,
  onVariantChange,
  currency
}) => {
  return (
    <div className="mt-6">
      <h3 className="font-medium text-gray-700 mb-3">Size</h3>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            className={`px-4 py-2 border rounded-md transition-all ${
              selectedVariant.id === variant.id
                ? 'border-beauty-500 bg-beauty-50 text-beauty-800'
                : 'border-gray-200 hover:border-beauty-300'
            }`}
            onClick={() => onVariantChange(variant)}
          >
            <div className="text-sm font-medium">{variant.name}</div>
            <div className="text-xs text-gray-500">{variant.size}</div>
            <div className="text-sm mt-1">{currency}{variant.price.toFixed(2)}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeVariantSelector;
