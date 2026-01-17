import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
        >
          {/* Industrial environment / fire safety video */}
          <source
            src="https://videos.pexels.com/video-files/5532766/5532766-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          {/* Fallback - industrial pipes/water system */}
          <source
            src="https://videos.pexels.com/video-files/856947/856947-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsla(0, 70%, 18%, 0.88) 0%, hsla(220, 20%, 8%, 0.92) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in mb-6">
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 border border-white/20 rounded-full backdrop-blur-sm">
              Ingeniería en protección contra incendios
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Soluciones integrales en{" "}
            <span className="text-primary-foreground/90">sistemas contra incendios</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-delay-1 text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseño, instalación y mantenimiento de sistemas de detección, alarma y extinción. 
            Más de tres décadas de experiencia en ingeniería aplicada a la seguridad industrial.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5491158486424?text=Hola%2C%20buen%20d%C3%ADa.%20Me%20comunico%20para%20solicitar%20asesoramiento%20t%C3%A9cnico%20sobre%20sus%20soluciones%20y%20servicios.%20Quedo%20a%20disposici%C3%B3n%20para%20ampliar%20los%20requerimientos.%20Muchas%20gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Solicitar asesoramiento técnico
            </a>
            <button
              onClick={() => scrollToSection("#servicios")}
              className="btn-hero-outline"
            >
              Conocer servicios
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-delay-3 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">+30</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">Años</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">+500</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">Normativa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#empresa")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
