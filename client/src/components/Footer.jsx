import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export const FooterCom = () => {
  return (
    <Footer container className="border-t-4 border-teal-500 py-10 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 space-y-8 sm:space-y-0 sm:space-x-10 lg:space-x-20 lg:px-8">
        {/* Logo and Title */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-lg text-white">
              TECH
            </span>
            BLOG
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Stay updated with the latest tech news, trends, and tutorials.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row text-center sm:text-left space-y-8 sm:space-y-0 sm:space-x-10 lg:space-x-20 lg:text-lg">
          {/* About Section */}
          <div className="flex-1">
            <Footer.Title title="About" className="text-lg font-semibold text-gray-800 dark:text-white" />
            <Footer.LinkGroup col className="mt-2 space-y-2">
              <Footer.Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Prajwal Giri
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Follow Us Section */}
          <div className="flex-1">
            <Footer.Title title="Follow Us" className="text-lg font-semibold text-gray-800 dark:text-white" />
            <Footer.LinkGroup col className="mt-2 space-y-2">
              <Footer.Link
                href="https://github.com/dhakalsameer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Github
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
          <div className="flex space-x-6">
            <Footer.Icon href="https://facebook.com" icon={BsFacebook} className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
            <Footer.Icon href="https://twitter.com" icon={BsTwitter} className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
            <Footer.Icon href="https://instagram.com" icon={BsInstagram} className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
            <Footer.Icon href="https://github.com/dhakalsameer" icon={BsGithub} className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <Footer.Copyright
          href="#"
          by="Tech Blog"
          year={new Date().getFullYear()}
          className="text-gray-600 dark:text-gray-300"
        />
      </div>
    </Footer>
  );
};

export default FooterCom;
