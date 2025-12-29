import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:opacity-80 transition">
            🌸 Perfumes Premium
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
