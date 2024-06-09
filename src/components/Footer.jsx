import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className=" flex justify-between items-center p-1 gap-2 min-[768px]:w-[50%] min-[768px]:ms-[5rem] min-[768px]:mt-[2rem] max-[768px]:m-4 flex-wrap max-[768px]:flex-nowrap max-[768px]:flex-col max-[768px]:items-start">
        <span className=" text-lg font-medium">Call me: <br />123-456-789</span>
        <span className=" text-lg font-medium">Email: <br />xxx@xyz.com</span>
        <div className=" flex justify-center gap-10">
            <Link><FaGithub className=" text-[2rem]" /></Link>
            <Link><FaLinkedin className=" text-[2rem]"/></Link>
            <Link><FaFigma className=" text-[2rem]"/></Link>
        </div>
    </footer>
  )
}

export default Footer
