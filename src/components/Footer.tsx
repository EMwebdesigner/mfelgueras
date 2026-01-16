import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-industrial-dark text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Tiene un proyecto en mente?
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 max-w-lg">
              Nuestro equipo técnico está disponible para analizar sus requerimientos 
              y brindarle el asesoramiento especializado que necesita.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EDE3E4]/80 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#ff2b40]" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Dirección</div>
                  <div className="text-white/60 text-sm">
                    Av. Industrial 1234, Parque Industrial<br />
                    Buenos Aires, Argentina
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EDE3E4]/80 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#ff2b40]" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Teléfono</div>
                  <div className="text-white/60 text-sm">
                    (011) XXXX-XXXX<br />
                    Líneas rotativas
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EDE3E4]/80 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#ff2b40]" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Email</div>
                  <div className="text-white/60 text-sm">
                    info@mfelgueras.com.ar<br />
                    comercial@mfelgueras.com.ar
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EDE3E4]/80 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#ff2b40]" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Horario de atención</div>
                  <div className="text-white/60 text-sm">
                    Lunes a Viernes: 8:00 a 17:00<br />
                    Servicio técnico 24/7 para emergencias
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Solicitar asesoramiento
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Nombre de la empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="correo@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="(011) XXXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describa brevemente su proyecto o requerimiento..."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-hero"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MF</span>
              </div>
              <span className="text-white/60 text-sm">
                © {currentYear} M.FELGUERAS SA. Todos los derechos reservados.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
