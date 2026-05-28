import { Link } from "react-router";
import { categories, products } from "../data";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImg from "../../imports/1.jpeg";

export function Tienda() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src={heroImg}
            alt="Fondo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-md">
            Lo bueno no tiene que ser nuevo
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-yellow-400 drop-shadow-sm font-bold">
            Tu bolsillo te lo agradece
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#categorias" className="px-8 py-3 bg-yellow-400 text-green-900 font-bold rounded-full hover:bg-yellow-300 transition-colors text-lg shadow-lg w-full sm:w-auto">
              Ver Catálogo
            </a>
            <a href="https://wa.me/573138473642" target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-green-800 font-bold rounded-full hover:bg-gray-100 transition-colors text-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700">
              <MessageCircle size={20} className="text-green-600 dark:text-green-400" /> Escríbenos
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">Nuestras Categorías</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <Link key={category.id} to={`/categoria/${category.id}`} className="group block">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-500 flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-green-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <ImageWithFallback 
                      src={category.image} 
                      alt={category.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${category.imagePosition || ''}`}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2 group-hover:text-green-600 dark:group-hover:text-green-300">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{category.description}</p>
                    <span className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-semibold group-hover:text-yellow-500">
                      Ver artículos <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">Nuestra Ubicación</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-[400px]">
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent("Cra. 24A No. 35-14, Villavicencio, Colombia")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Usados de Primera John"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">Llegadas Recientes</h2>
              <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
            </div>
            <Link to="/categoria/electrodomesticos" className="hidden sm:flex items-center text-green-700 dark:text-green-400 font-semibold hover:text-green-500">
              Ver todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">
                    {categories.find(c => c.id === product.categoryId)?.name}
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2 line-clamp-1" title={product.name}>{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-black text-green-700 dark:text-green-400">${product.price}</span>
                    <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-2 py-1 rounded-full font-medium">{product.condition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/categoria/electrodomesticos" className="inline-flex items-center px-6 py-2 border-2 border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 font-bold rounded-full hover:bg-green-50 dark:hover:bg-gray-800 transition-colors">
              Ver todo el catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}