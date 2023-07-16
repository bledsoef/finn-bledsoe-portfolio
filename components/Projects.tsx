import { FaCodeBranch } from "react-icons/fa"
import Link from "next/link"
export default function Projects() {
    interface NestedList<T> extends Array<T | NestedList<T>> {}
    const projects:NestedList<any> = [[""]]
    return (
        <div>
            <div className="flex flex-row items-center">
                <h2 className="text-6xl font-bold pr-5">Projects</h2>
                <FaCodeBranch className="h-20 w-20"/>
            </div>               
            <div>
                {projects.map(([projectName, link, imageURL, description]) => (
                    <div>
                        <Link href={link}>{projectName}</Link>
                        <img src={imageURL}></img>
                        
                    </div>
                ))}
            </div>
        </div>)}