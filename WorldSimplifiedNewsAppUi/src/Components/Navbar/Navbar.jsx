import { Link } from "react-scroll";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";


function Navbar () {
    const sections = ['Home', 'About', 'Sign up'];
    const [formOpen, setForm] = useState(false);

    // underline the selected navbar link and remove the underline of the other non-selected navbar links
    const handleLinkClick = (e) => {
        sections.forEach((section) => {
            if(section === e.target.innerText) {
                document.getElementById(section + '-link').classList.add('underline', 'underline-offset-4');
            } else {
                document.getElementById(section + '-link').classList.remove('underline', 'underline-offset-4');
            }
        })
    }

    // trigger the login modal to close
    const handleOpenForm = () => {
        setForm(true);
    }

    // trigger the login modal to open
    const handleFormClose = () => {
        setForm(false);
    } 

    return (
      <div className={" z-50 whitespace-nowrap place-items-center backdrop-blur-[3px] flex flex-row justify-end space-x-3 sm:space-x-7 md:space-x-10 w-full mx-0 md:w-10/12 fixed top-5  h-16 bg-transparent sm:text-xl md:mx-16 text-lg font-bold font-playfair"}>
        <div className="basis-3/5 md:ml-0 ml-3" >
            <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                <p className="text-white hover:cursor-pointer">WS</p>
            </Link>
        </div>
        <div >
            <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
            >
               <p id="Home-link" onClick={handleLinkClick} className='underline underline-offset-4 hover:cursor-pointer'>Home</p>
            </Link>
        </div>
        <div >
            <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                <p id="About-link" className="hover:cursor-pointer" onClick={handleLinkClick} >About</p>
            </Link>
        </div>
        <div >
            <Link
                activeClass="active"
                to="signup-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                <p className="hover:cursor-pointer" id="Sign up-link" onClick={handleLinkClick} >Sign up</p>
            </Link>
        </div>
        <div> / </div>
        <div>
            <p className="hover:cursor-pointer mr-2" id="Login-link" onClick={handleOpenForm}>Log in</p>
        </div>
        <LoginForm formOpen={formOpen} handleFormClose={handleFormClose}/>
      </div>
    );
  }

export default Navbar