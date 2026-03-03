import React from 'react';
import { User, Building2, MapPin, LayoutGrid, Gift, Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { label: 'Account & Profile', icon: User },
  { label: 'Business Profile', icon: Building2 },
  { label: 'Location & Config', icon: MapPin },
  { label: 'Included Features', icon: LayoutGrid },
  { label: 'Facility Benefits', icon: Gift },
];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
            style={{ width: `${((currentStep) / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="relative flex flex-col items-center z-10">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm
                  ${isCompleted
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-indigo-200 shadow-lg'
                    : isCurrent
                      ? 'bg-white border-2 border-indigo-500 text-indigo-600 shadow-indigo-100 shadow-lg ring-4 ring-indigo-50'
                      : 'bg-white border-2 border-gray-200 text-gray-400'
                  }
                `}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </div>
              <span
                className={`
                  mt-3 text-xs font-medium text-center max-w-[100px] transition-colors duration-300
                  ${isCurrent ? 'text-indigo-700' : isCompleted ? 'text-indigo-500' : 'text-gray-400'}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-indigo-700">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-sm text-gray-500">{steps[currentStep].label}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i <= currentStep ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
