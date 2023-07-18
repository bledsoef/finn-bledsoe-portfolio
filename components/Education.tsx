import {HiOutlineAcademicCap} from "react-icons/hi"
export default function Education() {
    const relevantCourses = [
        ["Software Design and Implement", "[Python, OOP]"],
        ["Data Structures", "[C++, Data Structures]"],
        ["Programming Languages", "[Go, TypeScript, Python, C]"],
        ["Computational Intelligence", "[C++, Python, TensorFlow, Machine Learning]"]]
    const relevantTopics = ["Big O", "Strings", "Trees", "Arrays", "Sorting", "Linked Lists", "Stacks", "Queues"]
        return (
        <div>
            <div className="flex flex-row items-center">
                <h2 className="text-5xl font-bold pr-5">Education</h2>
                <HiOutlineAcademicCap className="h-16 w-16"/>
            </div>
            <div className="flex flex-row space-x-5 py-2">
                <div className="p-6 bg-light-pastel-green rounded-lg drop-shadow-md">
                    <div className="flex flex-row items-center">
                        <p className="font-semibold text-xl pr-4">Berea College</p>
                        <p>August 2021 - May 2025</p>
                    </div>
                    <div>
                        <p className="py-2">BA Computer and Information Science</p>
                    </div>
                    <div className="flex py-2 flex-row justify-between items-center">
                        <p className=""><strong>GPA:</strong> 3.76</p>
                        <p><strong>4x Dean's List</strong></p>
                    </div>
                    <div>
                        <p className="font-semibold">Relevant Courses:</p>
                        <ul>
                            {relevantCourses.map(([course, technologies])=>(
                                <>
                                    <li className="pl-2">- {course}</li>
                                    <li className="pl-4 italic ">{technologies}</li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="p-5 bg-light-pastel-green rounded-lg drop-shadow-md">
                    <div className="flex flex-row items-center">
                        <p className="font-semibold text-xl pr-4">CodePath</p>
                        <p>Summer 2023</p>
                    </div>
                    <p className="py-2">Advanced Technical Interview Prep</p>
                    <p className="font-semibold">Relevant Topics:</p>
                    <ul>
                        {relevantTopics.map((topic)=>(
                            <>
                                <li className="pl-2">- {topic}</li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        )
    }