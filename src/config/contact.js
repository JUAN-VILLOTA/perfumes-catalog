// Configuración de contacto del negocio
export const CONTACT_INFO = {
  whatsapp: "573103131974", // Sin espacios ni símbolos (+57 310 313 1974)
  whatsappDisplay: "+57 310 313 1974",
  email: "villotacordobajuandavid18@gmail.com",
  ubicacion: "Bogotá, Colombia",
  instagram: "#",
  facebook: "#",
};

// Función para generar enlace de WhatsApp
export const getWhatsAppLink = (perfumeName, perfumePrice) => {
  const mensaje = `Hola! Me interesa el perfume *${perfumeName}* con precio de $${perfumePrice.toLocaleString()}. ¿Está disponible?`;
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
};
