import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "../../assets/logo/VT.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="logotipo makamba tech" className="w-50 " />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aspernatur, officia aliquid quos alias unde facilis impedit
              adipisci omnis dolores soluta, illo sapiente tempora.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Desenvolvimento Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Desenvolvimento de APP
                </a>
              </li>
            </ul>
          </div>

          {/* Páginas */}
          {/* <div>
            <h4 className="font-semibold text-gray-900 mb-4">Páginas</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FQAs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div> */}

          {/* Redes sociais */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Social</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Instagram
                </a>
              </li>
            </ul>
            </div>
            
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact us</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                hello@whitespace.design
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 000-0000
              </div>
              <div className="text-sm text-gray-600">
                3399 Ranchview
                <br />
                Dr. Richardson, CA 62639
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 Whitespace UI - All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
