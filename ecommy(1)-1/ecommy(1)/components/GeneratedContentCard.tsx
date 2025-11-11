import React, { useState, useCallback } from 'react';
import { CopyIcon } from './icons';

interface GeneratedContentCardProps {
  title: string;
  content: string | string[];
}

const GeneratedContentCard: React.FC<GeneratedContentCardProps> = ({ title, content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const textToCopy = Array.isArray(content) ? content.join('\n') : content;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [content]);

  const renderContent = () => {
    if (Array.isArray(content)) {
      if(title.toLowerCase().includes('tags')){
        return (
            <div className="flex flex-wrap gap-2">
                {content.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                        {item}
                    </span>
                ))}
            </div>
        )
      }
      return (
        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{content}</p>;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
        <button
          onClick={handleCopy}
          className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
          aria-label={`Copy ${title}`}
        >
          {copied ? (
            <span className="text-sm text-indigo-600 dark:text-indigo-400">Copied!</span>
          ) : (
            <CopyIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default GeneratedContentCard;
