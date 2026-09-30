import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { HelpCircle, Clock, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Aditya Bhardwaj — Get in Touch",
  description:
    "Direct dispatch channel and collaboration inquiry for Aditya Bhardwaj. Open for software engineering internships and AI/ML projects.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "What types of opportunities are you seeking?",
      a: "I am actively seeking Software Engineering and AI/ML Engineering internships, research collaborations, and ambitious hackathon co-builder opportunities. I thrive in environments tackling hard systems, performance bottlenecks, and real-time state synchronization.",
    },
    {
      q: "What is your primary development stack?",
      a: "My systems work centers around TypeScript, Next.js, Node.js, PostgreSQL/PostGIS, Redis, and WebSockets. For machine learning and algorithmic research, I build in Python (PyTorch, LightGBM, OpenCV, NumPy) and C++.",
    },
    {
      q: "What is your typical turnaround time for correspondence?",
      a: "I monitor dispatches daily and respond to technical and career inquiries within 24 hours (UTC+05:30 Indian Standard Time).",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-32">
      <ContactSection />

      {/* Collaboration FAQ Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARIFICATIONS & LOGISTICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 font-sans mb-8">
            FREQUENTLY DISCUSSED QUESTIONS
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08]"
              >
                <h3 className="text-base font-bold text-stone-100 uppercase tracking-tight">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-stone-400 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
