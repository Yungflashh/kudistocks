"use client";

const FOOTER_SECTIONS: Record<string, string[]> = {
  Sections: ["About us", "Features", "Testimonial", "FAQs", "Download now"],
  Company: ["Privacy & Policy", "Terms & Condition", "Help center", "Contact us"],
  Social: ["Twitter (X)", "Instagram", "Facebook", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#060a1e] text-gray-400 pt-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation Layout Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          
          {/* Brand Visual Hooks */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              Run your business
              <br />
              with confidence
            </h3>
          </div>

          {/* Links Nav Grid Matrix */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {Object.entries(FOOTER_SECTIONS).map(([title, links]) => (
              <div key={title} className="text-center xs:text-left">
                <h4 className="text-gray-200 text-xs font-semibold tracking-wider uppercase mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Graphic & Copyright Element Section */}
        <div className="relative border-t border-white/5 pt-10 mb-6 flex flex-col items-center overflow-hidden">
          <p className="text-gray-500 text-xs tracking-wide mb-8 select-none">
            © {new Date().getFullYear()} Kudistocks. All rights reserved.
          </p>
          
          {/* Bottom Large Accent Image */}
          <div className="w-full max-w-5xl flex justify-center mt-2 pointer-events-none select-none">
            <img
              src="/get-started/Layer_x0020_1.png"
              alt="Kudistocks Branding Graphic"
              className="w-full h-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}