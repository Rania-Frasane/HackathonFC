import React from 'react';

const plans = [
  {
    id: 1,
    title: 'Starter',
    price: '20$',
    img:'https://neetable.com/img/blog/blog-inner/react-node-js-for-full-stack-web-development/why-combine-react-and-node-js-for-full-stack-web-development.jpg',
    features: [
      '10 users',
      '2GB of storage',
      'Email support',
      'Help center access',
      'Phone support',
      'Community access',
    ],
    included: [true, true, true, false, false, false],
  },
  {
    id: 2,
    title: 'Pro',
    price: '30$',
    img:'https://i.ytimg.com/vi/GbZ0ERCwguw/maxresdefault.jpg',
    features: [
      '20 users',
      '5GB of storage',
      'Email support',
      'Help center access',
      'Phone support',
      'Community access',
    ],
    included: [true, true, true, true, false, false],
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '100$',
    img:'https://getwallpapers.com/wallpaper/full/6/7/d/491909.jpg',
    features: [
      '50 users',
      '20GB of storage',
      'Email support',
      'Help center access',
      'Phone support',
      'Community access',
    ],
    included: [true, true, true, true, true, true],
  },
];

function Formation() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="text-center text-4xl font-bold mb-8">Nos Formation</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="overflow-hidden rounded-lg border border-gray-200 shadow transition hover:shadow-lg hover:border-indigo-500"
          >
            <img
              alt=""
              src={plan.img}
            />

            <div className="bg-white p-6">
              <time dateTime="2022-10-10" className="block text-xs text-gray-500">10th Oct 2022</time>

              <a href="#">
                <h3 className="mt-0.5 text-xl text-gray-900">{plan.title}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                {plan.features.join(', ')}
              </p>

              <p className="mt-4 text-xl text-gray-900 font-bold">{plan.price}/month</p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                Get Started
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Formation;
