import React from "react";

const Education = () => {
  return (
    /* OPTIMIZED: Kept min-h-screen and reduced vertical padding for pristine full-screen centering */
    <section className="bg-blue-950 text-slate-100 min-h-screen flex items-center justify-center px-6 py-12 font-sans selection:bg-red-500/30">
      <div className="max-w-3xl w-full space-y-10">
        
        {/* Header Block */}
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-bold tracking-widest text-red-500 uppercase">
            Academic Journey
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Education
          </h2>
          {/* Neon Gradient Accent Line */}
          <div className="h-[3px] w-20 bg-gradient-to-r from-red-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-[2px] border-slate-800 pl-8 ml-3 space-y-12">
          
          {/* Card 1: Diploma */}
          <div className="relative group">
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[39px] top-1.5 bg-slate-950 h-5 w-5 rounded-full border-4 border-purple-500 group-hover:border-red-500 shadow-[0_0_8px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_12px_rgba(239,68,68,0.8)] transition-all duration-300 z-10" />
            
            {/* Glassmorphism Content Card */}
            <div className="bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(168,85,247,0.05)]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                    Diploma in Computer Engineering
                  </h3>
                  <p className="text-purple-400 font-medium text-sm md:text-base mt-1.5">
                    Government Women's Polytechnic College, Kaimanam
                  </p>
                </div>
                {/* Premium Dark Badge */}
                <span className="inline-block bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto shadow-inner">
                  2024 — 2027
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Higher Secondary */}
          <div className="relative group">
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[39px] top-1.5 bg-slate-950 h-5 w-5 rounded-full border-4 border-slate-700 group-hover:border-red-500 transition-all duration-300 z-10" />
            
            {/* Glassmorphism Content Card */}
            <div className="bg-slate-900/40 border border-slate-800/80 hover:border-red-500/40 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(239,68,68,0.05)]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-300 group-hover:text-white transition-all duration-300">
                    Higher Secondary Education
                  </h3>
                  <p className="text-slate-400 font-medium text-sm md:text-base mt-1.5">
                    Government Technical High School, Mancha, Nedumangadu
                  </p>
                </div>
                <span className="inline-block bg-slate-800 border border-slate-700 text-slate-400 text-xs md:text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                  Completed
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;