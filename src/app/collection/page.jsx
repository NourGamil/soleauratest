import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import CollectionSection from "@/components/site/CollectionSection";
import ProductGrid from "@/components/site/ProductGrid";
import Newsletter from "@/components/site/Newsletter";
import Footer from "@/components/site/Footer";

export default function CollectionPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>
      <CollectionSection />
      <ProductGrid title="Complete catalogue" subtitle="A clean replacement for the old collection layout, with real product cards and quick preview." />
      <Newsletter />
      <Footer />
    </main>
  );
}
