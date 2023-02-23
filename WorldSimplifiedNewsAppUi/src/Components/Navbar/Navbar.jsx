import { Link } from "react-scroll";


function Navbar () {
    const sections = ['Home', 'About', 'Contact'];

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

    return (
      <div className={"flex flex-row justify-end space-x-5 md:space-x-16 w-10/12 fixed top-14 h-16 bg-transparent mx-6  md:mx-16 text-xl font-playfair hover:cursor-pointer"}>
        <div className="basis-3/5" >
            <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                LOGO
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
               <p id="Home-link" onClick={handleLinkClick} className='underline underline-offset-4'>Home</p>
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
                <p id="About-link" onClick={handleLinkClick} >About</p>
            </Link>
        </div>
        <div >
            <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                <p id="Contact-link" onClick={handleLinkClick} >Contact</p>
            </Link>
        </div>
        
      </div>
    );
  }

export default Navbar