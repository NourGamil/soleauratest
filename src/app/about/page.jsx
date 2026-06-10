import Navigation from "@/components/site/Navigation";
import PageIntro from "@/components/site/PageIntro";
import StorySection from "@/components/site/StorySection";
import Testimonials from "@/components/site/Testimonials";
import Newsletter from "@/components/site/Newsletter";
import Footer from "@/components/site/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>      <StorySection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
