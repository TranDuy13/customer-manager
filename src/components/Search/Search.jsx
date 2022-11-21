import { Link } from "react-router-dom";
import { useState } from "react";
import "./Search.scss";
import { Box } from "@mui/system";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowIcon from "@mui/icons-material/Window";
import ClickAwayListener from "@mui/material/ClickAwayListener";
function Search() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const item = [
    {
      title: "Sản phẩm 1",
    },
    {
      title: "Sản phẩm 2",
    },
    { title: "Sản phẩm 3" },
    { title: "Sản phẩm 4" },
  ];
  return (
    <>
      <div className="search-wrapper">
        <div className="container">
          <Link to="/" className="top-1875 box-border">
            <div className=" flex items-center">
              <WindowIcon
                sx={{
                  fontSize: "35px",
                  color: "rgb(25, 118, 210)",
                  mr: "30px",
                }}
              />
            </div>
          </Link>
          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
          >
            <Box sx={{ position: "relative" }}>
              <button
                className="top-1875 box-border mr-[20px]"
                onClick={handleClick}
              >
                <div className="svg-icon flex items-center dropdown">
                  <DensityMediumOutlinedIcon
                    sx={{ fontSize: "13px", mr: "3px" }}
                  />
                  Danh mục sản phẩm{" "}
                </div>
              </button>
              {open ? (
                <div className="dropdown-content">
                  {item.map((item) => (
                    <div className="pr-[60px] pl-[30px] cursor-pointer hover:bg-gray-200 pt-[10px] pb-[10px]">
                      {item.title}
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
                    strokeWidth={2}
                  >
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
          <div className="search-cart"></div>
        </div>
      </div>
    </>
  );
}
export default Search;
