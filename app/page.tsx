import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <div className="z-10 w-full justify-between font-mono flex-col lg:flex">
        <p className="pl-20 pt-20 text-5xl">
          Hi! I'm Finn and I'm a 
        </p>
        <p className="pl-20 pt-5 pb-20 text-8xl">
          <strong>Software Engineer</strong>
        </p>
        <div className="">
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
      </div>
    </main>
  )
}
