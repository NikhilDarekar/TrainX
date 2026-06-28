import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "1000 ₹",
    duration: "/month",
    popular: false,
    features: [
      "Gym Access",
      "Locker Facility",
      "Free WiFi",
      "Basic Equipment",
    ],
  },
  {
    name: "Premium",
    price: "2000 ₹",
    duration: "/month",
    popular: true,
    features: [
      "Gym Access",
      "Personal Trainer",
      "Diet Plan",
      "Steam Bath",
      "Locker Facility",
      "Group Classes",
    ],
  },
  {
    name: "Elite",
    price: "3000 ₹",
    duration: "/month",
    popular: false,
    features: [
      "Everything in Premium",
      "Private Coaching",
      "VIP Lounge",
      "Massage Therapy",
      "Nutrition Consultation",
    ],
  },
];

const Membership = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-24 min-h-screen overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 uppercase tracking-[6px] font-semibold">
            Membership Plans
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold text-gray-900">
            Choose Your
            <span className="text-orange-500"> Perfect Plan</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Transform your fitness journey with premium memberships designed
            for every lifestyle.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300
              
              ${
                plan.popular
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl border-orange-500"
                  : "bg-white/80 border-gray-200 shadow-xl hover:shadow-2xl"
              }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-500 px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-3xl font-bold ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              <div className="flex items-end mt-6">
                <span className="text-6xl font-bold">{plan.price}</span>
                <span className="mb-2 ml-2 opacity-80">{plan.duration}</span>
              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`p-1 rounded-full ${
                        plan.popular
                          ? "bg-white/20"
                          : "bg-orange-100 text-orange-500"
                      }`}
                    >
                      <Check size={16} />
                    </div>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold transition duration-300

                ${
                  plan.popular
                    ? "bg-white text-orange-500 hover:bg-gray-100"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;