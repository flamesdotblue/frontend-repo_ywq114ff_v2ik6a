export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, usage-based pricing</h2>
          <p className="mt-4 text-slate-300">
            Start free. Only pay as your conversations scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="mt-2 text-sm text-slate-300">For testing and prototypes</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-semibold">$0</span>
              <span className="text-slate-300"> / mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• 1,000 chat messages</li>
              <li>• 100 call minutes</li>
              <li>• Community support</li>
            </ul>
            <a href="#signup" className="mt-8 inline-flex justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
              Get started
            </a>
          </div>

          {/* Growth */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 flex flex-col shadow-lg shadow-purple-500/10">
            <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-3 py-1 text-xs text-white">
              Popular
            </div>
            <h3 className="text-white font-medium">Growth</h3>
            <p className="mt-2 text-sm text-slate-300">For teams going live</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-semibold">$49</span>
              <span className="text-slate-300"> / mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• 20,000 chat messages</li>
              <li>• 2,000 call minutes</li>
              <li>• Email support</li>
              <li>• Custom voices</li>
            </ul>
            <a href="#signup" className="mt-8 inline-flex justify-center rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-4 py-2 text-white hover:brightness-110 transition">
              Choose Growth
            </a>
          </div>

          {/* Scale */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <h3 className="text-white font-medium">Scale</h3>
            <p className="mt-2 text-sm text-slate-300">For large volumes and SLAs</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-semibold">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Unlimited chat messages</li>
              <li>• Bulk call minutes</li>
              <li>• Dedicated support & SSO</li>
              <li>• Regional data hosting</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
