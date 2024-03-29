import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { TypeProductCard } from '../components/product/type-product-card';
import { useCallback, useEffect, useState } from "react";
import { getAllProductType } from "../components/Services/ProductType/ProductTypeService";



function Product() {
  const [ProductType, setProductType]= useState()
  const loadData = useCallback(async()=>{
      const res = await getAllProductType()
      if(res.status===200){
        setProductType(res.data.data)
      }
  },[])
  useEffect(()=>{
    loadData()
  },[loadData])
  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          {
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth={false}>
                <ProductListToolbar />
                <Box sx={{ pt: 3 }}>
                  <Grid container spacing={3}>
                    {ProductType?.map((product) => (
                      <Grid item key={product._id} lg={4} md={6} xs={12}>
                        <TypeProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                  }}
                >
                  <Pagination color="primary" count={3} size="small" />
                </Box>
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
      
    </>
  );
}
export default Product;
