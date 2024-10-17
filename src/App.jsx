import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import Hero from "./components/Hero";
import Features from "./components/Features";

import Footer from "./components/Footer";
function App() {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
