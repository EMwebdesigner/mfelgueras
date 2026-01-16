import { FileCheck, ShieldCheck, Award, Bookmark } from "lucide-react";

const certifications = [
  {
    icon: FileCheck,
    title: "NFPA",
    subtitle: "National Fire Protection Association",
    description:
      "Diseñamos e instalamos sistemas bajo los estándares NFPA 13, NFPA 14, NFPA 20 y NFPA 72, reconocidos internacionalmente como referencia en protección contra incendios.",
  },
  {
    icon: ShieldCheck,
    title: "IRAM",
    subtitle: "Instituto Argentino de Normalización",
    description:
      "Cumplimiento de normativas IRAM aplicables a sistemas contra incendios, garantizando la adecuación a los requerimientos locales y la trazabilidad de todos los componentes.",
  },
  {
    icon: Award,
    title: "Ley 5920 CABA",
    subtitle: "Regulación Municipal",
    description:
      "Habilitación y cumplimiento de la normativa vigente en la Ciudad de Buenos Aires para instalaciones de protección contra incendios en edificios comerciales e industriales.",
  },
  {
    icon: Bookmark,
    title: "ISO 9001",
    subtitle: "Sistema de Gestión de Calidad",
    description:
      "Procesos documentados y controlados bajo estándares de calidad internacional, asegurando la mejora continua y la satisfacción del cliente en cada proyecto.",
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
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  {cert.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
