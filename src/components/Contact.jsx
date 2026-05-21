import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-950 text-slate-100 py-20 px-6 font-sans relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      
      {/* Background Ambient Radial Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto relative z-10">
        
        {/* Main High-Fidelity Card Container */}
        <div className="relative overflow-hidden bg-slate-900/30 border border-slate-900 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:shadow-[0_12px_40px_rgba(239,68,68,0.04)]">
          
          {/* Decorative Corner Ambient Patch */}
          <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-gradient-to-tr from-purple-500/10 to-red-500/0 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-8">
            
            {/* Header Block */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <p className="uppercase tracking-[0.25em] text-red-500 text-xs md:text-sm font-bold">
                  Contact
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-purple-500">Touch</span>
              </h2>

              {/* Neon Gradient Accent Divider */}
              <div className="h-[3px] w-20 bg-gradient-to-r from-red-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.4)]" />
            </div>

            {/* Description Subtext */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              I’m always open to discussing new opportunities, collaborations,
              and innovative frontend engineering projects. Feel free to reach out anytime.
            </p>

            {/* Structured Contact Block */}
            <div className="space-y-4 pt-4">

              {/* Email Entry Line */}
              <div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-slate-950/40 border border-slate-900 rounded-2xl p-5 hover:border-slate-800 transition-all duration-300">
                <div className="flex items-center gap-3 min-w-[120px]">
                  {/* Email Vector Icon */}
                  <svg className="w-5 h-5 text-red-500/70 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.92V6.75" />
                  </svg>
                  <span className="text-slate-300 font-bold text-sm tracking-wide uppercase">Email</span>
                </div>

                <a
                  href="mailto:srilakshmias08@gmail.com"
                  className="text-slate-300 text-base md:text-lg hover:text-red-400 transition duration-200 break-all underline underline-offset-4 decoration-slate-800 hover:decoration-red-400/50"
                >
                  srilakshmias08@gmail.com
                </a>
              </div>

              {/* Mobile Number Entry Line */}
<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-slate-950/40 border border-slate-900 rounded-2xl p-5 hover:border-slate-800 transition-all duration-300">
  <div className="flex items-center gap-3 min-w-[120px]">
    
    {/* Phone Vector Icon */}
    <svg
      className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.384 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.384-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L7.962 3.102A1.125 1.125 0 006.872 2.25H5.5A2.25 2.25 0 003.25 4.5v2.25z"
      />
    </svg>

    <span className="text-slate-300 font-bold text-sm tracking-wide uppercase">
      Phone
    </span>
  </div>

  <a
    href="tel:+918089501511"
    className="text-slate-300 text-base md:text-lg hover:text-green-400 transition duration-200"
  >
    +91 80895 01511
  </a>
</div>

              {/* Location Entry Line */}
              <div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-slate-950/40 border border-slate-900 rounded-2xl p-5 hover:border-slate-800 transition-all duration-300">
                <div className="flex items-center gap-3 min-w-[120px]">
                  {/* Location Pin Vector Icon */}
                  <svg className="w-5 h-5 text-purple-500/70 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z" />
                  </svg>
                  <span className="text-slate-300 font-bold text-sm tracking-wide uppercase">Location</span>
                </div>

                <span className="text-slate-400 text-base md:text-lg">
                  Kerala, India
                </span>
              </div>

            </div>

            {/* Primary Action Button Trigger */}
            <div className="pt-4">
              <a
                href="mailto:srilakshmias08@gmail.com"
                className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold tracking-wide hover:from-red-600 hover:to-red-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-red-600/20 text-center"
              >
                Send Message
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;