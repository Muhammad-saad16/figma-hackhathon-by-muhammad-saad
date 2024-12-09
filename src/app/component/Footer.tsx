import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-white pt-12 pb-6 px-4 sm:px-10 font-sans tracking-wide">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div>
              <a className="flex title-font font-medium items-center text-gray-900 mb-4">
                <span className="text-3xl text-blue-600 font-sans font-semibold">
                  MORENT
                </span>
              </a>
              <p className="mt-4 text-gray-500 text-sm">
                Our vision is to provide convenience
                <br />
                and help increase your sales business.
              </p>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-black text-sm uppercase font-semibold mb-4">
                About
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Partnership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h2 className="text-black text-sm uppercase font-semibold mb-4">
                Community
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Section */}
            <div>
              <h2 className="text-black text-sm uppercase font-semibold mb-4">
                Social
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black text-sm transition-all"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-12 mb-6 border-gray-200" />

          {/* Footer Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              ©{currentYear} MORENT. All rights reserved.
            </p>

            {/* Privacy Links */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-black text-sm transition-all"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-black text-sm transition-all"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
