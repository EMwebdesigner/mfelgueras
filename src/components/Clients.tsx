const clients = [
  { name: "Cliente Industrial", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80" },
  { name: "Logística SA", logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&q=80" },
  { name: "Petroquímica Norte", logo: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=200&h=100&fit=crop&q=80" },
  { name: "Automotriz ARG", logo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=100&fit=crop&q=80" },
  { name: "Farmacéutica Plus", logo: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=100&fit=crop&q=80" },
  { name: "Centro Comercial", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&q=80" },
  { name: "Depósitos Unidos", logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=200&h=100&fit=crop&q=80" },
  { name: "Energía Renovable", logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=100&fit=crop&q=80" },
  { name: "Metalúrgica Sur", logo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&h=100&fit=crop&q=80" },
  { name: "Alimentos Corp", logo: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&h=100&fit=crop&q=80" },
  { name: "Textil Premium", logo: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=100&fit=crop&q=80" },
  { name: "Construcciones Max", logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=100&fit=crop&q=80" },
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
                className="flex-shrink-0 mx-6 group"
              >
                <div className="w-40 h-24 bg-card border border-border rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 group"
              >
                <div className="w-40 h-24 bg-card border border-border rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
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
