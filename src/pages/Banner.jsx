import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { theme } from "../theme";
import AddProduct from "../components/product/add-product";
import { AddProductDetails } from "../components/product/add-product-details";
import { useCallback, useEffect, useRef, useState } from "react";
import { CreateBanner, getAllBanner, updateBanner } from "../components/Services/Banner";
import { ToastContainer, toast } from "react-toastify";

function Banner() {
    useEffect(() => {
        document.title = "Banner";
    });
    const [valueBanner, setValueBanner] = useState();
    const fileInputRef = useRef(null);
    const loadData = useCallback(async () => {
        const res = await getAllBanner();
        if (res.status === 200 && res.data?.data) {
            setValueBanner(res.data.data[0]);
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);
    const [selectedFiles, setSelectedFiles] = useState();
    const handleFileChange = (e) => {
        const _files = Array.from(e.target.files);
        setSelectedFiles(_files);
    };
    const handleSubmitBanner = async () => {
        if (!valueBanner) {
            const data = new FormData();
            data.append("files", selectedFiles[0]);
            const res = await CreateBanner(data);
            if (res.status === 200) {
                toast.success("Tạo banner thành công");
            } else {
                toast.error("Tạo banner không thành công, vui lòng thử lại");
            }
        }else{
          const data = new FormData();
          data.append("files", selectedFiles[0]);
          const res = await updateBanner(valueBanner?._id,data );
          if (res.status === 200) {
              toast.success("Cập nhật banner thành công");
          } else {
              toast.error("Cập nhật banner không thành công, vui lòng thử lại");
          }
        }
    };
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
                            <Container className="flex justify-center" maxWidth="xl">
                                <Typography sx={{ mb: 3 }} variant="h4">
                                    Banner
                                </Typography>

                                <div className="flex justify-center">
                                    <div>
                                        <Card>
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        alignItems: "center",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}>
                                                    <CameraAltIcon
                                                        src
                                                        sx={{
                                                            height: 64,
                                                            mb: 2,
                                                            width: 64,
                                                        }}
                                                    />
                                                    <Typography
                                                        color="textPrimary"
                                                        gutterBottom
                                                        variant="h5"></Typography>
                                                    <Typography color="textSecondary" variant="body2"></Typography>
                                                    <Typography color="textSecondary" variant="body2"></Typography>
                                                </Box>
                                            </CardContent>
                                            <Divider />
                                            <CardActions>
                                                <Button
                                                    onClick={() => {
                                                        fileInputRef?.current.click();
                                                    }}
                                                    onChange={handleFileChange}
                                                    color="primary"
                                                    fullWidth
                                                    variant="text">
                                                    Chèn ảnh banner
                                                    <input
                                                        ref={fileInputRef}
                                                        type="file"
                                                        accept="image/*"
                                                        hidden
                                                        multiple
                                                        onChange={handleFileChange}
                                                    />
                                                </Button>
                                                <Button
                                                    disabled={!selectedFiles}
                                                    onClick={handleSubmitBanner}
                                                    color="primary"
                                                    variant="contained"
                                                    type="submit">
                                                    Lưu
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </div>{" "}
                                </div>
                                <div className="flex justify-center">
                                    {selectedFiles?.length && (
                                        <img
                                            alt="ảnh"
                                            className="xl:max-w-xl sm:xl:max-w-sm xs:max-w-xs"
                                            src={URL.createObjectURL(selectedFiles[0])}
                                        />
                                    )}
                                    {!selectedFiles && valueBanner?.image && (
                                        <img
                                            alt="ảnh"
                                            className="xl:max-w-xl sm:xl:max-w-sm xs:max-w-xs"
                                            src={valueBanner?.image}
                                        />
                                    )}
                                </div>
                            </Container>
                            <ToastContainer />
                        </Box>
                    }
                </DashboardLayout>
            </ThemeProvider>
        </>
    );
}

export default Banner;
