import {FaCode, FaPython, FaNodeJs} from "react-icons/fa"
import {DiSwift, DiLinux} from "react-icons/di"
import {SiJenkins, SiTensorflow, SiCplusplus, SiHelm, SiArgo, SiGithubactions} from "react-icons/si"
import {BiLogoGoLang, BiLogoHtml5, BiLogoCss3, BiLogoDocker, BiLogoFlask, BiLogoGit, BiLogoGithub, BiLogoGitlab, BiLogoKubernetes, BiLogoJavascript} from "react-icons/bi"
export default function Skills() {
    interface NestedList<T> extends Array<T | NestedList<T>> {}
    const languages: NestedList<any> = [
        ["Python", FaPython, "Developed multiple personal projects and web scrapers with Python. Created 2 different backends for full-stack applications with Flask and FastAPI"],
        ["Javascript", BiLogoJavascript, "Used JS and Ajax to write the front end functionality for an HTML website and have designed 4 web applications with a JavaScript framework front end."],
        ["Golang", BiLogoGoLang, "Created a Slack Bot with Go to track the CELTS GitHub repository for outstanding merge requests to decrease the daily setup time by, on average, 30 minutes. "],
        ["Swift", DiSwift, "Created a multi-page IOS social media application with Swift and SwiftUI to allow users to create and share recommendations."],
        ["C/C++", SiCplusplus, "Learned to implement multiple data structures in a variety of projects with C++ and created a robotic car with an Arduino and C."]]
    const technologies: NestedList<any> = [
        ["HTML", BiLogoHtml5, "Created the static front end for the the CELTS and LSF websites using plain HTML and used HTML to build React components for a variety of other projects."],
        ["CSS", BiLogoCss3, "Utilized both plain CSS, Bootstrap, and TailwindCSS to customize and style 5 different front-ends."],
        ["Node.js", FaNodeJs, "Used React, Node, and Next to create a variety of front and back ends for full-stack web applications."],
        ["Docker", BiLogoDocker, "Containerized multiple projects with Docker and dealt with updating and tagging images."],
        ["Flask", BiLogoFlask, "Created the backend for a web application using Flask and Python with a MySQL database."],
        ["Git", BiLogoGit, "Used Git and Git Bash to track and control 20+ projects."],
        ["GitHub", BiLogoGithub, "Used GitHub to track, organize, and store 20+ version controlled projects."],
        ["GitLab", BiLogoGitlab, "Used GitLab to version control a project and set up a CI/CD pipeline on a project."],
        ["Helm", SiHelm, "Used Helm and Helm Charts to abstract and organize Kubernetes manifests."],
        ["Kubernetes", BiLogoKubernetes, "Developed a full-stack application to use Argo CD as the software agent to pull changes made in Git to a Kubernetes cluster"], 
        ["Argo CD", SiArgo, "Used Argo CD as the software agent on a GitOps tool meant to automatically update application versions."], 
        ["GitHub Actions", SiGithubactions, "Developed a continuous integration continuous development pipelines to build, test and deploy code with GitHub Actions."], 
        ["Linux", DiLinux, "Have developed on Ubuntu and Fedora Linux environments in many job positions and on many projects."], 
        ["TensorFlow", SiTensorflow, "Trained a text summarization machine learning model to take large pieces of text and consolidate them into much shorter form."], 
        ["Jenkins", SiJenkins, "Developed a continuous integration continuous development pipelines to build, test and deploy code with Jenkins"]]
    const concepts: NestedList<any> = [
        ["Data Structures", "Taken classes and developed many projects utilizing a variety of different data structures."], 
        ["GitOps", "Developed a full-stack application to use Argo CD as the software agent to pull changes made in Git to a Kubernetes cluster."], 
        ["Web Development", "Developed or worked on 5 web applications with a variety of front and backend technologies."], 
        ["Machine Learning", "Trained multiple genetic algorithms, created a text summarization model, and fine-tuned OpenAI's API to meet the needs of personal projects."], 
        ["Agile", "Worked in 3 agile work environments, meeting daily for scrum, executing sprints, and pruning backlogs."], 
        ["CI/CD", "Developed 2 different continuous integration continuous development pipelines to build, test and deploy code."], 
    ]
    return (
        <div>
            <div className="flex flex-row items-center">
                <h2 className="text-5xl font-bold pr-5">Skills</h2>
                <FaCode className="h-16 w-16"/>
            </div>            
            <div className="flex flex-col w-full">
                <p className="pt-2 text-xl">Languages</p>
                <div className="flex flex-wrap">
                {languages.map(([language, Icon, description], index) => (
                    <div key={index} className="flex flex-col w-1/6 justify-between bg-light-pastel-green p-3 m-3 drop-shadow-md rounded-lg">
                        <div className="flex flex-row items-center p-4">
                            <Icon className="pr-2 h-10 w-10"/>
                            <p className="text-xl font-semibold">{language}</p>
                        </div>
                        <p className="px-3 pb-3 h-full flex">{description}</p>
                    </div>
                ))}
                </div>
                <p className="pt-2 text-xl">Technologies</p>
                <div className="flex flex-wrap">
                {technologies.map(([technologies, Icon, description], index) => (
                    <div key={index} className="flex flex-col w-1/6 justify-between bg-light-pastel-green p-3 m-3 drop-shadow-md rounded-lg">
                        <div className="flex flex-row items-center p-4">
                            <Icon className="pr-2 h-10 w-10"/>
                            <p className="text-xl font-semibold">{technologies}</p>
                        </div>
                        <p className="px-3 h-full pb-3">{description}</p>
                    </div>
                ))}
                </div>
                <p className="pt-2 text-xl">Concepts</p>
                <div className="flex flex-wrap">
                {concepts.map(([concepts, description], index) => (
                    <div key={index} className="flex flex-col w-1/6 justify-between bg-light-pastel-green p-3 m-3 drop-shadow-md rounded-lg">
                        <div className="flex flex-row items-center p-4">
                            <p className="text-xl font-semibold">{concepts}</p>
                        </div>
                        <p className="px-3 pb-3 h-full">{description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}