import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <nav className=" flex justify-between items-center gap-2 w-full p-1 flex-wrap">
            <div>
                <Link className=" text-lg">LOGO</Link>
            </div>
            <div className=" flex justify-center gap-2 text-lg">
                <Link to={'/'}>Home</Link>
                <a href="#about-me">About Me</a>
                <a href="#technologies">Technologies</a>
            </div>
            <div className=" flex justify-center gap-2 text-[1.5rem]">
                <Link><FaGithub></FaGithub></Link>
                <Link><FaLinkedin></FaLinkedin></Link>
                <Link><FaFigma></FaFigma></Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
