import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechSphere</h3>
            <p className="text-gray-400 mb-4">
              Innovative IT solutions for businesses of all sizes. We help
              transform your digital presence with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/people"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/expertise/mobile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/web"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/data"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Data Management
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/fintech"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fintech Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/healthcare"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Healthcare IT
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/retail"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Retail Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  FENERBAHÇE MAH. HACI MEHMETEFENDİ SK. DALYAN SİTESİ B NO: 24/2
                  İÇ KAPI NO: 3
                  <br />
                  KADIKÖY - İSTANBUL
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">+90 555 555 55 55</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a
                  href="mailto:info@dsnext.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@dsnext.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DSNext. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
