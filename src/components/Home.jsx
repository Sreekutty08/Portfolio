import React from 'react';

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-950 text-slate-100 px-6 py-20 lg:py-0 font-sans overflow-hidden">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Container Split Into Columns on Desktop */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Core Text Content Block (Spans 7 out of 12 columns) */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8 order-2 lg:order-1">
          
          {/* Intro Subheading with subtle pill outline */}
          <div className="inline-block px-4 py-1.5 bg-slate-900/80 border border-slate-800 rounded-full backdrop-blur-md shadow-sm">
            <p className="text-xs md:text-sm font-bold tracking-widest text-red-500 uppercase flex items-center gap-1.5 justify-center lg:justify-start">
              🚀 Welcome to my portfolio
            </p>
          </div>

          {/* Main Name Heading with Ultra-Premium Gradient */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-purple-500 drop-shadow-[0_2px_20px_rgba(239,68,68,0.2)]">
              Srilakshmi
            </span>
          </h1>

          {/* Professional Title Subheading */}
          <p className="text-xl md:text-3xl font-bold tracking-tight text-slate-200">
            Frontend Developer <span className="text-purple-400">&</span> Computer Engineer
          </p>

          {/* Short, Impactful Bio Paragraph */}
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            I enjoy creating modern, responsive websites with a strong focus on clean UI design, 
            smooth animations, and user-friendly web experiences. Currently building next-generation digital products.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 max-w-md mx-auto sm:max-w-none">
            {/* Main Primary Glowing Button */}
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 text-white font-semibold bg-gradient-to-r from-red-500 to-purple-600 rounded-xl shadow-[0_4px_20px_rgba(239,68,68,0.25)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
            >
              View My Work
            </a>
            
            {/* Glassmorphic Secondary Button */}
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 text-slate-200 font-semibold bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl backdrop-blur-sm transition-all duration-200 text-center"
            >
              Let's Talk
            </a>
          </div>

        </div>

        {/* RIGHT SIDE: Dynamic Image Frame Container (Spans 5 out of 12 columns) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] aspect-square">
            
            {/* Soft Ambient Shadow Backdrop Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-rose-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
            
            {/* Core Image Canvas Layer */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              
              {/* IMPLEMENTED: Image element with defensive scaling attributes */}
              <img 
                src="images/about.png" 
                alt="Srilakshmi Profile" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Sleek Gradient Overlay Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;