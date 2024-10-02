import CTAQuestion from "~/components/cta-question";
import Features from "~/components/features";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Hero from "~/components/hero";
import ProductImage from "~/components/product-image";
import Projects from "~/components/projects";
import UserFeedback from "~/components/user-feedback";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Header/>
      <Hero/>
      <Projects/>
      <ProductImage/>
      <Features/>
      <UserFeedback/>
      <CTAQuestion/>
      <Footer/>
    </div>
  );
}
