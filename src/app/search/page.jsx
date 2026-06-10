import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import SearchSection from "@/components/site/SearchSection";
import Footer from "@/components/site/Footer";

export default function SearchPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[140px] w-[100vw]"></div>
      <SearchSection />
      <Footer />
    </main>
  );
}
