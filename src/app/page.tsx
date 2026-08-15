import { getProfile, getAbout, getSkills, getProjects, getExperience } from "@/services/api";
import Intro from "@/components/Intro/Intro";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default async function Home() {
  const profile = await getProfile();
  const about = await getAbout();
  const skills = await getSkills();
  const projects = await getProjects();
  const experience = await getExperience();

  return (
    <main>
      <Intro />
      <Hero data={profile} />
      <Projects data={projects} />
      <About data={about} />
      <Skills data={skills} />
      <Experience data={experience} />
      <Contact data={profile} />
    </main>
  );
}
