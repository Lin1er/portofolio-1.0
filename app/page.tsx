import About from "@/components/about";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Project from "@/components/ui/project";

export default function Home() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen">
      <Header />
      <main className="">
        <Hero />
        <About />
        <Project />
      </main>
    </div>
  );
}
