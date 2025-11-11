import React from 'react';

const Guide: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            User Guide
          </h1>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
            Learn how to get the most out of Ecommy for your e-commerce content creation.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Getting Started</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Welcome to Ecommy! This guide will walk you through creating compelling product listings
              that can boost your sales and improve your search engine rankings.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Step-by-Step Guide</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Prepare Your Product Image</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• Use high-quality, well-lit photos</li>
                  <li>• Show the product from multiple angles if possible</li>
                  <li>• Ensure the image is clear and focused</li>
                  <li>• Supported formats: PNG, JPG, GIF (up to 10MB)</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">2. Enter Product Information</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• Provide a clear, descriptive product name</li>
                  <li>• Include relevant details in the extra information field</li>
                  <li>• Mention materials, dimensions, target audience, etc.</li>
                  <li>• The more specific you are, the better the results</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Generate Content</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• Click "Generate Content" to start the AI process</li>
                  <li>• Wait for the AI to analyze your image and create content</li>
                  <li>• Review and copy the generated content</li>
                  <li>• Make any necessary adjustments for your specific needs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Tips for Better Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Image Quality</h3>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• Use professional product photography</li>
                  <li>• Ensure good lighting and contrast</li>
                  <li>• Remove distracting backgrounds</li>
                  <li>• Show product in use if applicable</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Content Optimization</h3>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• Include specific measurements</li>
                  <li>• Mention unique selling points</li>
                  <li>• Target specific customer segments</li>
                  <li>• Use industry-specific terminology</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Be Specific</h3>
                  <p className="text-slate-600">The more details you provide, the more accurate and compelling the generated content will be.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Review and Edit</h3>
                  <p className="text-slate-600">Always review the AI-generated content and make adjustments to match your brand voice.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Test and Iterate</h3>
                  <p className="text-slate-600">Use different images and descriptions to see what works best for your products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guide;