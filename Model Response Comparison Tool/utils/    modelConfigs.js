// src/utils/modelConfigs.js
export const MODEL_CONFIGS = {
    'gpt-3.5-turbo': {
      name: 'GPT-3.5',
      costPer1k: 0.002,
      avgSpeed: 800,
      apiConfig: {
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-3.5-turbo',
      }
    },
    'gpt-4': {
      name: 'GPT-4',
      costPer1k: 0.03,
      avgSpeed: 500,
      apiConfig: {
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-4',
      }
    },
    'claude-3-sonnet': {
      name: 'Claude 3',
      costPer1k: 0.015,
      avgSpeed: 700,
      apiConfig: {
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-3-sonnet',
      }
    }
  };
  