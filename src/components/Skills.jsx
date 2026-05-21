import React from "react";

const Skills = () => {
  const skillList = [
    { 
      name: "HTML5", 
      level: "Advanced", 
      glowColor: "group-hover:border-orange-500/50",
      textColor: "group-hover:text-orange-400",
      iconPath: "M2 2h20l-2 18-8 4-8-4L2 2zm16 4H6l.5 5h10.5l-.5 5-4.5 2-4.5-2-.2-2h2.5l.1 1 2.1.8 2.1-.8.3-2.5H6.3l-.4-5h12.5l-.1-1.5z" 
    },
    { 
      name: "CSS3", 
      level: "Advanced", 
      glowColor: "group-hover:border-blue-500/50",
      textColor: "group-hover:text-blue-400",
      iconPath: "M2 2h20l-2 18-8 4-8-4L2 2zm16 4H6.3l.2 2.5h11.2l-.3 3H6.8l.2 2.5h9.3l-.4 3.5-3.9 1.5-3.9-1.5-.2-2.5H5.8l.3 5 5.9 2 5.9-2 .5-6.5h.1l.4-4.5.1-1.5z" 
    },
    { 
      name: "JavaScript", 
      level: "Intermediate", 
      glowColor: "group-hover:border-yellow-500/50",
      textColor: "group-hover:text-yellow-400",
      iconPath: "M2 2h20v20H2V2zm18 13.7c0-1.7-.8-2.6-2.3-2.6-1.1 0-1.8.6-2.1 1.2l-1.4-.9c.6-1 1.6-1.8 3.5-1.8 2.5 0 3.9 1.3 3.9 3.6v4.3c0 .5.1.9.3 1.1V19h-1.7c-.1-.2-.2-.6-.2-1-.5.7-1.4 1.2-2.6 1.2-1.9 0-3.1-1.1-3.1-2.7 0-1.8 1.4-2.6 3.8-2.6h2.3v-.2zm-2.3 1.4h-2.1c-.9 0-1.6.4-1.6 1.2 0 .7.6 1.2 1.5 1.2 1.2 0 2.2-.8 2.2-2.1v-.3z" 
    },
    { 
      name: "React", 
      level: "Learning", 
      glowColor: "group-hover:border-cyan-500/50",
      textColor: "group-hover:text-cyan-400",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.66 1.34 3 3 3v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.66 0 3-1.34 3-3v-.17c2.47 1.44 4.15 4.01 4.15 6.97 0 2.58-1.22 4.88-3.15 6.39z" 
    }
  ];

  return (
    /* UPDATED: Changed min-h-[60vh] to min-h-screen and adjusted padding for vertical symmetry */
    <section className="bg-blue-950 text-slate-100 py-24 px-6 font-sans relative overflow-hidden flex items-center justify-center min-h-screen">
      
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto space-y-10 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-bold tracking-widest text-red-500 uppercase">
            Technical Stack
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Skills & Tools
          </h2>
          {/* Neon Gradient Accent Line */}
          <div className="h-[3px] w-20 bg-gradient-to-r from-red-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.4)]" />
        </div>

        {/* Skills Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {skillList.map((skill, index) => (
            <div 
              key={index}
              className={`group flex items-center justify-between bg-slate-900/40 border border-slate-900/80 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 ${skill.glowColor} hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
            >
              <div className="flex flex-col space-y-1">
                {/* Skill Name */}
                <span className={`text-base md:text-xl font-bold text-slate-200 transition-colors duration-300 ${skill.textColor}`}>
                  {skill.name}
                </span>
                {/* Tech Badge Status */}
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                  {skill.level}
                </span>
              </div>
              
              {/* Dynamic Tailwind SVG Icon Engine */}
              <svg 
                className={`h-6 w-6 text-slate-600 transition-all duration-300 group-hover:scale-110 ${skill.textColor}`} 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d={skill.iconPath} />
              </svg>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;