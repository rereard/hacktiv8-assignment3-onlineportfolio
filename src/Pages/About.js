const About = () => {
    return(
        <div className="w-9/12 flex flex-col justify-center text-orange-600 text-2xl font-bold">
            <h1 className=" text-6xl">About Me</h1>
            <br />
            <p>Hello! My name is Muhammad Rere Ardany, undergraduate Informatics Engineering student at Dian Nuswantoro University. You can look about my updates at the links below.</p>
            <div className="mt-8 text-4xl">
                <a className="hover:text-red-800 hover:ease-in-out transition duration-200" href="https://www.linkedin.com/in/rereardany/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a> | {" "}
                <a className="hover:text-red-800 hover:ease-in-out transition duration-200" href="https://github.com/rereard" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}
export default About