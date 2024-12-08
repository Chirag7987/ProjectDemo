"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "40,000+", label: "GitHub repo downloads" },
  { value: "32.5k", label: "Stars by the community" },
  { value: "1,000+", label: "Contributors" },
];

const testimonial = {
  quote:
    "At OpenAI, Ray allows us to iterate at scale much faster than we could before. We use Ray to train our largest models, including ChatGPT.",
  author: "Greg Brockman",
  title: "Co-Founder and President, OpenAI",
};

const companies = [
  {
    name: "amazon",
    logos: ["https://res.cloudinary.com/dmky9t4sr/image/upload/v1733552260/Amazon_fthfdl.png"],
  },
  {
    name: "google",
    logos: ["https://res.cloudinary.com/dmky9t4sr/image/upload/v1733552267/google_ccfdbq.png"],
  },
  {
    name: "uber",
    logos: ["https://res.cloudinary.com/dmky9t4sr/image/upload/v1733552440/uber_l15vsp.png"],
  },
  {
    name: "saleforce",
    logos: ["https://res.cloudinary.com/dmky9t4sr/image/upload/v1733552340/salesforce_yx5cet.png"],
  },
  {
    name: "palantir",
    logos: ["https://res.cloudinary.com/dmky9t4sr/image/upload/v1733552441/Visa_vpdzjl.png"],
  },
  {
    name: "slack",
    logos: ["https://res.cloudinary.com/dmky9t4sr/image/upload/v1733590501/testimonials/discipline.jpg"],
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Chosen by the World’s Smartest AI/ML Platform Leaders
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Stats Section */}
          <motion.div
            className="flex-1 space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl font-extrabold">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            className="flex-1 bg-gray-800 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <div>
              <h4 className="text-lg font-bold">{testimonial.author}</h4>
              <p className="text-gray-400">{testimonial.title}</p>
            </div>
          </motion.div>
        </div>

        {/* Companies Section */}
        <motion.div
          className="flex justify-center mt-12 gap-8 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {company.logos.map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo}
                  alt={`${company.name} logo`}
                  className="h-12"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/logos/default-logo.svg";
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
