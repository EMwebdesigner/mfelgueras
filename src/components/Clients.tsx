const clients = [
  { name: "Industrial Corp", initials: "IC", color: "from-slate-600 to-slate-800" },
  { name: "Logística SA", initials: "LS", color: "from-blue-600 to-blue-800" },
  { name: "Petroquímica Norte", initials: "PN", color: "from-amber-600 to-amber-800" },
  { name: "Automotriz ARG", initials: "AA", color: "from-red-600 to-red-800" },
  { name: "Farmacéutica Plus", initials: "F+", color: "from-emerald-600 to-emerald-800" },
  { name: "Centro Comercial", initials: "CC", color: "from-purple-600 to-purple-800" },
  { name: "Depósitos Unidos", initials: "DU", color: "from-cyan-600 to-cyan-800" },
  { name: "Energía Renovable", initials: "ER", color: "from-green-600 to-green-800" },
  { name: "Metalúrgica Sur", initials: "MS", color: "from-zinc-600 to-zinc-800" },
  { name: "Alimentos Corp", initials: "AC", color: "from-orange-600 to-orange-800" },
  { name: "Textil Premium", initials: "TP", color: "from-pink-600 to-pink-800" },
  { name: "Construcciones Max", initials: "CM", color: "from-stone-600 to-stone-800" },
];

const Clients = () => {
  return (
    <section id="clientes" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Clientes
          </span>
          <h2 className="section-title mb-4">
            Empresas que confían en nosotros
          </h2>
          <p className="section-subtitle mx-auto">
            A lo largo de más de tres décadas, hemos trabajado con empresas líderes 
            en diversos sectores industriales, comerciales y logísticos.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-36 h-20 bg-card border border-border rounded-lg flex items-center justify-center gap-2 px-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${client.color} flex items-center justify-center shadow-sm`}>
                    <span className="text-white font-bold text-sm">{client.initials}</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-36 h-20 bg-card border border-border rounded-lg flex items-center justify-center gap-2 px-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${client.color} flex items-center justify-center shadow-sm`}>
                    <span className="text-white font-bold text-sm">{client.initials}</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
            <svg
              className="w-10 h-10 text-primary/20 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              "La profesionalidad y el conocimiento técnico del equipo de M.FELGUERAS SA 
              nos brindó total confianza en la protección de nuestras instalaciones. 
              El cumplimiento de los plazos y la calidad de la documentación técnica 
              superaron nuestras expectativas."
            </blockquote>
            <div>
              <div className="font-semibold text-foreground">Gerente de Operaciones</div>
              <div className="text-sm text-muted-foreground">Empresa del sector logístico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
