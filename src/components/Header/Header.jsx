import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import banner from "./banner.png";
import { useCallback, useEffect, useState } from "react";
import { getAllBanner } from "../Services/Banner";

function Header() {
    const location = useLocation();
    const [valueBanner, setValueBanner] = useState();
    const loadData = useCallback(async () => {
        const res = await getAllBanner();
        if (res.status === 200 && res.data?.data) {
            setValueBanner(res.data.data[0]);
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-100 bg-gradient-to-b bg-white">
                <Search />
                <marquee >Chất lượng uy tín tạo nên thương hiệu</marquee>

            </header>
            {location.pathname === "/" && (
                <div className="mt-[120px] justify-center flex w-full">
                    <img className="sm:min-w-[60%] xl:w-[60%] max-h-[300px]  " src={valueBanner?.image} alt="" />
                </div>
            )}
        </>
    );
}
export default Header;
