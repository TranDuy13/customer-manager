import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../theme";
import AddProduct from "../components/product/add-product";
import { AddProductDetails } from "../components/product/add-product-details";
import {useEffect} from 'react'

function AddProducts() {
  useEffect(() => {
    document.title = "Thêm sản phẩm";
  });
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
              <Container maxWidth="xl">
                <Typography sx={{ mb: 3 }} variant="h4">
                  Thêm sản phẩm
                </Typography>
                <Grid container spacing={3}>
                    <AddProductDetails />
                </Grid>
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}


export default AddProducts;
