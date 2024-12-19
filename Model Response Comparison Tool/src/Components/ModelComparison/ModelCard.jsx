// src/components/ModelComparison/ModelCard.jsx
import React from 'react';
import { Card } from '@/components/ui/card';
import MetricsDisplay from './MetricsDisplay';

const ModelCard = ({ modelName, response, metrics }) => {
  return (
    <Card className="p-4">
      <h3 className="font-bold mb-2">{modelName}</h3>
      <div className="text-sm mb-4 max-h-48 overflow-y-auto">
        {response}
      </div>
      <MetricsDisplay metrics={metrics} />
    </Card>
  );
};

export default ModelCard;