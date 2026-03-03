import React from 'react';
import {
  Users, CalendarCheck, CreditCard, BarChart3, Wrench, Mail,
  Smartphone, UserCog, Award, Bot, Check, Rocket
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    desc: 'Track member profiles, attendance, and engagement.',
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
  },
  {
    icon: CalendarCheck,
    title: 'Class Booking & Scheduling',
    desc: 'Online class booking and session scheduling.',
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    desc: 'Integrated payment gateway and billing management.',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Advanced analytics and custom reporting dashboards.',
    gradient: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: Wrench,
    title: 'Equipment & Retail',
    desc: 'Manage equipment maintenance and retail inventory.',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Email campaign management and automation.',
    gradient: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application',
    desc: 'White-label mobile app for iOS and Android.',
    gradient: 'from-indigo-500 to-violet-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: UserCog,
    title: 'Staff & Trainer Management',
    desc: 'Schedule staff, track certifications, manage payroll.',
    gradient: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Award,
    title: 'Loyalty Program',
    desc: 'Customer loyalty and rewards program.',
    gradient: 'from-yellow-500 to-amber-600',
    bg: 'bg-yellow-50',
  },
];

const Section4: React.FC = () => {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Included Features</h2>
        <p className="mt-1 text-sm text-gray-500">Everything you need to run your fitness business — all included out of the box.</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative p-5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-gray-800">{feature.title}</h4>
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-emerald-600" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* AI Personal Coach - Coming Soon */}
        <div className="relative p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border-2 border-dashed border-gray-200 opacity-75">
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-purple-700 bg-purple-100 rounded-full uppercase tracking-wide">
              <Rocket className="w-3 h-3" />
              Coming Soon
            </span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-500">AI Personal Coach</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                AI-powered workout plans and real-time coaching.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl text-white shadow-xl shadow-indigo-200/50">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Check className="w-7 h-7 text-white" strokeWidth={3} />
          </div>
          <div>
            <h3 className="text-lg font-bold">All 9 Features Included</h3>
            <p className="text-sm text-white/80 mt-0.5">
              No hidden costs, no add-on fees. Every capability is included with your subscription.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
