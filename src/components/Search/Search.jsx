import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Search.scss";
import { Box } from "@mui/system";
import logo from "./logo.jpg";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useCallback } from "react";
import { getAllProductType } from "../Services/ProductType/ProductTypeService";
function Search() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
    const [ProductType, setProductType]= useState()
    const loadData = useCallback(async()=>{
        const res = await getAllProductType()
        if(res.status===200){
          setProductType(res.data.data)
        }
    },[])
    useEffect(()=>{
      loadData()
    },[loadData])
    return (
        <>
            <div className="search-wrapper">
                <div className="container">
                    <div className=" flex items-center w-[100px]">
                        <Link to="/" className="top-1875 box-border">
                            <img alt="" className="w-[90%]" src={logo} />
                        </Link>
                    </div>
                    <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}>
                        <Box sx={{ position: "relative" }}>
                            <button className="top-1875 box-border mr-[20px]" onClick={handleClick}>
                                <div className="svg-icon flex items-center dropdown">
                                    <DensityMediumOutlinedIcon sx={{ fontSize: "13px", mr: "3px" }} />
                                    <span className="max-[1024px]:hidden">Danh mục sản phẩm{" "}</span>
                                </div>
                            </button>
                            {open ? (
                                <div className="dropdown-content">
                                    {ProductType?.map((item) => (
                                        <div className="pr-[10px] pl-[10px] min-w-[180px] cursor-pointer hover:bg-gray-200 pt-[10px] pb-[10px]">
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </Box>
                    </ClickAwayListener>

                    <div className="flex flex-col justify-start w-840 relative bg-gray-200 ">
                        <div className="w-full item-search">
                            <div className="flex item-input-search bg-gray-200 ">
                                <form action="" className="form-search bg-gray-200 ">
                                    <input className="flex flex-1 items-center outline-none border-0 p-0 m-0 bg-gray-200 " />
                                </form>
                                <button className="relative overflow-visible outline-0 bg-blue-1 h-34 pl-4 pr-4 minWidth-search">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 search-icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}
export default Search;
