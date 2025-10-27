import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Decorative background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <footer id="contact" className="border-t border-white/10 py-10 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-sm">
          <p>© {new Date().getFullYear()} VibeVoice AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
