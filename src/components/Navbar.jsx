import { Rocket, PhoneCall, Bot, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-white font-semibold tracking-tight">VibeVoice AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
            >
              <Shield className="h-4 w-4" />
              Start Free
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:brightness-110 transition"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
