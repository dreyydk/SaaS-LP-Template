// Importing necessary assets and components
import Image from "next/image";
import { testimonials } from "@/constants";
import { twMerge } from "tailwind-merge";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "mt-10 flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className,
    )}
  >
    {/* Mapping through testimonials to display each one */}
    {props.testimonials.map(({ text, imageSrc, name, username }) => (
      <div className="card" key={name}>
        {/* Testimonial text */}
        <div>{text}</div>
        <div className="mt-5 flex items-center gap-2">
          {/* User image and details */}
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium leading-5 tracking-tight">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
