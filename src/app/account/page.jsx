import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import AuthSection from "@/components/site/AuthSection";
import Footer from "@/components/site/Footer";

export default function AccountPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>
      <AuthSection />
      <Footer />
    </main>
  );
}
