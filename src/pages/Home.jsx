import Header from "../components/Header/Header";
import "../components/Search/Search.scss";
import { useEffect } from "react";
import BoxProduct from "../components/Nav/box-product";
import Footer from "../components/Footer/Footer";
function HomePage() {
  useEffect(() => {
    document.title = "Trang chủ";
  });
  return (
    <>
      <Header />
      <div className="relative min-h-[416px] mt-[10px] mb-[10px]">
        <BoxProduct />
      </div>
      <Footer/>
    </>
  );
}
export default HomePage;
