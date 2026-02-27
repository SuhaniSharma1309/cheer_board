import React from "react";

const HeroSectionTextHover: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/flower.jpg')] bg-cover bg-center hero-zoom"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold max-w-4xl leading-tight">
          Happy Teachers Create Happy Classrooms.
        </h1>

        <p className="text-gray-200 mt-6 text-lg max-w-2xl">
          Supporting educator wellbeing through reflection, mindful habits, and daily joy.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">

            Login
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition duration-300">
            Sign Up
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionTextHover;