import { Shield, Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Compromiso con la seguridad",
      description: "Aplicamos los más altos estándares de calidad y seguridad en cada proyecto.",
    },
    {
      icon: Award,
      title: "Cumplimiento normativo",
      description: "Trabajamos bajo las normativas NFPA, IRAM y regulaciones locales vigentes.",
    },
    {
      icon: Users,
      title: "Equipo especializado",
      description: "Ingenieros y técnicos con formación continua en protección contra incendios.",
    },
  ];

  return (
    <section id="empresa" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Sobre Nosotros
            </span>
            <h2 className="section-title mb-6">
              Ingeniería aplicada a la protección contra incendios
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">M.FELGUERAS SA</strong> es una empresa argentina 
                especializada en el diseño, instalación y mantenimiento de sistemas integrales de 
                protección contra incendios para el sector industrial, comercial y logístico.
              </p>
              <p>
                Con más de tres décadas de trayectoria, brindamos soluciones de ingeniería que 
                combinan tecnología de vanguardia con un profundo conocimiento normativo. Nuestro 
                enfoque se centra en la prevención, detección temprana y respuesta efectiva ante 
                emergencias.
              </p>
              <p>
                Trabajamos con fabricantes líderes a nivel mundial y contamos con un equipo 
                técnico altamente capacitado para garantizar la máxima confiabilidad en cada 
                instalación.
              </p>
            </div>

            {/* Checklist */}
            <ul className="mt-8 space-y-3">
              {[
                "Diseño bajo normativas NFPA e IRAM",
                "Servicio técnico 24/7 para emergencias",
                "Trazabilidad completa de equipos e instalaciones",
                "Capacitación y asesoramiento continuo",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-muted/50 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="p-8 bg-primary text-primary-foreground rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold">+30</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">+500</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Proyectos ejecutados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">+200</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Clientes activos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Servicio técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
