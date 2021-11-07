/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';

const Navbar = ({ home, register, articles, aboutus, faq }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300';
  return (
    <>
      <nav className="flex flex-col sm:flex sm:flex-row rounded-l-lg ">
        <div className="bg-white flex justify-center">
          <Link to="/">
            <div className="pb-4 px-20 my-2">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="bg-red-900 w-full rounded-l-lg">
          <div className="flex flex-col justify-center items-center text-lg sm:ml-20 sm:flex sm:flex-row sm:space-x-20 sm:mt-5">
            <div>
              <Link className={home} to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className={register} to="/class">
                Register
              </Link>
            </div>
            <div>
              <Link className={articles} to="/articles">
                Articles
              </Link>
            </div>
            <div>
              <Link className={aboutus} to="/about">
                About Us
              </Link>
            </div>
            <div>
              <Link className={faq} to="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
