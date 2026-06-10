import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>      <ContactSection />
      <Footer />
    </main>
  );
}
