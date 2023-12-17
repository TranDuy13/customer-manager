import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import logo from "../components/Search/logo.jpg";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductById } from "../components/Services/Product/Product";
function ProductDetails() {
    const location = useLocation();
    const [detail, setDetail] = useState();
    const loadData = useCallback(async () => {
        const res = await getProductById(location.pathname.split("/")[location.pathname.split("/").length - 1]);
        if (res.status === 200) {
            setDetail(res.data.data);
        }
    }, [location.pathname]);
    useEffect(() => {
        loadData();
    }, [loadData]);
    return (
        <>
            <Header />
            {detail ? (
                <div className="relative min-h-[620px] mt-[10px] mb-[10px]">
                    <div className="pr-[16px] pl-[16px] w-full mx-auto border-none border-[1px] opacity-100 mt-[130px] max-w-[1340px] mb-[1,5rem]">
                        <div className="flex items-center">
                            <HomeIcon />
                            <span>Trang chủ </span>{" "}
                            <ChevronRightIcon sx={{ fontWeight: "300", strokeWidth: 1, opacity: "50%" }} />{" "}
                            <span>{detail?.types?.name}</span>{" "}
                            <ChevronRightIcon sx={{ fontWeight: "300", strokeWidth: 1, opacity: "50%" }} />
                            <span className="text-sky-700 font-bold cursor-pointer">{detail?.name_product}</span>
                        </div>
                        <div className="mt-[20px] flex flex-col flex lg:flex-row lg:flex-nowrap flex-wrap content-center justify-center">
                            <div className="w-[70%] mr-[25px]">
                                <div className="">
                                    <img className="w-auto h-auto min-w-[280px]" src={detail?.images[0]} alt="" />
                                </div>
                            </div>
                            <div className="w-[70%] mr-[25px] min-w-[280px]">
                                <div className="">
                                    <div className="font-bold text-[20px]">{detail?.name_product}</div>
                                    <div className="mt-[10px] flex justify-between">
                                        <div>
                                            Nhãn hiệu: <span className="font-bold">{detail?.brand}</span>
                                        </div>
                                        <div>
                                            Model: <span className="font-bold">{detail?.model}</span>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex justify-between">
                                        <div>
                                            Loại: <span className="font-bold">Phụ Tùng Thủy Lực</span>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex justify-between">
                                        <div>
                                            <span className="italic ">Loại: {detail?.types?.name} </span>
                                            <span className="italic ">{detail.description}</span>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] text-[#ff0000] text-[25px] font-bold flex justify-between">
                                        Liên hệ
                                    </div>
                                    <div className="mt-[10px] text-[#ff0000] w-[220px] text-[25px] pr-2 font-bold flex justify-between border-[2px] border-[#ff0000]">
                                        <PermPhoneMsgIcon
                                            sx={{ color: "white", background: "#ff0000", fontSize: "40px" }}
                                        />
                                        0917178028
                                    </div>
                                    <div className="mt-[10px] text-[#ff0000] w-[220px] text-[25px] pr-2 font-bold flex justify-between border-[2px] border-[#ff0000]">
                                        <PermPhoneMsgIcon
                                            sx={{ color: "white", background: "#ff0000", fontSize: "40px" }}
                                        />
                                        0865778028
                                    </div>
                                </div>
                            </div>
                            <div className="w-[30%] mr-[25px] border-[2px] p-3 max-[768px]:hidden">
                                <div className="flex items-center">
                                    <img className="w-[50%] h-auto" src={logo} alt="" />
                                </div>
                                <div className="font-semibold">
                                    {" "}
                                    HST Huy Hoàng chuyên nhập khẩu và phân phối phụ tùng máy xúc, đào - dầu nhớt
                                </div>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <div className="bg-sky-900 uppercase text-white max-w-[300px] text-center p-2">
                                Thông tin sản phẩm
                            </div>
                            <div className="border-[1px] p-5">
                                {" "}
                                <div className="">
                                    <div className="font-bold text-[20px]">{detail?.name_product}</div>
                                    <div className="mt-[10px] flex justify-between">
                                        <div>
                                            Nhãn hiệu: <span className="font-bold">{detail?.brand}</span>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex justify-between">
                                        <div>
                                            Loại: <span className="font-bold">{detail?.types?.name}</span>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex justify-between">
                                        <div>
                                            <span className="italic ">Loại: </span>
                                            <span className="italic ">{detail?.description}</span>
                                        </div>
                                    </div>
                                </div>
                                {detail?.images?.map((x, i) => (
                                    <div key={i}>
                                        <img className="w-[70%]" src={x} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 style={{marginTop: '200px', paddingLeft: '40%', fontWeight:'bold', fontSize:'50px'}}>Sản phẩm không hợp lệ</h1>
            )}
            <Footer />
        </>
    );
}
export default ProductDetails;
