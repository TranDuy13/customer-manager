import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import banner from "./banner.png";

function Header() {
    const location = useLocation();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-100 bg-gradient-to-b bg-white">
                <Search />
                <marquee >Chất lượng uy tín tạo nên thương hiệu</marquee>

            </header>
            {location.pathname === "/" && (
                <div className="mt-[120px] justify-center flex w-full">
                    <img className="sm:min-w-[60%] xl:w-[60%]  " src={banner} alt="" />
                </div>
            )}
        </>
    );
}
export default Header;
