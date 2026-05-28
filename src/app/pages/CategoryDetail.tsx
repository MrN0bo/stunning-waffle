import { useParams, Link } from "react-router-dom";
import { categories, products, contactInfo } from "../data";
import { MessageCircle, ArrowLeft, Frown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  
  const category = categories.find(c => c.id === id);
  const categoryProducts = products.filter(p => p.categoryId === id);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Categoría no encontrada</h2>
        <Link to="/tienda" className="text-green-600 hover:underline inline-flex items-center">
          <ArrowLeft size={16} className="mr-1" /> Volver a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Category Header */}
      <div className="bg-green-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback src={category.image} alt={category.name} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/tienda" className="inline-flex items-center text-green-200 hover:text-white mb-6 text-sm font-medium transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Volver a la Tienda
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{category.name}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{category.description}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {categoryProducts.length} {categoryProducts.length === 1 ? 'Artículo disponible' : 'Artículos disponibles'}
          </h2>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2" title={product.name}>{product.name}</h3>
                  <div className="flex-1">
                    <span className="inline-block text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded font-medium mb-3">
                      {product.condition}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <span className="text-2xl font-black text-green-700 dark:text-green-400">${product.price}</span>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20me%20interesa%20el%20artículo:%20${product.name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-700 hover:text-white transition-colors shadow-sm"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-12 text-center border border-dashed border-gray-300 dark:border-gray-700">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Frown size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Aún no hay artículos</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">Estamos actualizando nuestro inventario constantemente. Vuelve pronto para ver nuevos artículos en esta categoría.</p>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors">
              Preguntar disponibilidad
            </a>
          </div>
        )}
      </div>
    </div>
  );
}