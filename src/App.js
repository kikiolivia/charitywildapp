import CtaItem from "./components/CtaItem";
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Donate from "./components/Donate";
import Testimonials from "./components/Testimonials";
import Patner from "./components/Patner";
import Events from "./components/Events";
import InstaPost from "./components/InstaPost";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <article>
          <Hero />
          <Features />
          <About />
          <CtaItem />
          <Service />
          <Donate />
          <Testimonials />
          <Patner />
          <Events />
          <InstaPost />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
