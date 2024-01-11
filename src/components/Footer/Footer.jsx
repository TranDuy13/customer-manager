import logo from "../Search/logo.jpg";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useCallback, useEffect, useState } from "react";
import { getAllinfo } from "../Services/Infomation/InfomationService";
function Footer() {
    const [InfoApp, setInfoApp] = useState();
    const loadData = useCallback(async () => {
        const res = await getAllinfo();
        if (res.status === 200 && res.data?.data) {
            setInfoApp(res.data?.data[0]);
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);
    return (
        <>
            <footer className="border-t-4 border-sky-700 h-[400px]  flex justify-center min-w-[350px] max-w-[1920px]">
                <div className="justify-between max-w-[1200px] flex-col flex md:flex-row    ">
                    <div className="p-5">
                        <img className="w-[100px]" src={logo} alt="" />
                        <div className="max-w-[320px] mb-3">
                            {InfoApp?.title}
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="uppercase font-bold border-b-[1px] mb-2 border-sky-700">Thông tin liên hệ</div>
                        <div className="max-w-[320px] mb-3">
                            <ApartmentIcon sx={{ marginRight: "5px" }} />
                            Công ty TNHH HST Huy Hoàng
                        </div>
                        <div className="max-w-[420px] mb-3">
                            <LocationOnIcon sx={{ marginRight: "5px" }} />
                            {InfoApp?.address}
                        </div>
                        <div className="max-w-[420px] mb-3 hover:text-sky-400">
                            <PublicIcon sx={{ marginRight: "5px" }} />
                            www.hsthuyhoang.com
                        </div>
                        <div className="max-w-[420px] mb-3">
                            <PhoneIcon sx={{ marginRight: "5px" }} />
                            {InfoApp?.phone}
                        </div>
                        
                        <div className="max-w-[420px] mb-3 hover:text-sky-400">
                            <FacebookIcon sx={{ marginRight: "5px" }} />
                            <a href={InfoApp?.linkfb}> {InfoApp?.linkfb}</a>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="uppercase font-bold border-b-[1px] mb-2 border-sky-700">HƯỚNG DẪN</div>
                        <div className="max-w-[320px] mb-3">Hướng dẫn mua hàng</div>
                        <div className="max-w-[420px] mb-3">Giao nhận và thanh toán</div>
                        <div className="max-w-[420px] mb-3 hover:text-sky-400">Đổi trả và bảo hành</div>
                        <div className="max-w-[420px] mb-3">Đăng ký thành viên</div>
                    </div>
                    <div className="p-5  max-[1024px]:hidden">
                        <div className="uppercase font-bold border-b-[1px] mb-2 border-sky-700">Lượt truy cập</div>
                       
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
