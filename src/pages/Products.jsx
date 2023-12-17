import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { customers } from "../__mocks__/customers";
import { useCallback, useEffect, useState } from "react";
import { getAllProduct } from "../components/Services/Product/Product";

function Products() {
    const [product, setProduct] = useState();
    const loadData = useCallback(async () => {
        const res = await getAllProduct();
        if (res.status == 200) {
            setProduct(res.data.data);
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);
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
                            }}>
                            <Container maxWidth={false}>
                                <CustomerListToolbar />
                                <Box sx={{ mt: 3 }}>
                                    <CustomerListResults customers={product} />
                                </Box>
                            </Container>
                        </Box>
                    }
                </DashboardLayout>
            </ThemeProvider>
        </>
    );
}
export default Products;
