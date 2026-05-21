import React from "react";

const Skills = () => {
  const skillList = [
    { 
      name: "HTML5", 
      level: "Advanced", 
      glowColor: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_25px_rgba(244,91,10,0.15)]",
      textColor: "group-hover:text-orange-400",
      iconPath: "M2 2h20l-2 18-8 4-8-4L2 2zm16.5 4.5H5.5l.4 4.5h10.2l-.4 4.5-3.7 1.2-3.7-1.2-.2-2.5H5.7l.4 5.5 5.9 2 5.9-2 .7-8.5H6.2l-.2-2.5h12.8l-.1-2z" 
    },
    { 
      name: "CSS3", 
      level: "Advanced", 
      glowColor: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_25px_rgba(33,150,243,0.15)]",
      textColor: "group-hover:text-blue-400",
      iconPath: "M2 2h20l-2 18-8 4-8-4L2 2zm16.3 4.5H8.3l-.2-2.5h10.4l-.3 3H6.2l.2 2.5h9.3l-.4 3.5-3.3 1.2-3.3-1.2-.2-2.5H6.1l.3 5 5.6 1.8 5.6-1.8.7-8.5z" 
    },
    { 
      name: "JavaScript", 
      level: "Intermediate", 
      glowColor: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]",
      textColor: "group-hover:text-yellow-400",
      iconPath: "M2 2h20v20H2V2zm11.8 11.2c0-1.5-.7-2.3-2-2.3-.9 0-1.6.5-1.8 1l-1.3-.8c.5-.9 1.4-1.6 3.1-1.6 2.2 0 3.4 1.1 3.4 3.1v3.8c0 .4.1.8.3 1v.2h-1.5c-.1-.2-.2-.5-.2-.9-.4.6-1.2 1.1-2.3 1.1-1.7 0-2.8-1-2.8-2.4 0-1.6 1.2-2.3 3.4-2.3h1.8v-.1zm-1.8 1.3h-1.6c-.8 0-1.4.3-1.4 1 0 .6.5 1 1.3 1 1.1 0 1.7-.7 1.7-1.8v-.2z" 
    },
    { 
      name: "React", 
      level: "Learning", 
      glowColor: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
      textColor: "group-hover:text-cyan-400",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" 
    },
    { 
      name: "Tailwind CSS", 
      level: "Advanced", 
      glowColor: "group-hover:border-sky-400/50 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]",
      textColor: "group-hover:text-sky-400",
      iconPath: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 5.999 12z" 
    },
    { 
      name: "Node.js", 
      level: "Learning", 
      glowColor: "group-hover:border-green-500/50 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]",
      textColor: "group-hover:text-green-400",
      iconPath: "M12 2L3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2zm6.7 14.1l-6.7 3.9-6.7-3.9V7.9l6.7-3.9 6.7 3.9v8.2z" 
    },
    { 
      name: "Git & GitHub", 
      level: "Intermediate", 
      glowColor: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
      textColor: "group-hover:text-purple-400",
      iconPath: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" 
    },
    { 
      name: "Python", 
      level: "Intermediate", 
      glowColor: "group-hover:border-indigo-400/50 group-hover:shadow-[0_0_25px_rgba(129,140,248,0.15)]",
      textColor: "group-hover:text-indigo-400",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.8 14.5c-.6 0-1.1-.4-1.1-1v-2.3h-2.3c-.6 0-1-.5-1-1.1v-.8c0-.6.4-1.1 1-1.1h2.3V7.9c0-.6.5-1.1 1.1-1.1h.8c.6 0 1.1.5 1.1 1.1v2.3h2.3c.6 0 1 .5 1 1.1v.8c0 .6-.4 1.1-1 1.1h-2.3v2.3c0 .6-.5 1.1-1.1 1.1h-.8z" 
    }
  ];

  return (
    <section className="bg-blue-950 text-slate-100 py-20 md:py-28 px-6 font-sans relative overflow-hidden flex items-center justify-center min-h-screen">
      
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto space-y-12 relative z-10">
        
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

        {/* Skills Grid Layout - Optimized to 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-2">
          {skillList.map((skill, index) => (
            <div 
              key={index}
              className={`group flex items-center justify-between bg-slate-900/40 border border-slate-900/80 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 ${skill.glowColor}`}
            >
              <div className="flex flex-col space-y-1.5">
                {/* Skill Name */}
                <span className={`text-base md:text-xl font-bold text-slate-200 transition-colors duration-300 ${skill.textColor}`}>
                  {skill.name}
                </span>
                {/* Tech Badge Status */}
                <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
                  {skill.level}
                </span>
              </div>
              
              {/* Dynamic Tailwind SVG Icon Engine */}
              <svg 
                className={`h-7 w-7 text-slate-600 transition-all duration-300 group-hover:scale-110 ${skill.textColor}`} 
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