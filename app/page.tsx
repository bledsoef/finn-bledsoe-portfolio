import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="z-10 w-full justify-between font-mono flex-col lg:flex">
        <p className="p-20 text-6xl text-center">
          Hi, I'm a <strong>Software Engineer</strong>
        </p>
        <section id="AboutMe" className="py-5">
          <AboutMe/>
        </section>
        <section id="Education" className="py-5">
          <Education/>
        </section>        
        <section id="Experience" className="py-5">
          <Experience/>
        </section>        
        <section id="Skills" className="py-5">
          <Skills/>
        </section>
        <section id="Projects" className="py-5">
          <Projects/>
        </section>

      </div>
    </main>
  )
}
