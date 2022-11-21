import Header from "../components/Header/Header";
import "../components/Search/Search.scss";
import { useEffect } from "react";
import BoxProduct from "../components/Nav/box-product";
function HomePage() {
  useEffect(() => {
    document.title = "Trang chủ";
  });
  return (
    <>
      <Header />
      <div className="relative max-h-[416px] mt-[150px]">
        <BoxProduct />
        <BoxProduct />
      </div>
    </>
  );
}
export default HomePage;
