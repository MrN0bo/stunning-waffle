import { MessageCircle, Facebook, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../data";
import { Link } from "react-router-dom";
import logoImg from "../../imports/UPJ.png";

export function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 pt-12 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoImg} alt="UPJ" className="w-20 h-20 object-contain" />
            <span className="font-bold text-2xl text-white">Usados de Primera John</span>
          </div>
          <p className="text-green-200 text-sm mb-4">
            Tu mejor opción para artículos usados de calidad para el hogar. Electrodomésticos, sanitarios, sillas, puertas y mucho más a los mejores precios.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-white text-lg mb-4 border-b border-green-700 pb-2">Categorías</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/categoria/electrodomesticos" className="hover:text-yellow-400 transition-colors">Electrodomésticos</Link></li>
            <li><Link to="/categoria/sanitarios" className="hover:text-yellow-400 transition-colors">Sanitarios</Link></li>
            <li><Link to="/categoria/sillas" className="hover:text-yellow-400 transition-colors">Sillas</Link></li>
            <li><Link to="/categoria/puertas" className="hover:text-yellow-400 transition-colors">Puertas</Link></li>
            <li><Link to="/categoria/otros" className="hover:text-yellow-400 transition-colors">Otros Elementos</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-white text-lg mb-4 border-b border-green-700 pb-2">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-yellow-400 shrink-0" size={18} />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-yellow-400 shrink-0" size={18} />
              <span>{contactInfo.phoneDisplay}</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="text-yellow-400 shrink-0" size={18} />
              <a href={`https://wa.me/${contactInfo.whatsapp}`} className="hover:text-yellow-400 underline decoration-green-600 underline-offset-4">Contáctanos por WhatsApp</a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="text-yellow-400 shrink-0" size={18} />
              <a href={contactInfo.facebook} className="hover:text-yellow-400 underline decoration-green-600 underline-offset-4">Síguenos en Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 border-t border-green-800 pt-6 text-center text-sm text-yellow-400 font-medium">
        &copy; {new Date().getFullYear()} Usados de Primera John. Todos los derechos reservados.
      </div>
    </footer>
  );
}