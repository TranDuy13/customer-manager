import "./header.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header() {

  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 bg-gradient-to-b ">
        <div className="header">
          <nav className="nav-wrapper">

            <div className="nav-space"></div>
            <ul className="flex items-center list-none h-2.125">
              <li className="cursor-pointer select-none flex items-center text-black justify-center relative pl-625">
                <div className="relative cursor-pointer">
               
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <Search />
      </header>
    </>
  );
}
export default Header;
