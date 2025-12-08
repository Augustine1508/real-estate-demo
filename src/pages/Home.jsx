import Hero from "../components/home/Hero";
import ValueCards from "../components/home/ValueCards";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <ValueCards />
      <FeaturedProperties />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
}

