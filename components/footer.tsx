"use client";

import { motion } from "framer-motion";

// Dummy DATA to avoid errors
const DATA = {
  footer: {
    name: "Portfolio",
    description: "My portfolio website",
    contact: { email: "email@example.com", phone: "1234567890", location: "Earth" },
    socialLinks: [],
    services: ["Web Development", "UI/UX Design"],
  },
};

export const Footer = () => {
  const { name, description, contact, socialLinks, services } = DATA.footer;

  return (
    <footer className="bg-gray-800 py-12 text-white">
      <motion.div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="mb-4">{description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: {contact.email}</li>
              <li>Phone: {contact.phone}</li>
              <li>Location: {contact.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {name}. Made with ❤️.</p>
        </div>
      </motion.div>
    </footer>
  );
};
