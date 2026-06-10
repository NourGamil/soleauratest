import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import CartSection from "@/components/site/CartSection";
import Footer from "@/components/site/Footer";

export default function CartPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[140px] w-[100vw]"></div>      <CartSection />
      <Footer />
    </main>
  );
}
