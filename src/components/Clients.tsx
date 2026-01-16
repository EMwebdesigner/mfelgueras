const clients = [
  { name: "Cliente Industrial 1", initials: "CI" },
  { name: "Logística SA", initials: "LS" },
  { name: "Petroquímica Norte", initials: "PN" },
  { name: "Automotriz ARG", initials: "AA" },
  { name: "Farmacéutica Plus", initials: "FP" },
  { name: "Centro Comercial", initials: "CC" },
  { name: "Depósitos Unidos", initials: "DU" },
  { name: "Energía Renovable", initials: "ER" },
  { name: "Metalúrgica Sur", initials: "MS" },
  { name: "Alimentos Corp", initials: "AC" },
  { name: "Textil Premium", initials: "TP" },
  { name: "Construcciones Max", initials: "CM" },
];

const Clients = () => {
  return (
    <section id="clientes" className="section-padding bg-muted/30">
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

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-logo aspect-[3/2]"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-industrial-steel/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-industrial-steel">
                    {client.initials}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
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
