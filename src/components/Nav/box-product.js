import { products } from "../../__mocks__/products";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ProductCard } from "../../components/product/product-card";

function BoxProduct() {
  return (
    <>
      <div className="pr-[16px] pl-[16px] w-full mx-auto border-none border-[1px] opacity-100 mt-[30px] max-w-[1440px] mb-[1,5rem]">
        <div className=" flex justify-center">
          <Box
            sx={{
              maxWidth: "1200px",
            }}
          >
            <div className="data-grid rounded-md border-sky-400 border-[10px]">
              <div className="bg-sky-400 text-white text-[20px] leading-[28px] pl-[10px] pb-[5px]">
                Sản phẩm
              </div>
              <div className="cursor-pointer m-[5px]">
                <Box sx={{ pt: 5 }}>
                  <Grid container spacing={2}>
                    {products.map((product, index) =>
                      index < 12 ? (
                        <Grid item key={product.id} lg={3} md={4} xs={15} sx={{display:'flex', justifyContent:'center'}}>
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
