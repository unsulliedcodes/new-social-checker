import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Social Check</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted tool for checking social media account creation dates
              and analyzing profiles. Find social media account age online with
              our comprehensive suite of tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tools"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Account Age Checker
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/profile-analysis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Profile Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/verification"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Account Verification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Social Check. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Check social media account creation date online
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;