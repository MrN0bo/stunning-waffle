import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MessageCircle, Facebook, Phone, MapPin, Moon, Sun } from "lucide-react";
import { contactInfo } from "../data";
import logoImg from "../../imports/UPJ.png";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="sticky top-0 z-50 w-full bg-green-700 text-white shadow-md transition-colors duration-200 dark:bg-gray-900">
      <div className="bg-green-900 py-1 text-xs dark:bg-black">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> {contactInfo.phoneDisplay}</span>
            <span className="flex items-center gap-1 hidden sm:flex"><MapPin size={14} /> {contactInfo.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <Facebook size={14} /> Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between min-h-[5rem]">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="h-16 w-auto object-contain" />
          <div className="flex items-center gap-2 justify-center h-full font-['Outfit'] hidden sm:flex">
            <span className="font-bold text-3xl tracking-tight leading-none text-yellow-400 uppercase drop-shadow-sm">Usados de Primera</span>
            <span className="font-black text-3xl leading-none text-white uppercase drop-shadow-sm">John</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 font-medium text-lg">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Inicio</Link>
          <Link to="/tienda" className="hover:text-yellow-400 transition-colors">Tienda</Link>
          <Link to="/restauracion" className="hover:text-yellow-400 transition-colors">Restauración</Link>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="px-3 py-2 rounded-full hover:bg-green-600 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 border border-transparent hover:border-yellow-400 font-medium"
            title="Alternar Modo"
          >
            {isDarkMode ? (
              <><Sun size={18} className="text-yellow-400" /> Claro</>
            ) : (
              <><Moon size={18} /> Oscuro</>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}