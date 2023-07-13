import Link from "next/link"
export default function NavBar() {
    return (
      <main className=" z-50 w-full fixed top-0 h-30 right-0 flex flex-row">
        <div className={"w-1/3 text-3xl items-center pl-10 p-5"}>
            Finn <strong>Bledsoe</strong>
        </div>
        <div className="z-10 w-2/3 lg:text-2xl md:text-lg items-center justify-around flex font-mono lg:flex p-5">
          <Link href={"#Education"} className="">EDUCATION</Link>
          <Link href={"#Experience"} className="">EXPERIENCE</Link>
          <Link href={"#Skills"} className="">SKILLS</Link>
          <Link href={"#Projects"} className="">PROJECTS</Link>
        </div>
      </main>
    )
  }
  