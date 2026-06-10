import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import ProductGrid from "@/components/site/ProductGrid";
import EditorialBand from "@/components/site/EditorialBand";
import Newsletter from "@/components/site/Newsletter";
import Footer from "@/components/site/Footer";

export default function NewArrivalsPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>
      <ProductGrid featuredOnly title="New arrivals" subtitle="Fresh product cards from the newest SoleAura capsule, with the same quick-view experience as the full collection." />
      <EditorialBand />
      <Newsletter />
      <Footer />
    </main>
  );
}
