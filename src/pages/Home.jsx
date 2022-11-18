import Header from "../components/Header/Header";
import '../components/Search/Search.scss'
import {useEffect} from 'react'
function HomePage() {
    useEffect(() => {
        document.title = "Trang chủ";
      });
  return (
    <>
        <Header/>
    </>
  );
}
export default HomePage;
