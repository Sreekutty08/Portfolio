import React from "react";

// FIX: Moved array outside component to optimize React rendering performance
const projectsList = [
  {
    title: "Doctor Appointment Booking App",
    // FIX: Removed duplicated text overlay in the description string
    description: "A secure, responsive digital health platform engineered to automate patient scheduling, optimize real-time clinical workflows, and bridge the communication gap between healthcare providers and patients through intuitive dashboard interfaces.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    liveLink: "#",   
    githubLink: "#", 
  }
];

const Project = () => {
  return (
    <section className="bg-blue-950 text-slate-100 py-16 md:py-24 px-6 font-sans relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      
      {/* Background Ambience Soft Mesh Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto space-y-10 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-bold tracking-widest text-red-500 uppercase">
            Featured Creations
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Projects
          </h2>
          {/* Neon Gradient Accent Line */}
          <div className="h-[3px] w-20 bg-gradient-to-r from-red-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.4)]" />
        </div>

        {/* Project Grid Map Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              // FIX: Changed 'bg-slade-900/30' to 'bg-slate-900/30'
              className="group relative overflow-hidden rounded-2xl bg-slate-900/30 border border-slate-900 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-red-500/30 hover:shadow-[0_12px_40px_rgba(239,68,68,0.05)]"
            >
              {/* Subtle inner card accent overlay glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-red-500/10 to-purple-500/0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Project Header Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-red-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Project Core Summary Text */}
                <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills Section */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-semibold px-3 py-1 bg-red-500/5 text-red-400 rounded-lg border border-red-500/10 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Link Panel */}
                <div className="flex items-center gap-6 mt-8 pt-5 border-t border-slate-900 text-sm font-semibold">
                  {/* Live Deployment Link */}
                  <a 
                    href={project.liveLink} 
                    className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors duration-200 group/link"
                  >
                    Live Demo
                    <svg className="w-4 h-4 transform transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                  
                  {/* Codebase Repository Link */}
                  <a 
                    href={project.githubLink} 
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;