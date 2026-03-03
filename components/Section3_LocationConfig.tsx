import React from 'react';
import { Dumbbell, Flower2, Zap, Sparkles } from 'lucide-react';
import { FormData } from '../types';

interface Props {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const businessTypeConfig = [
  {
    id: 'gym',
    label: 'Gym',
    desc: 'Full-service fitness center',
    icon: Dumbbell,
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    activeBorder: 'border-blue-500',
    text: 'text-blue-700',
  },
  {
    id: 'yoga',
    label: 'Yoga Studio',
    desc: 'Mind & body wellness',
    icon: Flower2,
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    activeBorder: 'border-emerald-500',
    text: 'text-emerald-700',
  },
  {
    id: 'crossfit',
    label: 'CrossFit Box',
    desc: 'High-intensity training',
    icon: Zap,
    gradient: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    activeBorder: 'border-orange-500',
    text: 'text-orange-700',
  },
  {
    id: 'spa',
    label: 'Spa & Wellness',
    desc: 'Relaxation & recovery',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    activeBorder: 'border-purple-500',
    text: 'text-purple-700',
  },
];

const Section3: React.FC<Props> = ({ data, onChange }) => {
  const userCountFormatted = data.numberOfUsers.toLocaleString();

  // Calculate dynamic price hint
  const basePriceMonthly = 49;
  const perUserMonthly = 0.15;
  const monthlyPrice = basePriceMonthly + data.numberOfUsers * perUserMonthly;
  const yearlyPrice = monthlyPrice * 12 * 0.8;

  return (
    <div className="space-y-8 animate-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Location & User Configuration</h2>
        <p className="mt-1 text-sm text-gray-500">Define your operation scale and billing preferences.</p>
      </div>

      {/* Billing Cycle Toggle */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Billing Cycle
        </h3>
        <div className="flex items-center gap-4">
          <div className="relative bg-gray-100 rounded-2xl p-1 flex">
            <button
              onClick={() => onChange({ billingCycle: 'monthly' })}
              className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                data.billingCycle === 'monthly'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => onChange({ billingCycle: 'yearly' })}
              className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                data.billingCycle === 'yearly'
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yearly
            </button>
            <div
              className={`absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg transition-all duration-300 ease-out ${
                data.billingCycle === 'monthly'
                  ? 'left-1 w-[calc(50%-4px)]'
                  : 'left-[calc(50%+2px)] w-[calc(50%-4px)]'
              }`}
            />
          </div>
          {data.billingCycle === 'yearly' && (
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </div>
        <div className="mt-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
          <p className="text-sm text-gray-600">
            Estimated price:{' '}
            <span className="font-bold text-indigo-700">
              ${data.billingCycle === 'monthly' ? monthlyPrice.toFixed(0) : yearlyPrice.toFixed(0)}
            </span>
            <span className="text-gray-400">
              /{data.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </span>
            {' '}for {userCountFormatted} users
          </p>
        </div>
      </div>

      {/* Business Type */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Business Type
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {businessTypeConfig.map((bt) => {
            const Icon = bt.icon;
            const isActive = data.businessType === bt.id;
            return (
              <button
                key={bt.id}
                onClick={() => onChange({ businessType: bt.id })}
                className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                  isActive
                    ? `${bt.activeBorder} ${bt.bg} shadow-lg scale-[1.02]`
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {isActive && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bt.gradient} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className={`font-semibold ${isActive ? bt.text : 'text-gray-800'}`}>{bt.label}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{bt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Location Name */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Location Details
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Location Name
          </label>
          <input
            type="text"
            value={data.locationName}
            onChange={(e) => onChange({ locationName: e.target.value })}
            placeholder="Downtown Branch"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* User Scale */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          User Configuration
        </h3>
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">Number of Active Users</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={200}
                max={10000}
                value={data.numberOfUsers}
                onChange={(e) => {
                  let val = parseInt(e.target.value) || 200;
                  if (val < 200) val = 200;
                  if (val > 10000) val = 10000;
                  onChange({ numberOfUsers: val });
                }}
                className="w-24 px-3 py-1.5 text-center text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <span className="text-xs text-gray-400">users</span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative mt-4">
            <input
              type="range"
              min={200}
              max={10000}
              step={50}
              value={data.numberOfUsers}
              onChange={(e) => onChange({ numberOfUsers: parseInt(e.target.value) })}
              className="w-full h-2 appearance-none cursor-pointer rounded-full bg-gray-200 accent-indigo-600
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-6
                [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-gradient-to-br
                [&::-webkit-slider-thumb]:from-indigo-500
                [&::-webkit-slider-thumb]:to-purple-600
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-indigo-200
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-white
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-6
                [&::-moz-range-thumb]:h-6
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-gradient-to-br
                [&::-moz-range-thumb]:from-indigo-500
                [&::-moz-range-thumb]:to-purple-600
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-white
                [&::-moz-range-thumb]:cursor-pointer
              "
              style={{
                background: `linear-gradient(to right, #6366f1 ${((data.numberOfUsers - 200) / (10000 - 200)) * 100}%, #e5e7eb ${((data.numberOfUsers - 200) / (10000 - 200)) * 100}%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>200</span>
              <span>2,500</span>
              <span>5,000</span>
              <span>7,500</span>
              <span>10,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
