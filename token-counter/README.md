# AI Token Counter & Cost Estimator

A React component for estimating token counts and costs for various AI models. Track character count, word count, and token estimates in real-time.

## Features

- Real-time token estimation
- Character and word counting
- Cost calculation for popular AI models
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
    TokenCounter/
      index.jsx
      PricingCard.jsx
  utils/
    tokenizer.js
    modelPricing.js
```

3. Import and use the component:
```jsx
import TokenCounter from './components/TokenCounter';

function App() {
  return (
    <div className="p-4">
      <TokenCounter />
    </div>
  );
}
```

## Customization

### Adding New Models

Add new models to `modelPricing.js`:
```javascript
export const MODEL_PRICING = {
  'your-model': {
    name: 'Model Name',
    input: 0.000,  // Cost per 1K input tokens
    output: 0.000  // Cost per 1K output tokens
  }
};
```

### Implementing Accurate Token Counting

Replace the estimation in `tokenizer.js` with a proper tokenizer:
```javascript
import { encoding_for_model } from 'tiktoken'

export const countTokens = (text, model = 'gpt-3.5-turbo') => {
  const enc = encoding_for_model(model);
  return enc.encode(text).length;
};
```

## Planned Improvements

1. **Token Counting**
   - Integration with tiktoken
   - Model-specific tokenizers
   - Support for code and special characters

2. **Enhanced Features**
   - Token visualization
   - Token breakdown by type
   - Batch processing
   - Export functionality

3. **Additional Analysis**
   - Prompt optimization suggestions
   - Cost optimization tips
   - Historical tracking

4. **UI Enhancements**
   - Real-time highlighting
   - Token distribution charts
   - Mobile optimization

## Contributing

Areas for contribution:
- Accurate token counting implementations
- Additional model support
- Performance optimizations
- UI/UX improvements

## License

MIT License - feel free to use and modify as needed.