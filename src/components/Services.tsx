import { Lightbulb, Radio, Flame, Settings, Package } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Ingeniería en sistemas contra incendios",
    description:
      "Desarrollo de proyectos integrales bajo normativas NFPA e IRAM. Cálculo hidráulico, dimensionamiento de redes y especificaciones técnicas para instalaciones industriales y comerciales.",
  },
  {
    icon: Radio,
    title: "Sistemas de detección",
    description:
      "Diseño e instalación de sistemas de detección temprana: detectores de humo, temperatura y llama. Centrales de alarma analógicas y direccionables con monitoreo remoto.",
  },
  {
    icon: Flame,
    title: "Sistemas de extinción",
    description:
      "Redes de sprinklers, sistemas de diluvio, espuma, CO2 y agentes limpios. Gabinetes de mangueras, hidrantes y tanques de reserva según requerimientos específicos del riesgo.",
  },
  {
    icon: Settings,
    title: "Mantenimiento preventivo y correctivo",
    description:
      "Programas de mantenimiento periódico según normas vigentes. Pruebas hidráulicas, verificación de componentes, recarga de extintores y actualización de sistemas existentes.",
  },
  {
    icon: Package,
    title: "Provisión de equipos certificados",
    description:
      "Suministro de equipos y materiales con certificación de calidad: extintores, mangueras, válvulas, detectores, rociadores y accesorios de primeras marcas nacionales e importadas.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Nuestros Servicios
          </span>
          <h2 className="section-title mb-4">
            Soluciones técnicas especializadas
          </h2>
          <p className="section-subtitle mx-auto">
            Brindamos servicios de ingeniería integral para la protección contra incendios, 
            desde el diseño inicial hasta el mantenimiento continuo de las instalaciones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 pt-6 border-t border-border">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Más información →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 bg-industrial-dark rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesita un presupuesto para su proyecto?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Nuestro equipo técnico está disponible para analizar sus requerimientos 
            y brindarle una propuesta personalizada.
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-hero inline-flex"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
