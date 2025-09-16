import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerSections = [
    {
      title: "GMSDetails",
      items: [
        { name: "About us", link: "/about", isInternal: true },
        { name: "Services", link: "/services", isInternal: true },
        { name: "Gallery", link: "/gallery", isInternal: true },
        { name: "Testimonials", link: "/testimonials", isInternal: true },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { name: "Home", link: "/", isInternal: true },
        { name: "Book Now", link: "/contact", isInternal: true },
        
      ],
    },
    {
      title: "Contact",
      items: [
        { name: "Dooravani Nagar, Bengaluru", link: "#", isInternal: false },
        { name: "+91 7619360036", link: "tel:+917619360036", isInternal: false },
        { name: "+91 7619360037", link: "tel:+917619360037", isInternal: false },
        { name: "gmscarmodifiers@gmail.com", link: "mailto:gmscarmodifiers@gmail.com", isInternal: false },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Top Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
      {footerSections.map((section) => (
        <div key={section.title} className="mb-6 md:mb-0">
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2 md:space-y-3">
            {section.items.map((item) => (
              <li key={item.name}>
                {item.isInternal ? (
                  <Link
                    to={item.link}
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Social Media */}
      <div className="mb-6 md:mb-0">
        <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Follow Us</h3>
        <div className="flex gap-3 md:gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/gmscarmodifiers_official?igsh=MTZvd2lxeTV4MW5oeg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
        © {new Date().getFullYear()} GMS. All rights reserved.
      </p>
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
        <Link
         to="/privacy-policy"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-of-service"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm"
        >
          Terms of Service
        </Link>
        <Link
          to="/cookie-policy"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm"
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
