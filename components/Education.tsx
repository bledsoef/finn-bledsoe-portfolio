import {HiOutlineAcademicCap} from "react-icons/hi"
export default function Education() {
    return (
        <div>
            <div className="flex flex-row items-center">
                <h2 className="text-5xl font-bold pr-5">Education</h2>
                <HiOutlineAcademicCap className="h-16 w-16"/>
            </div>
            <div className="flex flex-row items-center">
                <p className="py-2 font-semibold text-xl pr-4">Berea College</p>
                <p>2021-2025</p>
            </div>
            <div>
                <p className="">BA Computer and Information Science</p>
            </div>
        </div>
        )
    }