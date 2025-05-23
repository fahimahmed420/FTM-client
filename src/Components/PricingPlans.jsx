import React from 'react';

const PricingPlans = () => {
    return (
        <div>
            <section className=" text-white  py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">Affordable Plans</h2>
    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
      Choose a pricing plan that fits your needs and budget. Upgrade anytime as your work or team grows.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Freelancer",
          price: "$9",
          desc: "/mo",
          features: [
            "Post 3 Tasks/month",
            "Basic Bidding Tools",
            "Community Support",
            "Access to General Category",
          ],
          color: "text-pink-500",
          border: "border-pink-500",
        },
        {
          title: "Business",
          price: "$99",
          desc: "/mo",
          features: [
            "Post 20 Tasks/month",
            "Advanced Bidding Tools",
            "Priority Email Support",
            "Dedicated Project Manager",
          ],
          color: "text-blue-400",
          border: "border-blue-400",
        },
        {
          title: "Enterprise",
          price: "$499",
          desc: "/mo",
          features: [
            "Unlimited Task Posting",
            "Premium Bidding Features",
            "24/7 Dedicated Support",
            "Custom Integrations Available",
          ],
          color: "text-rose-500",
          border: "border-rose-500",
        },
      ].map((plan, i) => (
        <div
          key={i}
          className="bg-[#111] rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
        >
          <div className={`text-4xl font-bold ${plan.color}`}>
            {plan.price} <span className="text-lg font-medium">{plan.desc}</span>
          </div>
          <div className="uppercase text-sm tracking-widest mt-2 mb-6 text-gray-400">
            {plan.title}
          </div>
          <ul className="space-y-3 text-gray-300 text-sm mb-8 text-left">
            {plan.features.map((feature, j) => (
              <li key={j}>✔ {feature}</li>
            ))}
          </ul>
          <button
            className={`mt-auto border ${plan.border} text-sm px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300`}
          >
            CHOOSE PLAN
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


        </div>
    );
};

export default PricingPlans;