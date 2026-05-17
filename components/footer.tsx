import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#demo" },
    { label: "Security", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:hello@missfloss.ai" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "PIPEDA Compliance", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center shadow-[0_2px_10px_rgba(13,148,136,0.3)]">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path
                    d="M12 2C9 2 6.5 4.5 6.5 7.5c0 2.2 1.3 4.1 3.2 5V21h4.6v-8.5c1.9-.9 3.2-2.8 3.2-5C17.5 4.5 15 2 12 2z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-base font-semibold text-slate-900">
                Miss Floss
              </span>
            </Link>
            <p className="text-base text-slate-500 leading-relaxed max-w-xs mb-6">
              The AI voice receptionist built for Canadian dental clinics.
              24/7 availability, human-like conversations, instant bookings.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <span>📍 Toronto, Ontario, Canada</span>
              <a
                href="mailto:hello@missfloss.ai"
                className="hover:text-teal-600 transition-colors"
              >
                ✉️ hello@missfloss.ca
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-slate-500 hover:text-slate-900 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Miss Floss Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">
              AI Receptionist for Dental Clinics · Toronto &amp; GTA · Canada
            </span>
            <span className="w-1 h-1 rounded-full bg-teal-400" />
            <span className="text-sm text-teal-600 font-medium">PIPEDA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
