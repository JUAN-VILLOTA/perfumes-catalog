import { CONTACT_INFO } from "../config/contact";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🌸 Perfumes Premium</h3>
            <p className="text-gray-400">
              Los mejores perfumes originales al mejor precio
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  📱 WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
              <li>📧 Email: {CONTACT_INFO.email}</li>
              <li>📍 {CONTACT_INFO.ubicacion}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Perfumes Premium. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
