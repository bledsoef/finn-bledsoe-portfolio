export default function Skills() {
    interface NestedList<T> extends Array<T | NestedList<T>> {}
    const skills: NestedList<string> = [["Python", "Python"]]
    return (
        <div>
            <h2 className="text-3xl font-bold">Skills</h2>
            <div>
                {skills.map(skill => (
                    <p key={3}>{skill}</p>
                ))}
            </div>
        </div>
    )
}