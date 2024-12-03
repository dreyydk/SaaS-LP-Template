// Importing necessary assets and components
import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        {/* Flex container for scrolling logos */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex flex-none gap-14">
            {/* Logo images displayed in the ticker */}
            <Image
              src={acmeLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex logo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
