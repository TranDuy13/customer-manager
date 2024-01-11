import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../theme";
import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { createFormData } from "../utils/create-emotion-cache";
import { CreateProduct } from "../components/Services/Product/Product";
import { ToastContainer, toast } from "react-toastify";
import { Createinfo, getAllinfo, updateInfo } from "../components/Services/Infomation/InfomationService";

function Infomation(props) {
    useEffect(() => {
        document.title = "Thông tin trang web";
    });
    const [InfoApp, setInfoApp] = useState();
    const loadData = useCallback(async () => {
        const res = await getAllinfo();
        if (res.status === 200 && res.data?.data) {
            formik.setValues(res.data?.data[0]);
            setInfoApp(res.data?.data[0]);
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);

    const formik = useFormik({
        initialValues: {
            phone: "",
            email: "",
            address: "",
            title: "",
            linkfb: "",
        },
        onSubmit: async (values) => {
            if (!InfoApp) {
                const res = await Createinfo(values);
                if (res.status === 200) {
                    toast.success("Tạo thông tin  thành công!");
                } else {
                    toast.error("Tạo thông tin  không thành công!");
                }
            } else {
                const res = await updateInfo(InfoApp?._id, values);
                if (res.status === 200) {
                    toast.success("Cập nhật thành công!");
                } else {
                    toast.error("Cập nhật không thành công!");
                }
            }
        },
    });
    useEffect(() => {
        if (props.valueEdit?.data) {
            let clone_data = props.valueEdit?.data;
            formik.setValues({
                address: clone_data.address,
                title: clone_data.title,
                phone: clone_data.phone,
                email: clone_data.email,
                lnkfb: clone_data.email,
            });
        }
    }, [props]);
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
                            <Container maxWidth="xl">
                                <Typography sx={{ mb: 3 }} variant="h4">
                                    Thông tin trang web
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
                                                    <Typography
                                                        color="textPrimary"
                                                        gutterBottom
                                                        variant="h5"></Typography>
                                                    <Typography color="textSecondary" variant="body2"></Typography>
                                                    <Typography color="textSecondary" variant="body2"></Typography>
                                                </Box>
                                            </CardContent>
                                            <Divider />
                                        </Card>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Card>
                                                <CardHeader subheader="Thông tin trang web" />
                                                <Divider />
                                                <CardContent>
                                                    <Grid container spacing={3}>
                                                        <Grid item md={6} xs={12}>
                                                            <div>Số điện thoại</div>
                                                            <input
                                                                required
                                                                name="phone"
                                                                onChange={formik.handleChange}
                                                                value={formik.values?.phone}
                                                                className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                                            />
                                                        </Grid>
                                                        <Grid item md={6} xs={12}>
                                                            <div>Địa chỉ</div>
                                                            <input
                                                                required
                                                                name="address"
                                                                onChange={formik.handleChange}
                                                                value={formik.values?.address}
                                                                className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                                            />
                                                        </Grid>

                                                        <Grid item md={6} xs={12}>
                                                            <div>Tiêu đề</div>
                                                            <input
                                                                required
                                                                name="title"
                                                                onChange={formik.handleChange}
                                                                value={formik.values?.title}
                                                                className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                                            />
                                                        </Grid>
                                                        <Grid item md={6} xs={12}>
                                                            <div>Link FB</div>
                                                            <input
                                                                required
                                                                name="linkfb"
                                                                onChange={formik.handleChange}
                                                                value={formik.values?.linkfb}
                                                                className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                                            />
                                                        </Grid>
                                                        <Grid item md={6} xs={12}>
                                                            <div>Email liên lạc</div>
                                                            <input
                                                                required
                                                                name="email"
                                                                onChange={formik.handleChange}
                                                                value={formik.values?.email}
                                                                className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                                <Divider />
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "flex-end",
                                                        p: 2,
                                                    }}>
                                                    <Button color="primary" variant="contained" type="submit">
                                                        Lưu thông tin
                                                    </Button>
                                                </Box>
                                            </Card>
                                        </form>
                                    </div>
                                    <div className=" w-[30%] xl:grid-cols-2 gap-4 grid-cols-1"></div>
                                </div>
                                <ToastContainer />
                            </Container>
                        </Box>
                    }
                </DashboardLayout>
            </ThemeProvider>
        </>
    );
}

export default Infomation;
