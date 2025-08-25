"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full min-h-[80vh] bg-slate-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-100">
            Cortex - LMS
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left max-w-xs">
            A modern platform to make your learning more organized, engaging,
            and effective.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-700 dark:text-gray-300">
          <a
            href="#features"
            className="hover:text-indigo-500 transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-indigo-500 transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="p-2 rounded-full bg-indigo-500 text-white hover:scale-110 transition-transform">
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="p-2 rounded-full bg-indigo-500 text-white hover:scale-110 transition-transform">
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:someone@email.com"
            className="p-2 rounded-full bg-indigo-500 text-white hover:scale-110 transition-transform">
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Bottom small note */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Cortex - LMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
