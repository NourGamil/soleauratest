import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import ProductGrid from "@/components/site/ProductGrid";
import EditorialBand from "@/components/site/EditorialBand";
import Footer from "@/components/site/Footer";

export default function MenPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>
      <ProductGrid gender="men" title="Men’s collection" subtitle="Leather classics, runners, and streetwear sneakers curated for clean outfits and long days." />
      <EditorialBand />
      <Footer />
    </main>
  );
}
