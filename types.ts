export interface FormData {
  // Section 1
  profileImage: string | null;
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  role: string;
  addressLine: string;
  city: string;
  state: string;
  country: string;
  pincode: string;

  // Section 2
  businessName: string;
  currency: string;
  timezone: string;
  businessPhoneCountryCode: string;
  businessPhoneNumber: string;
  businessEmail: string;
  businessAddressLine: string;
  businessCity: string;
  businessState: string;
  businessCountry: string;
  businessPincode: string;
  latitude: string;
  longitude: string;

  // Section 3
  billingCycle: 'monthly' | 'yearly';
  businessType: string;
  locationName: string;
  numberOfUsers: number;

  // Section 5
  benefitTags: string[];
}

export const initialFormData: FormData = {
  profileImage: null,
  fullName: '',
  email: '',
  phoneCountryCode: '+1',
  phoneNumber: '',
  role: 'Admin',
  addressLine: '',
  city: '',
  state: '',
  country: '',
  pincode: '',

  businessName: '',
  currency: 'USD',
  timezone: 'America/New_York',
  businessPhoneCountryCode: '+1',
  businessPhoneNumber: '',
  businessEmail: '',
  businessAddressLine: '',
  businessCity: '',
  businessState: '',
  businessCountry: '',
  businessPincode: '',
  latitude: '',
  longitude: '',

  billingCycle: 'monthly',
  businessType: '',
  locationName: '',
  numberOfUsers: 200,

  benefitTags: [
    'Gym Access',
    'Locker Room Access',
    'Basic Equipment',
    'Cardio Equipment',
    'Weight Training Area',
    'Group Fitness Classes',
  ],
};

export const countryCodes = [
  { code: '+1', label: '🇺🇸 +1', country: 'US' },
  { code: '+44', label: '🇬🇧 +44', country: 'UK' },
  { code: '+91', label: '🇮🇳 +91', country: 'IN' },
  { code: '+61', label: '🇦🇺 +61', country: 'AU' },
  { code: '+49', label: '🇩🇪 +49', country: 'DE' },
  { code: '+33', label: '🇫🇷 +33', country: 'FR' },
  { code: '+81', label: '🇯🇵 +81', country: 'JP' },
  { code: '+86', label: '🇨🇳 +86', country: 'CN' },
  { code: '+55', label: '🇧🇷 +55', country: 'BR' },
  { code: '+971', label: '🇦🇪 +971', country: 'AE' },
  { code: '+65', label: '🇸🇬 +65', country: 'SG' },
  { code: '+82', label: '🇰🇷 +82', country: 'KR' },
];

export const currencies = [
  { value: 'USD', label: 'US Dollar ($)', symbol: '$' },
  { value: 'EUR', label: 'Euro (€)', symbol: '€' },
  { value: 'GBP', label: 'British Pound (£)', symbol: '£' },
  { value: 'INR', label: 'Indian Rupee (₹)', symbol: '₹' },
  { value: 'AUD', label: 'Australian Dollar (A$)', symbol: 'A$' },
  { value: 'CAD', label: 'Canadian Dollar (C$)', symbol: 'C$' },
  { value: 'JPY', label: 'Japanese Yen (¥)', symbol: '¥' },
  { value: 'AED', label: 'UAE Dirham (د.إ)', symbol: 'د.إ' },
  { value: 'SGD', label: 'Singapore Dollar (S$)', symbol: 'S$' },
  { value: 'BRL', label: 'Brazilian Real (R$)', symbol: 'R$' },
];

export const timezones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' },
  { value: 'Europe/Paris', label: 'Central European Time (CET)' },
  { value: 'Asia/Kolkata', label: 'India Standard Time (IST)' },
  { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
  { value: 'Asia/Shanghai', label: 'China Standard Time (CST)' },
  { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' },
  { value: 'Asia/Dubai', label: 'Gulf Standard Time (GST)' },
  { value: 'Asia/Singapore', label: 'Singapore Time (SGT)' },
];

export const businessTypes = [
  { id: 'gym', label: 'Gym', icon: 'dumbbell' },
  { id: 'yoga', label: 'Yoga Studio', icon: 'flower' },
  { id: 'crossfit', label: 'CrossFit Box', icon: 'zap' },
  { id: 'spa', label: 'Spa & Wellness', icon: 'sparkles' },
];

export const defaultBenefitSuggestions = [
  'Gym Access', 'Locker Room Access', 'Basic Equipment', 'Cardio Equipment',
  'Weight Training Area', 'Group Fitness Classes', 'Personal Training Session',
  'Nutrition Consultation', 'Meal Planning', 'Progress Tracking', '24/7 Access',
  'Guest Passes', 'Towel Service', 'Spa Access', 'Sauna Access', 'Pool Access',
  'Parking', 'WiFi Access', 'Mobile App Access', 'Fitness Assessment',
];
