# Ecommy - AI-Powered E-Commerce Content Generator

## Project Description
Ecommy is a web application that helps e-commerce sellers create high-converting product listings using artificial intelligence. Users can upload a product image, enter basic product information, and the app generates optimized titles, descriptions, bullet points, and SEO tags automatically using Google's Gemini AI.

The app aims to save time for online sellers by automating the content creation process while ensuring the generated content is persuasive, SEO-friendly, and appealing to potential customers.

## How It Works (Workflow)

### 1. User Input Phase
- User uploads a product image (PNG, JPG, GIF up to 10MB)
- User enters the product name (required)
- User can optionally provide extra information like materials, dimensions, target audience

### 2. Image Processing
- The uploaded image is converted to base64 format for API transmission
- Image preview is displayed to the user

### 3. AI Content Generation
- The app sends the image, product name, and extra info to Google's Gemini AI
- Gemini analyzes the image and text to understand the product
- AI generates structured content including:
  - Catchy product title (60-80 characters)
  - Detailed product description (2-3 paragraphs)
  - Key features as bullet points (5-7 points)
  - SEO keywords and tags (10-15 terms)

### 4. Content Display
- Generated content is displayed in organized cards
- User can copy and use the content for their e-commerce listings

## Technologies Used

### Frontend Framework
- **React 19.2.0**: Modern JavaScript library for building user interfaces
- **TypeScript 5.8.2**: Typed superset of JavaScript for better code quality
- **Vite 6.2.0**: Fast build tool and development server

### AI Integration
- **Google Generative AI (@google/genai 1.29.0)**: Google's AI service for content generation
- **Gemini 2.5 Flash**: The specific AI model used for generating product content

### Styling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- Custom dark/light mode support

### Development Tools
- **Vite**: Development server and build tool
- **ESLint**: Code linting (implied by project structure)
- **Node.js**: Runtime environment

## Student Work and Contributions

This project was developed as a learning exercise in modern web development and AI integration. Key learning objectives and implementations include:

### Frontend Development
- Built responsive React components with TypeScript
- Implemented file upload functionality with image preview
- Created form handling with validation
- Designed user interface with Tailwind CSS
- Added loading states and error handling

### AI Integration
- Integrated Google Gemini AI API
- Implemented image-to-text content generation
- Structured AI prompts for consistent output
- Handled API responses and error cases

### Code Organization
- Modular component architecture
- Service layer for API calls
- Type definitions for data structures
- Configuration management for API keys

### Best Practices
- TypeScript for type safety
- Responsive design for mobile and desktop
- Accessibility considerations in UI design
- Clean code structure and naming conventions

## Setup Instructions

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local` with your Gemini API key
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Future Enhancements
- Support for multiple languages
- Integration with e-commerce platforms (Shopify, WooCommerce)
- Batch processing for multiple products
- Content customization options
- Analytics for generated content performance
