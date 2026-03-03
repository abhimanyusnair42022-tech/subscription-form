import React from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { FormData, countryCodes, currencies, timezones } from '../types';

interface Props {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const Section2: React.FC<Props> = ({ data, onChange }) => {
  const [detecting, setDetecting] = React.useState(false);

  const handleAutoDetect = async () => {
    setDetecting(true);
    // Simulate a geo-detection delay
    await new Promise((r) => setTimeout(r, 1500));
    // Try browser geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onChange({
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          });
          setDetecting(false);
        },
        () => {
          // Fallback to a default
          onChange({ latitude: '40.712776', longitude: '-74.005974' });
          setDetecting(false);
        }
      );
    } else {
      onChange({ latitude: '40.712776', longitude: '-74.005974' });
      setDetecting(false);
    }
  };

  return (
    <div className="space-y-8 animate-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Business Profile</h2>
        <p className="mt-1 text-sm text-gray-500">Tell us about your fitness center or business facility.</p>
      </div>

      {/* Business Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Business Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Business Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.businessName}
              onChange={(e) => onChange({ businessName: e.target.value })}
              placeholder="FitHub Fitness Center"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Currency <span className="text-red-400">*</span>
            </label>
            <select
              value={data.currency}
              onChange={(e) => onChange({ currency: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            >
              {currencies.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Timezone <span className="text-red-400">*</span>
            </label>
            <select
              value={data.timezone}
              onChange={(e) => onChange({ timezone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            >
              {timezones.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Business Phone <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={data.businessPhoneCountryCode}
                onChange={(e) => onChange({ businessPhoneCountryCode: e.target.value })}
                className="w-28 px-2 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input
                type="tel"
                value={data.businessPhoneNumber}
                onChange={(e) => onChange({ businessPhoneNumber: e.target.value })}
                placeholder="(555) 987-6543"
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Business Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={data.businessEmail}
              onChange={(e) => onChange({ businessEmail: e.target.value })}
              placeholder="info@fithub.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Business Address */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Business Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Address Line <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.businessAddressLine}
              onChange={(e) => onChange({ businessAddressLine: e.target.value })}
              placeholder="456 Fitness Blvd, Suite 100"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              City <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.businessCity}
              onChange={(e) => onChange({ businessCity: e.target.value })}
              placeholder="Los Angeles"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              State <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.businessState}
              onChange={(e) => onChange({ businessState: e.target.value })}
              placeholder="CA"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Country <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.businessCountry}
              onChange={(e) => onChange({ businessCountry: e.target.value })}
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
              value={data.businessPincode}
              onChange={(e) => onChange({ businessPincode: e.target.value })}
              placeholder="90001"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Geographic Coordinates */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          Geographic Coordinates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Latitude <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              step="any"
              value={data.latitude}
              onChange={(e) => onChange({ latitude: e.target.value })}
              placeholder="40.712776"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Longitude <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              step="any"
              value={data.longitude}
              onChange={(e) => onChange({ longitude: e.target.value })}
              placeholder="-74.005974"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
            />
          </div>
        </div>
        <button
          onClick={handleAutoDetect}
          disabled={detecting}
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md shadow-indigo-200 disabled:opacity-60"
        >
          {detecting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <MapPin className="w-4 h-4" />
          )}
          {detecting ? 'Detecting...' : 'Auto-detect Location'}
        </button>
      </div>
    </div>
  );
};

export default Section2;
