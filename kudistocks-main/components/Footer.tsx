const FOOTER_SECTIONS: Record<string, string[]> = {
  Sections: ["About us", "Features", "Testimonial", "FAQs", "Download now"],
  Company: ["Privacy & Policy", "Terms & Condition", "Help center", "Contact us"],
  Social: ["Twitter (X)", "Instagram", "Facebook", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#060a1e] text-gray-400 pt-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="lg:w-1/3">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Run your business
              <br />
              with confidence
            </h3>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_SECTIONS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-gray-500 text-sm font-medium mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
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

        <div className="relative bg-[#0a0e17] rounded-t-3xl px-6 pt-10 pb-0 flex flex-col items-center overflow-hidden">
          <p className="text-gray-600/70 text-xs md:text-sm tracking-wide mb-8">
            © 2025. All rights reserved
          </p>
          <img
            src="/get-started/Layer_x0020_1.png"
            alt="Kudistocks"
            className="w-full max-w-5xl object-contain opacity-90 select-none -mb-2 md:-mb-4"
          />
        </div>
      </div>
    </footer>
  );
}
