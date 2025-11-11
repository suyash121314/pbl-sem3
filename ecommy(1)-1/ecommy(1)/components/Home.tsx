import React, { useState, useCallback } from 'react';
import { generateEcommContent } from '../services/geminiService';
import type { GeneratedContent } from '../types';
import Loader from './Loader';
import GeneratedContentCard from './GeneratedContentCard';
import { UploadIcon, SparklesIcon } from './icons';

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]); // remove the "data:mime/type;base64," part
    };
    reader.onerror = (error) => reject(error);
  });

const Home: React.FC = () => {
  const [productName, setProductName] = useState<string>('');
  const [extraInfo, setExtraInfo] = useState<string>('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productImage || !productName) {
      setError('Product image and name are required.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);

    try {
      const base64Image = await fileToBase64(productImage);
      const content = await generateEcommContent(
        base64Image,
        productImage.type,
        productName,
        extraInfo
      );
      setGeneratedContent(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [productImage, productName, extraInfo]);

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Ecommy
        </h1>
        <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
          Your AI-powered assistant for creating high-converting e-commerce product listings.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Input Section */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="image-upload" className="block text-sm font-medium text-slate-700 mb-2">
                Product Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Product preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
                  ) : (
                    <UploadIcon className="mx-auto h-12 w-12 text-slate-400" />
                  )}
                  <div className="flex text-sm text-slate-600">
                    <label
                      htmlFor="image-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="product-name" className="block text-sm font-medium text-slate-700">
                Product Name
              </label>
              <input
                type="text"
                id="product-name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., Ergonomic Office Chair"
              />
            </div>

            <div>
              <label htmlFor="extra-info" className="block text-sm font-medium text-slate-700">
                Extra Information (Optional)
              </label>
              <textarea
                id="extra-info"
                rows={4}
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., Material: Mesh, Dimensions: 25x25x40 inches, Target Audience: Remote workers"
              ></textarea>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? <Loader /> : <SparklesIcon className="w-5 h-5" />}
              <span>{isLoading ? 'Generating...' : 'Generate Content'}</span>
            </button>
          </form>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg h-full">
              <Loader />
              <p className="mt-4 text-slate-500">AI is crafting your content...</p>
            </div>
          )}
          {generatedContent && (
            <div className="space-y-6 animate-fade-in">
              <GeneratedContentCard title="Generated Title" content={generatedContent.title} />
              <GeneratedContentCard title="Generated Description" content={generatedContent.description} />
              <GeneratedContentCard title="Key Features (Bullet Points)" content={generatedContent.bulletPoints} />
              <GeneratedContentCard title="SEO Tags & Keywords" content={generatedContent.tags} />
            </div>
          )}
          {!isLoading && !generatedContent && (
             <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-lg h-full">
               <SparklesIcon className="w-16 h-16 text-slate-300" />
               <h2 className="mt-4 text-xl font-semibold text-slate-700">Your content will appear here</h2>
               <p className="mt-1 text-slate-500">Fill out the form and let the AI do the magic!</p>
             </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;