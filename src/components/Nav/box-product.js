import { products } from "../../__mocks__/products";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../components/product/product-card";

function BoxProduct() {
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
                                    <div className="uppercase mb-1 font-semibold text-sm w-full py-[30px] bg-sky-300 text-center ">
                                      phụ tùng máy đào 1
                                    </div>
                                    <div className="uppercase mb-1 font-semibold text-sm w-full py-[30px] bg-sky-300 text-center ">
                                      phụ tùng máy đào 1
                                    </div>
                                    <div className="uppercase mb-1 font-semibold text-sm w-full py-[30px] bg-sky-300 text-center ">
                                      phụ tùng máy đào 1
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer m-[5px]">
                                <Box sx={{ pt: 5 }}>
                                    <Grid container spacing={2}>
                                        {products.map((product, index) =>
                                            index < 8 ? (
                                                <Grid
                                                    item
                                                    key={product.id}
                                                    lg={3}
                                                    md={4}
                                                    sx={{ display: "flex", justifyContent: "center" }}>
                                                    <ProductCard product={product} />
                                                </Grid>
                                            ) : null
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
