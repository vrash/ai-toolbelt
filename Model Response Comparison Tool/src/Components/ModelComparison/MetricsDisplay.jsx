// src/components/ModelComparison/MetricsDisplay.jsx
import React from 'react';
import { Clock, Hash, DollarSign } from 'lucide-react';

const MetricsDisplay = ({ metrics }) => {
  const { responseTime, tokens, cost } = metrics;

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>{responseTime}ms</span>
      </div>
      <div className="flex items-center gap-2">
        <Hash className="w-4 h-4" />
        <span>{tokens} tokens</span>
      </div>
      <div className="flex items-center gap-2">
        <DollarSign className="w-4 h-4" />
        <span>${cost}</span>
      </div>
    </div>
  );
};

export default MetricsDisplay;