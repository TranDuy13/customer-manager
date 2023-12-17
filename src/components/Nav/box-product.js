import { products } from "../../__mocks__/products";
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
    console.log(product?.length);
    const [choose, setChoose] = useState();
    console.log();
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
                                <Box sx={{ pt: 5 }}>
                                    <Grid container spacing={2}>
                                        {product?.map((x, index) =>
                                            !choose ? (
                                                <Grid
                                                    item
                                                    key={x.id}
                                                    lg={x?.length > 3 ? 4 : x?.length}
                                                    md={x?.length < 3 ? 6 : 3}
                                                    sx={{ display: "flex", justifyContent: "center" }}>
                                                    <ProductCard product={x} />
                                                </Grid>
                                            ) : (
                                                choose ===
                                                x.types?._id?(
                                                    <Grid
                                                        item
                                                        key={x.id}
                                                        lg={x?.length > 3 ? 4 : x?.length}
                                                        md={x?.length < 3 ? 6 : 3}
                                                        sx={{ display: "flex", justifyContent: "center" }}>
                                                        <ProductCard product={x} />
                                                    </Grid>
                                                ):<div style={{color:'transparent'}}>Không có sản phẩm</div>
                                            )
                                        )}
                                    </Grid>
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
