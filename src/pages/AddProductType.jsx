import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../theme";
import { useEffect } from "react";
import AddProductTypes from "../components/product/add-product-type";
import { AddProductTypeDetails } from "../components/product/add-product-type-details";

function AddProductType() {
  useEffect(() => {
    document.title = "Thêm loại sản phẩm";
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
              <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4">
                  Thêm sản loại phẩm
                </Typography>
                <Grid container spacing={3}>
                  <Grid item lg={8} md={6} xs={12}>
                    <AddProductTypeDetails />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}


export default AddProductType;
