import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "../../imports/1.jpeg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Inicio() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <ImageWithFallback 
            src={heroImg}
            alt="Fondo de negocio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
            Usados de Primera John
          </h1>
          <p className="text-2xl md:text-4xl mb-10 text-yellow-400 drop-shadow-md font-bold">
            Lo bueno no tiene que ser nuevo
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tienda" className="px-8 py-4 bg-yellow-400 text-green-900 font-bold rounded-full hover:bg-yellow-300 transition-colors text-lg shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2">
              Visitar la Tienda <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-6">¿Quiénes somos?</h2>
            <div className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                <strong>Usados de Primera John</strong> es un negocio familiar que nació con la visión de darle una segunda oportunidad a los artículos del hogar, ofreciendo productos de alta calidad a precios accesibles para todos los bolsillos.
              </p>
              <p>
                Ubicados en el corazón de Villavicencio, nos hemos dedicado por años a la compra, restauración y venta de electrodomésticos, sanitarios, muebles y materiales para el hogar. Creemos firmemente que <span className="text-green-700 dark:text-green-400 font-semibold">lo bueno no tiene que ser nuevo</span>.
              </p>
              <p>
                Nuestro compromiso es con la economía de tu hogar y con el medio ambiente, promoviendo la reutilización y reduciendo el desperdicio. Cada artículo que llega a nuestras manos es revisado y garantizado para asegurar su funcionalidad.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Nuestros Valores</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Calidad Garantizada</h4>
                    <p className="text-gray-600 dark:text-gray-400">Seleccionamos cuidadosamente cada artículo de nuestro catálogo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Precios Justos</h4>
                    <p className="text-gray-600 dark:text-gray-400">Cuidamos tu bolsillo ofreciendo las mejores ofertas del mercado.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Atención Personalizada</h4>
                    <p className="text-gray-600 dark:text-gray-400">Te asesoramos para que encuentres exactamente lo que necesitas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}