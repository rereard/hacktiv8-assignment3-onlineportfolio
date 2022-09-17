import { NavLink } from 'react-router-dom'
import AvaPic from './AvaPic'
const Navbar = () => {
    return(
        <div className="flex justify-center items-center flex-col bg-orange-500 h-screen w-1/5 left-0 top-0 z-0 sticky mr-14">
            <AvaPic img="https://media-exp1.licdn.com/dms/image/C4D03AQGJRBbTQy9XFA/profile-displayphoto-shrink_400_400/0/1656292216616?e=1668643200&v=beta&t=TWERrxcW6o0dW3OS1ZcL2AfZBhLePyQDRrbzJ9Agius"/>
            <nav className='mt-5 text-white text-2xl font-bold flex flex-col items-center'>
                <NavLink className='focus:text-red-800 hover:text-red-800 hover:ease-in-out transition duration-200 mb-5' to="/">Home</NavLink>
                <NavLink className='focus:text-red-800 hover:text-red-800 hover:ease-in-out transition duration-200 mb-5'to="/about">About</NavLink>
                <NavLink className='focus:text-red-800 hover:text-red-800 hover:ease-in-out transition duration-200 mb-5'to="/experience">Experience</NavLink>
                <NavLink className='focus:text-red-800 hover:text-red-800 hover:ease-in-out transition duration-200 mb-5'to="/skills">Skills</NavLink>
                <NavLink className='focus:text-red-800 hover:text-red-800 hover:ease-in-out transition duration-200 mb-5'to="/interest">Interest</NavLink>
                <NavLink className='focus:text-red-800 hover:text-red-800 hover:ease-in-out transition duration-200 'to="/awards">Awards</NavLink>
            </nav>
        </div>
    )   
}
export default Navbar