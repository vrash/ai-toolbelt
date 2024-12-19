# Model Response Comparison Tool

A React component for comparing responses from different AI models side by side. Compare output quality, response times, token usage, and costs across multiple models with a single prompt.

## Features

- Side-by-side comparison of model responses
- Real-time token estimation and cost calculation
- Response time tracking
- Clean, responsive UI with dark mode support
- Built with React and Tailwind CSS

## Installation

1. Install dependencies:
```bash
npm install @radix-ui/react-icons lucide-react
npm install @/components/ui
```

2. Copy the component files into your project:
```
src/
  components/
    ModelComparison/
      index.jsx
      ModelCard.jsx
      MetricsDisplay.jsx
  utils/
    tokenizer.js
    modelConfigs.js
```

3. Import and use the component:
```jsx
import ModelComparison from './components/ModelComparison';

function App() {
  return (
    <div className="p-4">
      <ModelComparison />
    </div>
  );
}
```

## Usage

The component provides a simple interface:
1. Enter your prompt in the textarea
2. Click "Compare Models" to generate responses
3. View side-by-side comparisons with metrics

## Customization

### Adding New Models

Add new models to `modelConfigs.js`:
```javascript
export const MODEL_CONFIGS = {
  'your-model-name': {
    name: 'Display Name',
    costPer1k: 0.000, // Cost per 1K tokens
    avgSpeed: 800, // Tokens per second
    apiConfig: {
      endpoint: 'https://api.example.com',
      model: 'model-name',
    }
  }
};
```

### Implementing Real API Calls

Replace the simulation in `generateResponses` with real API calls:
```javascript
const response = await fetch(modelConfig.apiConfig.endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
  },
  body: JSON.stringify({
    model: modelConfig.apiConfig.model,
    messages: [{ role: 'user', content: prompt }]
  })
});
```

## Planned Improvements

1. **API Integration**
   - OpenAI GPT models
   - Anthropic Claude
   - Custom API endpoints

2. **Enhanced Analysis**
   - Response similarity comparison
   - Sentiment analysis
   - Content quality metrics

3. **Advanced Features**
   - Response export
   - History tracking
   - Parameter adjustment
   - Visualization of metrics

4. **Token Counting**
   - Integration with tiktoken
   - Model-specific tokenizers
   - Batch processing support

## Contributing

Contributions are welcome! Some areas that need work:
- Improved token counting accuracy
- Additional model integrations
- Enhanced error handling
- Test coverage
- Performance optimizations

## License

MIT License - feel free to use and modify as needed.