import { Link } from "react-router-dom";

const PerfumeCard = ({ perfume }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={perfume.imagen}
          alt={perfume.nombre}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {perfume.marca}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {perfume.nombre}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm">
          {perfume.descripcionCorta}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">
            ${perfume.precio.toLocaleString()}
          </span>
          
          <Link
            to={`/perfume/${perfume.id}`}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition font-semibold"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCard;