import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Dumbbell, Send } from 'lucide-react';
import StepIndicator from './components/StepIndicator';
import Section1 from './components/Section1_AccountProfile';
import Section2 from './components/Section2_BusinessProfile';
import Section3 from './components/Section3_LocationConfig';
import Section4 from './components/Section4_IncludedFeatures';
import Section5 from './components/Section5_FacilityBenefits';
import { FormData, initialFormData } from './types';

const TOTAL_STEPS = 5;

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const goNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log('Form Data:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Section1 data={formData} onChange={updateFormData} />;
      case 1:
        return <Section2 data={formData} onChange={updateFormData} />;
      case 2:
        return <Section3 data={formData} onChange={updateFormData} />;
      case 3:
        return <Section4 />;
      case 4:
        return <Section5 data={formData} onChange={updateFormData} />;
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-200 mb-6 animate-bounce">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Setup Complete!</h1>
          <p className="text-gray-500 mb-2">
            Your business <span className="font-semibold text-indigo-600">{formData.businessName || 'FitHub'}</span> has been configured successfully.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            You can review and modify your settings anytime from the dashboard.
          </p>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-left space-y-3 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Owner</span>
              <span className="font-medium text-gray-800">{formData.fullName || '—'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-gray-800">{formData.email || '—'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Business</span>
              <span className="font-medium text-gray-800">{formData.businessName || '—'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Location</span>
              <span className="font-medium text-gray-800">{formData.locationName || '—'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Users</span>
              <span className="font-medium text-gray-800">{formData.numberOfUsers.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Billing</span>
              <span className="font-medium text-gray-800 capitalize">{formData.billingCycle}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Benefits</span>
              <span className="font-medium text-gray-800">{formData.benefitTags.length} configured</span>
            </div>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(0);
              setFormData(initialFormData);
            }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg shadow-indigo-200"
          >
            Start New Setup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">FitHub</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Business Setup</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Auto-saving
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Step Indicator */}
        <div className="mb-10">
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-8 lg:p-10 mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={currentStep === 0}
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all ${
              currentStep === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentStep(i);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentStep
                    ? 'w-6 bg-indigo-500'
                    : i < currentStep
                    ? 'bg-indigo-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentStep < TOTAL_STEPS - 1 ? (
            <button
              onClick={goNext}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl"
            >
              <Send className="w-4 h-4" />
              Complete Setup
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-400">
        <p>© 2025 FitHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
