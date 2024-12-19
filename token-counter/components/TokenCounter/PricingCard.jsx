// src/components/TokenCounter/PricingCard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const PricingCard = ({ model, tokens, type = 'input' }) => {
  const cost = calculateCost(tokens, model[type]);
  
  return (
    <div className="flex items-center justify-between p-2 border-b last:border-b-0">
      <span className="font-medium">{model.name}</span>
      <div className="flex items-center gap-1 text-sm">
        <DollarSign className="w-4 h-4" />
        <span>{cost}</span>
      </div>
    </div>
  );
};

export default PricingCard;