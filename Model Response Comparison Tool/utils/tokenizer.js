// src/utils/tokenizer.js
export const estimateTokens = (text) => {
    if (!text) return 0;
    const tokens = text.toLowerCase()
      .replace(/[.,!?;:()"']/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0);
    return Math.ceil(tokens.length * 1.3);
  };
  
  export const calculateCost = (tokens, costPer1k) => {
    return ((tokens * costPer1k) / 1000).toFixed(4);
  };