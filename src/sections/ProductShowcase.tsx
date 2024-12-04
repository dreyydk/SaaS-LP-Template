"use client";

// Importing necessary assets and components
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            {/* Tagline for the section */}
            <div className="tag">Boost your productivity</div>
          </div>
          {/* Main title of the section */}
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          {/* Description paragraph */}
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        {/* Image display area */}
        <div className="relative">
          {/* Main product image */}
          <Image src={productImage} alt="Product image" className="mt-10" />
          {/* Pyramid image displayed conditionally on medium screens and above */}
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{ translateY }}
          />
          {/* Tube image displayed conditionally on medium screens and above */}
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
