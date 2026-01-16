import { FileCheck, ShieldCheck, Award, Bookmark } from "lucide-react";

const certifications = [
  {
    icon: FileCheck,
    title: "NFPA",
    subtitle: "National Fire Protection Association",
    description:
      "Diseñamos e instalamos sistemas bajo los estándares NFPA 13, NFPA 14, NFPA 20 y NFPA 72, reconocidos internacionalmente como referencia en protección contra incendios.",
    backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: ShieldCheck,
    title: "IRAM",
    subtitle: "Instituto Argentino de Normalización",
    description:
      "Cumplimiento de normativas IRAM aplicables a sistemas contra incendios, garantizando la adecuación a los requerimientos locales y la trazabilidad de todos los componentes.",
    backgroundImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Award,
    title: "Ley 5920 CABA",
    subtitle: "Regulación Municipal",
    description:
      "Habilitación y cumplimiento de la normativa vigente en la Ciudad de Buenos Aires para instalaciones de protección contra incendios en edificios comerciales e industriales.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Bookmark,
    title: "ISO 9001",
    subtitle: "Sistema de Gestión de Calidad",
    description:
      "Procesos documentados y controlados bajo estándares de calidad internacional, asegurando la mejora continua y la satisfacción del cliente en cada proyecto.",
    backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80",
  },
];

const Certifications = () => {
  return (
    <section id="certificaciones" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Certificaciones y Normativas
            </span>
            <h2 className="section-title mb-6">
              Compromiso con la calidad y el cumplimiento normativo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En M.FELGUERAS SA trabajamos bajo los más exigentes estándares nacionales e 
              internacionales. Cada proyecto se desarrolla con estricto apego a las normativas 
              vigentes, garantizando instalaciones seguras, confiables y documentadas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La trazabilidad de equipos, la documentación técnica completa y los protocolos 
              de prueba certificados son parte integral de nuestro compromiso con la seguridad 
              operativa de nuestros clientes.
            </p>

            {/* Quality Badge */}
            <div className="mt-10 p-6 bg-muted/50 rounded-lg border border-border inline-block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Cumplimiento normativo certificado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg min-h-[280px] transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cert.backgroundImage})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/95 via-industrial-dark/80 to-industrial-dark/60" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 border border-white/20 group-hover:bg-white/20 transition-colors">
                    <cert.icon className="w-6 h-6 text-burgundy-400" />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-3">
                    {cert.subtitle}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
