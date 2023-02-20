import { Link } from "react-scroll";

function Navbar () {

    return (
      <div className="flex w-full fixed bg-sky-900">
        <div className="basis-1/3">
            <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                Home
            </Link>
        </div>
        <div className="basis-1/3">
            <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                About
            </Link>
        </div>
        <div className="basis-1/3">
            <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
            >
                Contact
            </Link>
        </div>
        
      </div>
    );
  }

export default Navbar