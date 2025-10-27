import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-purple-300" />
              New: AI calling agents with natural voices
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Conversational AI that chats and calls like a human
            </h1>
            <p className="mt-6 text-slate-300 text-lg max-w-prose">
              Launch voice and chat agents that book appointments, qualify leads, and resolve support
              tickets—hands‑free. Deploy in minutes with our API and no-code tools.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex justify-center rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-6 py-3 text-white font-medium shadow-lg shadow-purple-500/20 hover:brightness-110 transition"
              >
                Get started free
              </a>
              <a
                href="#demo"
                className="inline-flex justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition"
              >
                Book a live demo
              </a>
            </div>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-white/10 bg-white/5">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(closest-side,rgba(139,92,246,0.25),transparent_60%),radial-gradient(closest-side,rgba(59,130,246,0.18),transparent_60%),radial-gradient(closest-side,rgba(251,146,60,0.14),transparent_60%)]" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 inset-x-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(139,92,246,0.35),transparent_60%)]" />
    </section>
  );
}
