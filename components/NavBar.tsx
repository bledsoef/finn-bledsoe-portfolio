import Link from "next/link"
export default function NavBar() {
    return (
      <main className="w-full fixed top-0 h-30 right-0 flex flex-row">
        <div className={"w-1/3 text-3xl items-center pl-10 p-5"}>
            Finn <strong>Bledsoe</strong>
        </div>
        <div className="z-10 w-2/3 items-center justify-around flex font-mono text-sm lg:flex p-5">
          <Link href={"#AboutMe"} className='text-2xl'>ABOUT ME</Link>
          <Link href={"#Education"} className="text-2xl">EDUCATION</Link>
          <Link href={"#Experience"} className="text-2xl">EXPERIENCE</Link>
          <Link href={"#Skills"} className="text-2xl">SKILLS</Link>
          <Link href={"#Projects"} className="text-2xl">PROJECTS</Link>
        </div>
      </main>
    )
  }
  