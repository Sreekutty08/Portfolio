import React from "react";

const About = () => {
  // Extracting skills array keeps the layout cleaner and easy to update
  const computationalSkills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Frontend",
    "UI/UX Frameworks",
  ];

  return (
    /* FIXED: Corrected classNaAme typo and ensured deep blue background */
    <section className="bg-blue-950 py-20 px-6 font-sans relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="max-w-4xl w-full mx-auto">
        
        {/* Dynamic Interactive Card Container */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-900 bg-slate-900/40 p-8 md:p-14 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:shadow-[0_10px_40px_rgba(239,68,68,0.06)]">
          
          {/* Advanced Background Radial Mesh Glows */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Core Text Wrapper */}
          <div className="relative z-10 space-y-8">
            
            {/* Small Title */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              <p className="uppercase tracking-[0.25em] text-red-500 text-xs md:text-sm font-bold">
                About Me
              </p>
            </div>

            {/* Main Title Heading */}
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Crafting Modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-purple-500">
                Web Experiences
              </span>
            </h2>

            {/* Horizontal Line Break */}
            <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-red-500 to-purple-600 shadow-[0_0_10px_rgba(239,68,68,0.4)]" />

            {/* High Fidelity Description Bio */}
            <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-3xl font-normal">
              Hi, I’m{" "}
              <span className="text-white font-semibold tracking-wide">
                Srilakshmi A S
              </span>
              , a passionate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-semibold">
                Computer Engineer
              </span>{" "}
              focused on building elegant, responsive, and user-friendly web
              applications. I enjoy blending structural computation with creative visual layout design to
              deliver seamless frontend engineering systems.
            </p>

            {/* Interactive Dynamic Skill Cards */}
            <div className="flex flex-wrap gap-3 pt-2">
              {computationalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-sm font-medium hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-500/20 hover:text-white hover:border-red-500/50 transition-all duration-300 cursor-pointer shadow-sm select-none"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Semantic Layout Button Trigger */}
            <div className="pt-4">
              <a 
                href="#projects"
                className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold tracking-wide hover:from-red-600 hover:to-red-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-red-600/20 text-center"
              >
                View Portfolio
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;