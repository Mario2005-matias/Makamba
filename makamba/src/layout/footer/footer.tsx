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
    <footer className="bg-white mt-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="logotipo makamba tech" className="w-50 " />
            </div>
            <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed mb-6">
             Somos a Makamba Tec, uma agência que une a potência da tecnologia com a essência da cultura africana, criando soluções de marketing inovadoras, autênticas e conectadas às raízes. Atuamos para transformar ideias em experiências marcantes, respeitando as identidades culturais e promovendo o desenvolvimento digital com alma africana.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  Desenvolvimento Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  Desenvolvimento de APP
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-4">Social</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 text-sm"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold dark:text-gray-200 text-gray-900 mb-4">Contacta-nos</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm dark:text-gray-300 text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                makamba@tec.com
              </div>
              <div className="flex items-center text-sm dark:text-gray-300 text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                (+244) 923-123-231
              </div>
              <div className="text-sm dark:text-gray-300 text-gray-600">
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-200 text-sm">
            © 2025 Makamba Tech - Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 dark:text-gray-200 hover:text-gray-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-200 hover:text-gray-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-200 hover:text-gray-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-200 hover:text-gray-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
