"use client";

import React, { useState } from "react";

const features = [
  {
    title: "RayTurbo: A Supercharged Version of Ray",
    description:
      "Powered by RayTurbo, a super-charged version of Ray, Anyscale's Platform has the tools you need to optimize performance and lower cost on every AI workload.",
    image: "https://res.cloudinary.com/dmky9t4sr/image/upload/v1733029001/samples/smile.jpg", // Replace with your actual image path
  },
  {
    title: "Best-in-Class Compute Governance",
    description:
      "Keep your AI spend and usage under control with comprehensive governance and observability for AI workloads. Anyscale's tooling lets you manage users, roles, and quotas across clouds and offers you insights to optimize machine utilization.",
    image: "https://res.cloudinary.com/dmky9t4sr/image/upload/v1733029000/samples/balloons.jpg", // Replace with your actual image path
  },
  {
    title: "Delight Developers with World-Class Tooling",
    description:
      "Empower developers with a suite of world-class tools to build and deploy AI workloads faster and more efficiently, with better collaboration.",
    image: "https://res.cloudinary.com/dmky9t4sr/image/upload/v1733028997/samples/two-ladies.jpg", // Replace with your actual image path
  },
];

const InteractiveFeaturePage = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="bg-[rgb(5,22,39)] py-16 px-8">
  <div className="container mx-auto flex flex-col lg:flex-row gap-12">
    {/* Left Side Content */}
    <div className="flex-1">
      {/* Description */}
      <div className="mb-6 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{activeFeature.title}</h2>
        <p className="text-gray-300">{activeFeature.description}</p>
      </div>
      {/* Image */}
      <div className="bg-black p-4 rounded-lg shadow-lg">
        <img
          src={activeFeature.image}
          alt={activeFeature.title}
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>

    {/* Right Side Feature Buttons */}
    <div className="flex-1 space-y-4">
      {features.map((feature, index) => (
        <button
          key={index}
          className={`text-left w-full px-4 py-3 rounded-lg border ${
            activeFeature.title === feature.title
              ? "bg-gray-800 text-white border-gray-600 font-bold"
              : "bg-gray-700 text-gray-300 border-gray-500 hover:bg-gray-800 hover:text-white"
          }`}
          onClick={() => setActiveFeature(feature)}
        >
          {feature.title}
        </button>
      ))}
    </div>
  </div>
</section>

  );
};

export default InteractiveFeaturePage;
