import Navigation from "@/components/Navigation";
import VideoHero from "@/components/VideoHero";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import Toolkit from "@/components/Toolkit";
import Journey from "@/components/Journey";
import CurrentBuild from "@/components/CurrentBuild";
import Contact from "@/components/Contact";
import Motion from "@/components/Motion";
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <VideoHero />
        <About />
        <ProjectShowcase />
        <Toolkit />
        <Journey />
        <CurrentBuild />
        <Contact />
      </main>
      <Motion />
    </>
  );
}
