import {FaCode, FaPython} from "react-icons/fa"
export default function Skills() {
    interface NestedList<T> extends Array<T | NestedList<T>> {}
    const skills: NestedList<any> = [["Python", FaPython, "blurb"], ["Javascript", FaPython], ["Python", FaPython], ["Python", FaPython], ["Python", FaPython], ["Python", FaPython], ["Python", FaPython], ["Python", FaPython], ["Python", FaPython]]
    return (
        <div>
            <div className="flex flex-row items-center">
                <h2 className="text-6xl font-bold pr-5">Skills</h2>
                <FaCode className="h-20 w-20"/>
            </div>            
            <div className="flex flex-wrap">
                {skills.map(([skill, Icon, blurb], index) => (
                    <div key={index} className="flex flex-col w-1/3 justify-between">
                        <div  className="flex flex-row items-center p-4">
                            <Icon className="pr-2 h-8 w-8"/>
                            <p className="text-xl font-semibold">{skill}</p>
                        </div>
                        <p>{blurb}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}