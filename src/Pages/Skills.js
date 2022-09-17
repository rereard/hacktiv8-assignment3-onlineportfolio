const Skills = () => {
    return(
        <div className="w-9/12 flex flex-col justify-center text-orange-600 text-2xl font-bold">
            <h1 className=" text-6xl">Skills</h1>
            <br />
            <ol className="list-inside list-none">
                <li><i class="fa-solid fa-angle-right"></i> Web Programming</li>
                <ul className="list-none list-inside ml-6 mb-6">
                    <li><i class="fa-solid fa-angles-right"></i> HTML5</li>
                    <li><i class="fa-solid fa-angles-right"></i> CSS</li>
                    <li><i class="fa-solid fa-angles-right"></i> JavaScript</li>
                    <li><i class="fa-solid fa-angles-right"></i> Laravel</li>
                    <li><i class="fa-solid fa-angles-right"></i> ReactJS</li>
                </ul>
                <li><i class="fa-solid fa-angle-right"></i> Basic Programming</li>
                <ul className="list-none list-inside ml-6 mb-6">
                    <li><i class="fa-solid fa-angles-right"></i> Python</li>
                    <li><i class="fa-solid fa-angles-right"></i> C++</li>
                    <li><i class="fa-solid fa-angles-right"></i> Java</li>
                </ul>
                <li><i class="fa-solid fa-angle-right"></i> Basic Android Studio with Java</li>
            </ol>
        </div>
    )
}
export default Skills