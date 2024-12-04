"use client";

// Importing necessary assets and components
import { motion } from "framer-motion";
import { pricingTiers } from "@/constants";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          {/* Title of the section */}
          <h2 className="section-title">Pricing</h2>
          {/* Description of the pricing section */}
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        {/* Pricing tiers display */}
        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse && "border-black bg-black text-white",
                )}
                key={title}
              >
                {/* Pricing tier title and popularity indicator */}
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60",
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] bg-clip-text font-medium text-transparent [background-size:200%]"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                {/* Pricing amount display */}
                <div className="mt-[30px] flex items-baseline gap-1">
                  <span className="text-4xl font-bold leading-none tracking-tighter">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "font-bold tracking-tight text-black/50",
                      inverse && "text-white/50",
                    )}
                  >
                    /month
                  </span>
                </div>
                {/* Call to action button */}
                <button
                  className={twMerge(
                    "btn btn-primary mt-[30px] w-full",
                    inverse && "bg-white text-black",
                  )}
                >
                  {buttonText}
                </button>
                {/* List of features included in the pricing tier */}
                <ul className="mt-8 flex flex-col gap-5">
                  {features.map((feature) => (
                    <li
                      className="flex items-center gap-4 text-sm"
                      key={feature}
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
