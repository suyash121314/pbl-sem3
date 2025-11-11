import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            About Ecommy
          </h1>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
            Learn more about our AI-powered e-commerce content generation tool.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What is Ecommy?</h2>
            <p className="text-slate-600 leading-relaxed">
              Ecommy is an AI-powered assistant designed to help e-commerce businesses create high-converting product listings.
              Using advanced machine learning models, we analyze your product images and generate compelling titles, descriptions,
              key features, and SEO-optimized tags that can significantly improve your product's visibility and sales.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Upload Product Image</h3>
                  <p className="text-slate-600">Upload a clear, high-quality image of your product.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Provide Product Details</h3>
                  <p className="text-slate-600">Enter the product name and any additional information.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Generate Content</h3>
                  <p className="text-slate-600">Our AI analyzes the image and generates optimized content instantly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Features</h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                AI-powered content generation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Image analysis for accurate descriptions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                SEO-optimized keywords and tags
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Bullet point feature highlights
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Fast and easy to use interface
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;