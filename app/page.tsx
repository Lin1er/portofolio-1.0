import About from "@/components/section/about";
import { Header } from "@/components/header";
import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
import Contact from "@/components/section/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen">
      <Header />
      <main className="">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
