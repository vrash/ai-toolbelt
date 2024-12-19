// src/components/TokenCounter/index.jsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hash, ArrowRight } from 'lucide-react';
import { estimateTokens } from '../../utils/tokenizer';
import { MODEL_PRICING } from '../../utils/modelPricing';
import PricingCard from './PricingCard';

const TokenCounter = () => {
  const [text, setText] = useState('');
  const [tokenCount, setTokenCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const tokens = estimateTokens(text);
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;

    setTokenCount(tokens);
    setCharacterCount(chars);
    setWordCount(words);
  }, [text]);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Token Counter & Cost Estimator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <textarea
              className="w-full h-32 p-2 border rounded"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-2 bg-gray-50 rounded">
              <div className="text-sm text-gray-600">Characters</div>
              <div className="text-xl font-bold">{characterCount}</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="text-sm text-gray-600">Words</div>
              <div className="text-xl font-bold">{wordCount}</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="text-sm text-gray-600">Tokens</div>
              <div className="text-xl font-bold">{tokenCount}</div>
            </div>
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-sm">Estimated Costs</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.values(MODEL_PRICING).map((model) => (
                <PricingCard 
                  key={model.name} 
                  model={model} 
                  tokens={tokenCount} 
                />
              ))}
            </CardContent>
          </Card>

          <div className="text-xs text-gray-500">
            Note: Token counts are estimates. For production use, implement a proper tokenizer like tiktoken.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenCounter;