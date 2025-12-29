import { useParams, Link } from "react-router-dom";
import { perfumes } from "../data/perfumes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getWhatsAppLink } from "../config/contact";

const PerfumeDetail = () => {
  const { id } = useParams();
  const perfume = perfumes.find((p) => p.id === id);

  if (!perfume) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Perfume no encontrado</h2>
          <Link to="/" className="text-purple-600 hover:underline">Volver al catálogo</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 font-semibold"
          >
            ← Volver al catálogo
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-square bg-gray-100 p-8">
                <img
                  src={perfume.imagen}
                  alt={perfume.nombre}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {perfume.marca}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                  {perfume.nombre}
                </h1>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {perfume.descripcionLarga}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-purple-600">
                    ${perfume.precio.toLocaleString()}
                  </span>
                </div>

                <a
                  href={getWhatsAppLink(perfume.nombre, perfume.precio)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition font-bold text-lg shadow-lg hover:shadow-xl text-center"
                >
                  💬 Consultar por WhatsApp
                </a>
                
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✓ Producto 100% original<br />
                    ✓ Envío a todo el país<br />
                    ✓ Garantía de autenticidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PerfumeDetail;