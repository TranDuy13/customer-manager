import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../components/product/product-card";
import { useCallback, useEffect, useState } from "react";
import { getAllProductType } from "../Services/ProductType/ProductTypeService";
import { getAllProduct } from "../Services/Product/Product";

function BoxProduct() {
    const [ProductType, setProductType] = useState();
    const loadData = useCallback(async () => {
        const res = await getAllProductType();
        if (res.status === 200) {
            setProductType(res.data.data);
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);
    const [product, setProduct] = useState();
    const loadData1 = useCallback(async () => {
        const res = await getAllProduct();
        if (res.status == 200) {
            setProduct(res.data.data);
        }
    }, []);
    useEffect(() => {
        loadData1();
    }, [loadData1]);
    const [choose, setChoose] = useState();
    return (
        <>
            <div className="pr-[16px] pl-[16px] w-full mx-auto border-none border-[1px] opacity-100 mt-[30px] max-w-[1440px] mb-[1,5rem]">
                <div className=" flex justify-center">
                    <Box
                        sx={{
                            maxWidth: "1200px",
                        }}>
                        <div className="flex data-grid border-sky-400 border-[5px]">
                            <div className="bg-sky-400  max-[1024px]:hidden ">
                                <div className="w-[190px]  text-white font-bold text-xl uppercase mt-3 ml-1 mr-2 ">
                                    <div className="h-[40px]">Sản phẩm</div>
                                    {ProductType?.map((x, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setChoose(x._id)}
                                            className={`uppercase mb-1 cursor-pointer font-semibold text-sm w-full py-[30px] ${
                                                choose === x._id ? "bg-sky-600" : "bg-sky-300"
                                            }  text-center `}>
                                            {x.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cursor-pointer m-[5px]">
                                <Box className="xl:min-w-[900px] min-w-[200px]" sx={{ pt: 5 }}>
                                    <div className="grid-cols-4 grid px-4 gap-2 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-2 max-[425px]:grid-cols-1">
                                        {product?.map((x, index) =>
                                            !choose ? (
                                                <ProductCard product={x} />
                                            ) : (
                                                choose === x.types?._id && (
                                                    <>
                                                        <ProductCard product={x} />
                                                        {/* <Grid
                                                        item
                                                        key={x.id}
                                                        lg={x?.length > 3 ? 4 : x?.length}
                                                        md={x?.length < 3 ? 6 : 3}
                                                        sx={{ display: "flex", justifyContent: "center" }}>
                                                       
                                                    </Grid> */}
                                                    </>
                                                )
                                            )
                                        )}
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
}
export default BoxProduct;
