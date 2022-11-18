import { Link } from "react-router-dom";
import {
  Button,

} from '@mui/material';
import { useSelector } from "react-redux";
import "./Search.scss";
function Search() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="search-wrapper">
        <div className="container">
          <Link to="/" className="top-1875 box-border">
            <div className="svg-icon">
              <img src className="shopee-icon" alt="" />
            </div>
          </Link>
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
          <div className="search-cart">
            <div className="search-cart-wrapper ">
              <Button color="primary" variant="contained">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/admin/producttype/new"
                >
                  {" "}
                  {user?`Quản lý`:`Đăng nhập`}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
