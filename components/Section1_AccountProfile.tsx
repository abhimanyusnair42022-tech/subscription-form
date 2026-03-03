import React, { useRef } from 'react';
import { Upload, Camera, X } from 'lucide-react';
import { FormData, countryCodes } from '../types';

interface Props {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const Section1: React.FC<Props> = ({ data, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Image must be under 2MB');
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      alert('Only JPG, PNG, or GIF files are accepted');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      onChange({ profileImage: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8 animate-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Account & Profile Setup</h2>
        <p className="mt-1 text-sm text-gray-500">Set up your personal information and account details.</p>
      </div>

      {/* Profile Image Upload */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative group">
          <div
            className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden border-2 border-dashed border-indigo-200 cursor-pointer hover:border-indigo-400 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            {data.profileImage ? (
              <img src={data.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-1 text-indigo-400">
                <Camera className="w-8 h-8" />
                <span className="text-[10px] font-medium">Upload</span>
              </div>
            )}
          </div>
          {data.profileImage && (
            <button
              onClick={() => onChange({ profileImage: null })}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.gif"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-700">Profile Image</h3>
          <p className="text-xs text-gray-400 mt-1">Accepts JPG, PNG, GIF — Max 2MB</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            Choose File
          </button>
        </div>
      </div>

      {/* Personal Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={data.phoneCountryCode}
              onChange={(e) => onChange({ phoneCountryCode: e.target.value })}
              className="w-28 px-2 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
            <input
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => onChange({ phoneNumber: e.target.value })}
              placeholder="(555) 123-4567"
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Role <span className="text-red-400">*</span>
          </label>
          <select
            value={data.role}
            onChange={(e) => onChange({ role: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Owner">Owner</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Personal Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Address Line <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.addressLine}
              onChange={(e) => onChange({ addressLine: e.target.value })}
              placeholder="123 Main Street, Apt 4B"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              City <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.city}
              onChange={(e) => onChange({ city: e.target.value })}
              placeholder="New York"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              State <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.state}
              onChange={(e) => onChange({ state: e.target.value })}
              placeholder="NY"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Country <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.country}
              onChange={(e) => onChange({ country: e.target.value })}
              placeholder="United States"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Pincode / Zip Code <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.pincode}
              onChange={(e) => onChange({ pincode: e.target.value })}
              placeholder="10001"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
