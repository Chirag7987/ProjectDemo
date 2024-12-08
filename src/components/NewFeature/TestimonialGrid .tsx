"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "How does one scale a content processing pipeline in python? Well, you sprinkle some Ray on top.",
    author: "Willem Meints",
    title: "Chief AI Architect @ Aigency",
  },
  {
    quote:
      "Ray makes distributed Python almost too easy. Just a sprinkle of ray.remote magic and poof, your functions are running on a cluster. 5 years since my talk at @PyConBln, witnessing the incredible growth of the @raydistributed ecosystem in ML 💪.",
    author: "Jan Margeta",
    title: "Founder at KardioMe",
  },
  {
    quote:
      "Building this system typically required a dedicated MLOps and DevOps team. However, discovering Ray.io, an open-source library, allowed us to distribute GPT-3/4 training across over 300,000 CPUs and GPUs, reducing our backend development time from six months to less than 60 days.",
    author: "Crypost",
    title: "",
  },
  {
    quote:
      "Ended up choosing @raydistributed for this, after briefly looking at a number of options, including GCP/AWS batch, Coiled, Modal, K8s, among others.",
    author: "Ben Hamner",
    title: "Sumble, Co-founder & CTO",
  },
];

const TestimonialGrid = () => {
  return (
    <section className="bg-[rgb(5,22,39)] text-white py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Loved by Developers and AI Leaders Alike
        </motion.h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <div>
                <h4 className="text-lg font-bold">{testimonial.author}</h4>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
              <div className="mt-4 text-right">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Read more"
                  whileHover={{ x: 5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
