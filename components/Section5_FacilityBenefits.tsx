import React, { useState } from 'react';
import { Plus, X, Tag, Sparkles } from 'lucide-react';
import { FormData, defaultBenefitSuggestions } from '../types';

interface Props {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const Section5: React.FC<Props> = ({ data, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (trimmed && !data.benefitTags.includes(trimmed)) {
      onChange({ benefitTags: [...data.benefitTags, trimmed] });
    }
    setInputValue('');
  };

  const removeTag = (tag: string) => {
    onChange({ benefitTags: data.benefitTags.filter((t) => t !== tag) });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const suggestionsNotAdded = defaultBenefitSuggestions.filter(
    (s) => !data.benefitTags.includes(s)
  );

  // Color cycling for tags
  const tagColors = [
    'bg-indigo-50 text-indigo-700 border-indigo-200',
    'bg-purple-50 text-purple-700 border-purple-200',
    'bg-blue-50 text-blue-700 border-blue-200',
    'bg-emerald-50 text-emerald-700 border-emerald-200',
    'bg-teal-50 text-teal-700 border-teal-200',
    'bg-cyan-50 text-cyan-700 border-cyan-200',
    'bg-amber-50 text-amber-700 border-amber-200',
    'bg-rose-50 text-rose-700 border-rose-200',
    'bg-pink-50 text-pink-700 border-pink-200',
    'bg-violet-50 text-violet-700 border-violet-200',
  ];

  return (
    <div className="space-y-8 animate-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Default Facility Benefits</h2>
        <p className="mt-1 text-sm text-gray-500">
          Pre-configure the standard amenities your customers will receive.
        </p>
      </div>

      {/* Tag Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Add Benefit Tags
        </label>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a benefit and press Enter..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <button
            onClick={() => addTag(inputValue)}
            disabled={!inputValue.trim()}
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md shadow-indigo-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      {/* Active Tags */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Active Benefits ({data.benefitTags.length})
          </h3>
          {data.benefitTags.length > 0 && (
            <button
              onClick={() => onChange({ benefitTags: [] })}
              className="text-xs text-red-500 hover:text-red-600 font-medium"
            >
              Clear All
            </button>
          )}
        </div>
        {data.benefitTags.length === 0 ? (
          <div className="py-8 text-center text-sm text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            No benefits added yet. Start typing or choose from suggestions below.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {data.benefitTags.map((tag, index) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 text-sm font-medium rounded-full border transition-all hover:shadow-sm ${
                  tagColors[index % tagColors.length]
                }`}
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Suggestions */}
      {suggestionsNotAdded.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Suggested Benefits
          </h3>
          <div className="flex flex-wrap gap-2">
            {suggestionsNotAdded.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => addTag(suggestion)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 bg-white rounded-full border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <Plus className="w-3 h-3" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add All Suggested */}
      {suggestionsNotAdded.length > 0 && (
        <button
          onClick={() => {
            onChange({
              benefitTags: [...new Set([...data.benefitTags, ...defaultBenefitSuggestions])],
            });
          }}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
        >
          + Add all suggested benefits
        </button>
      )}
    </div>
  );
};

export default Section5;
