import { useState } from "react";
import { motion } from "motion/react";
import DownloadResume from "../components/DownloadResume";

const BASE = import.meta.env.BASE_URL;

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href={BASE || '/'}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kanishk
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? `${BASE}assets/close.svg` : `${BASE}assets/menu.svg`}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          {/* desktop nav + resume button */}
          <nav className="hidden sm:flex items-center gap-6">
            <Navigation />
            <div className="ml-4">
              <DownloadResume />
            </div>
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
            {/* mobile resume button */}
            <div className="mt-4 flex justify-center">
              <DownloadResume />
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
