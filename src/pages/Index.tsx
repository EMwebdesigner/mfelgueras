import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Certifications />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
