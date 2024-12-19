// src/components/ModelComparison/index.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { MODEL_CONFIGS } from '../../utils/modelConfigs';
import { estimateTokens, calculateCost } from '../../utils/tokenizer';
import ModelCard from './ModelCard';

const ModelComparison = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  const generateResponses = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setResponses([]);

    try {
      const simulatedResponses = Object.values(MODEL_CONFIGS).map(model => {
        const tokens = Math.floor(estimateTokens(prompt));
        const responseTokens = tokens * 1.5;
        const totalTokens = tokens + responseTokens;
        
        return {
          model: model.name,
          response: `This is a simulated response from ${model.name}. 
                    In a real implementation, this would be an API call to ${model.name}.`,
          metrics: {
            responseTime: (totalTokens / model.avgSpeed * 1000).toFixed(0),
            tokens: totalTokens,
            cost: calculateCost(totalTokens, model.costPer1k)
          }
        };
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
      setResponses(simulatedResponses);
    } catch (error) {
      console.error('Error generating responses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Model Response Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Enter your prompt:</label>
            <textarea
              className="w-full h-32 p-2 border rounded"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
            />
          </div>
          
          <button
            className={`w-full p-2 rounded ${
              isLoading 
                ? 'bg-gray-400' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium`}
            onClick={generateResponses}
            disabled={isLoading || !prompt.trim()}
          >
            {isLoading ? 'Generating Responses...' : 'Compare Models'}
          </button>

          {responses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {responses.map((result, index) => (
                <ModelCard
                  key={index}
                  modelName={result.model}
                  response={result.response}
                  metrics={result.metrics}
                />
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <AlertCircle className="w-4 h-4" />
            <span>This is a simulation. In a real implementation, you would need to integrate with actual AI model APIs.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelComparison;