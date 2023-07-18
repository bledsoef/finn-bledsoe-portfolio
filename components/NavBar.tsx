import Link from "next/link"
export default function NavBar() {
    return (
      <main className=" z-50 w-full fixed top-0 h-30 right-0 flex flex-row bg-pastel-green">
        <div className={"w-1/3 text-xl lg:text-3xl items-center pl-10 p-5"}>
            Finn <strong>Bledsoe</strong>
        </div>
        <div className="z-10 w-2/3 items-center justify-around flex font-mono lg:flex p-5">
          <Link href={"#Education"} className="text-md lg:text-xl">EDUCATION</Link>
          <Link href={"#Experience"} className="text-md lg:text-xl">EXPERIENCE</Link>
          <Link href={"#Skills"} className="text-md lg:text-xl">SKILLS</Link>
          <Link href={"#Projects"} className="text-md lg:text-xl">PROJECTS</Link>
        </div>
      </main>
    )
  }
