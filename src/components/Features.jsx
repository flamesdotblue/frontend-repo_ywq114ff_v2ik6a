import { MessageSquare, PhoneCall, Bot, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Human-like AI agents",
    desc: "Natural conversations with memory, context, and emotion control across chat and voice.",
  },
  {
    icon: PhoneCall,
    title: "AI calling",
    desc: "Outbound and inbound voice with instant call pickup, whisper coaching, and real-time notes.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel",
    desc: "Deploy across web chat, SMS, WhatsApp, and your CRM with a single configuration.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade safety",
    desc: "Granular guardrails, PII redaction, SOC 2 alignment, and regional data hosting.",
  },
  {
    icon: Zap,
    title: "Fast to production",
    desc: "SDKs, webhooks, and no-code flows help you ship voice assistants in days, not months.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built for customer conversations</h2>
          <p className="mt-4 text-slate-300">
            Everything you need to launch intelligent chat and voice agents that drive revenue and delight
            customers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
