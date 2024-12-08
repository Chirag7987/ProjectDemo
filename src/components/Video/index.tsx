"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <motion.div
                  className="absolute right-0 top-0 flex h-full w-full items-center justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              autoPlay
              loop
              src="https://res.cloudinary.com/dmky9t4sr/video/upload/v1733649711/36784-412873690_small_hekmfc.mp4"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
