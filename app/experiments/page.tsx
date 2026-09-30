import { Metadata } from "next";
import ExperimentsSection from "@/components/ExperimentsSection";
import CurrentlyExploring from "@/components/CurrentlyExploring";

export const metadata: Metadata = {
  title: "Lab & Experiments — Aditya Bhardwaj",
  description: "Algorithmic prototypes, machine learning experiments, and computer vision sandboxes by Aditya Bhardwaj.",
};

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen pt-20 pb-32">
      <ExperimentsSection />
      <CurrentlyExploring />
    </div>
  );
}
