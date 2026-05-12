"use client";
import Link from "next/link";
import { Cpu, Zap, Settings, Shield, Wifi } from "lucide-react";

const products = [
  { name: "Nothing Band X1", category: "Smart Band", price: "$149", status: "Available", desc: "Advanced biometric tracking with on-device AI agent." },
  { name: "Nothing Ring", category: "Smart Ring", price: "$199", status: "Coming Soon", desc: "Invisible form factor. Maximum intelligence." },
  { name: "Nothing Buds AI", category: "Audio", price: "$89", status: "Available", desc: "Voice-first interface for the MrNothing agent ecosystem." },
];

const features = [
  { icon: Cpu, title: "On-device AI", body: "Agent processing runs locally. No cloud dependency. No latency." },
  { icon: Wifi, title: "Real-time sync", body: "Live telemetry from all connected devices in your NothingOS hub." },
  { icon: Settings, title: "Deep config", body: "Customize every behavioral trigger, alert threshold, and automation." },
  { icon: Shield, title: "Zero-trust privacy", body: "Your data stays on your devices. We don't have a copy." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <span className="font-bold tracking-wider text-white">NOTHING<span className="text-purple-400">OS</span></span>
        <Link href="/dashboard" className="rounded border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-xs text-purple-300 hover:bg-purple-500/20 transition-colors">
          Open Hub
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="inline-block border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs tracking-widest text-purple-300 uppercase mb-8">MrNothing Ecosystem</span>
        <h1 className="text-6xl font-bold leading-tight md:text-7xl">Your wearable.<br/>Your world.</h1>
        <p className="mt-6 text-xl text-silver max-w-2xl mx-auto">NothingOS is the intelligence layer between your body and your agents — real-time device management, deep personalization, and autonomous control.</p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/shop" className="rounded-lg border border-purple-500/40 bg-purple-500/20 px-8 py-3 font-medium text-purple-200 hover:bg-purple-500/30 transition-colors">Shop Devices</Link>
          <Link href="/dashboard" className="rounded-lg border border-white/10 px-8 py-3 font-medium text-silver hover:border-white/30 transition-colors">Open Dashboard</Link>
        </div>
      </section>

      <section className="border-t border-white/8 bg-white/2 py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/8 bg-black p-6">
              <f.icon className="h-6 w-6 text-purple-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-silver">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-8">Hardware lineup</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/8 bg-white/3 p-6">
              <span className="text-xs text-purple-400">{p.category}</span>
              <h3 className="font-semibold text-white mt-1 mb-2">{p.name}</h3>
              <p className="text-sm text-silver mb-4">{p.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">{p.price}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === "Available" ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-silver"}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
