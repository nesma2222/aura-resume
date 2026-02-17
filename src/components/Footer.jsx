import { Sparkles } from "lucide-react";

const footerData = {
  resources: [
    { name: "Resume Builder", url: "#" },
    { name: "Resume Formatting", url: "#" },
    { name: "Resume Writing", url: "#" },
    { name: "Professional Resume", url: "#" },
    { name: "Student Resume", url: "#" }
  ],
  support: [
    { name: "Privacy Policy", url: "#" },
    { name: "Cookie Policy", url: "#" },
    { name: "Terms & Conditions", url: "#" },
    { name: "Contact Us", url: "#" }
  ],
  payments: ["VISA", "MasterCard", "PayPal"]
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 pt-20 pb-10 mt-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Grid Layout */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-4">
              <div className="bg-peach-500 p-1.5 rounded-lg text-white">
                <Sparkles size={22} />
              </div>
              <span>
                Aura<span className="text-peach-400">Resume</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              We help job seekers stand out and build professional resumes that
              create strong first impressions.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>

            <ul className="space-y-2 text-slate-400">
              {footerData.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="hover:text-peach-400 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Support</h3>

            <ul className="space-y-2 text-slate-400">
              {footerData.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="hover:text-peach-400 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>

            <p className="text-slate-400 text-sm">
              © 2026 AuraResume <br />
              All rights reserved.
            </p>

            <p className="text-slate-400 text-sm mt-3">
              Email: support@auraresume.com
            </p>

            {/* Payment Icons */}
            <div className="flex gap-4 mt-6 text-slate-500 text-xs">
              {footerData.payments.map((payment) => (
                <div
                  key={payment}
                  className="bg-slate-700 px-3 py-1 rounded"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-16 pt-6 text-center text-slate-500 text-sm">
          Designed with ❤️ for AuraResume users
        </div>

      </div>
    </footer>
  );
}
