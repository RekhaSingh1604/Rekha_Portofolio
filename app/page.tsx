import HeroSection from "./HeroSection/page";
import Navbar from './Navbar/page'
import About from "./About/page";
import ProjectSections from "./ProjectSections/page";
// import ProjectsSections from "./ProjectSections/page";
import Skills from "./Skills/page";
import Resume from "./Resume/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <About />
      <ProjectSections />
      {/* <ProjectsSections /> */}
      <Skills/>
      <Resume />
      <Contact />
    </main>
  );
}


