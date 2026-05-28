import { Link } from "react-router-dom";
import { ArrowRight, Wrench, PaintBucket, Clock, ShieldCheck } from "lucide-react";
import heroImg from "../../imports/1.jpeg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { contactInfo } from "../data";

export function Restauracion() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <ImageWithFallback 
            src={heroImg}
            alt="Fondo de restauración"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
            Servicio de Restauración
          </h1>
          <p className="text-2xl md:text-4xl mb-10 text-yellow-400 drop-shadow-md font-bold">
            Dale nueva vida a tus artículos
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`} 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 bg-yellow-400 text-green-900 font-bold rounded-full hover:bg-yellow-300 transition-colors text-lg shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Contáctanos <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-6">¿Por qué restaurar con nosotros?</h2>
            <div className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                En <strong>Usados de Primera John</strong>, no solo vendemos artículos de segunda mano, también somos expertos en devolverles su esplendor original. Creemos que la mayoría de los muebles y electrodomésticos pueden tener una segunda vida útil si se les da el cuidado adecuado.
              </p>
              <p>
                Nuestro servicio de restauración está diseñado para ayudarte a ahorrar dinero y preservar tus artículos valiosos. Desde la reparación de daños superficiales hasta la renovación completa de los mecanismos internos, nuestro equipo está capacitado para manejar una amplia variedad de proyectos.
              </p>
              <p>
                ¡No deseches tus artículos viejos! <span className="text-green-700 dark:text-green-400 font-semibold">Lo bueno no tiene que ser nuevo</span>. Permítenos evaluar tu artículo y ofrecerte una solución de restauración que se ajuste a tu presupuesto.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <Wrench className="mx-auto text-yellow-500 mb-4" size={40} />
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Reparación Experta</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Arreglamos fallas mecánicas y estructurales para que tu artículo funcione como nuevo.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <PaintBucket className="mx-auto text-yellow-500 mb-4" size={40} />
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Acabados de Calidad</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Pintura, barniz y limpieza profunda para un aspecto renovado y fresco.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <Clock className="mx-auto text-yellow-500 mb-4" size={40} />
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Trabajo Rápido</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Entendemos que necesitas tus artículos, por lo que trabajamos de manera eficiente.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <ShieldCheck className="mx-auto text-yellow-500 mb-4" size={40} />
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Garantía</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Respaldamos nuestro trabajo de restauración para tu total tranquilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
