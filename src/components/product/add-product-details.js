import * as Yup from "yup";
import { useFormik } from "formik";
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { CardActions, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { getAllProductType } from "../Services/ProductType/ProductTypeService";
import { CreateProduct } from "../Services/Product/Product";
import { ToastContainer, toast } from "react-toastify";

const states = [
    {
        value: "Ho Chi Minh city, Viet Nam",
        label: "Ho Chi Minh ",
    },
    {
        value: "Da Nang city, Viet Nam",
        label: "Da Nang",
    },
    {
        value: "Ha Noi capital, Viet Nam",
        label: "Ha Noi",
    },
];

export const AddProductDetails = (props) => {
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
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (e) => {
        const files = e.target.files;
        Promise.all(
            Array.from(files).map((file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        resolve(event.target.result);
                    };
                    reader.readAsDataURL(file);
                });
            })
        ).then((base64Array) => {
            setSelectedFiles([...selectedFiles, ...base64Array]);
        });
    };
    const formik = useFormik({
        initialValues: {
            name_product: "",
            types: "",
            from: "",
            code: "",
            detail: "",
            model: "",
            brand: "",
        },
        onSubmit: async (values) => {
            
            const formData = {
                ...values,
                images: selectedFiles.length > 0 ? selectedFiles : undefined,
            };
            const res = await CreateProduct(formData);
            if (res.status === 200) {
                toast.success("Tạo sản phẩm thành công!");
            } else {
                toast.error("Tạo sản phẩm không thành công!");
            }
        },
        validationSchema: Yup.object({
            name_product: Yup.string().max(255).required("Tên sản phẩm là bắt buộc"),
            from: Yup.string().required("Loại của sản phẩm là bắt buộc"),
            types: Yup.string().max(255).required("Mô tả chi tiết sản phẩm là bắt buộc."),
            code: Yup.string().max(255).required("Mã sản phẩm là bắt buộc."),
            detail: Yup.string().max(2000).required("Mô tả chi tiết sản phẩm là bắt buộc."),
            model: Yup.string().max(255).required("Model sản phẩm là bắt buộc."),
            brand: Yup.string().max(255).required("Mô tả chi tiết sản phẩm là bắt buộc."),
        }),
    });
    return (
        <>
            <div className="flex">
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
                                <Typography color="textPrimary" gutterBottom variant="h5"></Typography>
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
                                Chèn ảnh sản phẩm
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </CardActions>
                    </Card>
                    <form onSubmit={formik.handleSubmit}>
                        <Card>
                            <CardHeader subheader="Thêm thông tin sản phẩm" title="Sản phẩm" />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            error={Boolean(formik.touched.name_product && formik.errors.name_product)}
                                            helperText={formik.touched.name_product && formik.errors.name_product}
                                            label="Tên sản phẩm"
                                            name="name_product"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            variant="outlined"
                                            required
                                            // defaultValue={user.data.admin.name}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            error={Boolean(formik.touched.from && formik.errors.from)}
                                            helperText={formik.touched.from && formik.errors.from}
                                            label="Xuất xứ"
                                            name="from"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            variant="outlined"
                                            required
                                            // defaultValue={user.data.admin.name}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            error={Boolean(formik.touched.brand && formik.errors.brand)}
                                            helperText={formik.touched.brand && formik.errors.brand}
                                            label="Thương hiệu"
                                            name="brand"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            error={Boolean(formik.touched.model && formik.errors.model)}
                                            helperText={formik.touched.model && formik.errors.model}
                                            label="Model"
                                            name="model"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            variant="outlined"
                                            required
                                            // defaultValue={user.data.admin.name}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            error={Boolean(formik.touched.code && formik.errors.code)}
                                            helperText={formik.touched.code && formik.errors.code}
                                            label="Mã sản phẩm"
                                            name="code"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>

                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Loại sản phẩm"
                                            name="types"
                                            onChange={formik.handleChange}
                                            required
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined">
                                            {ProductType?.map((option) => (
                                                <option
                                                    key={option._id}
                                                    onChange={formik.handleChange}
                                                    value={option._id}>
                                                    {option.name}
                                                </option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            error={Boolean(formik.touched.detail && formik.errors.detail)}
                                            helperText={formik.touched.detail && formik.errors.detail}
                                            label="Mô tả chi tiết sản phẩm"
                                            name="detail"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            variant="outlined"
                                            required
                                            // defaultValue={user.data.admin.name}
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
                                    Lưu sản phẩm
                                </Button>
                            </Box>
                        </Card>
                    </form>
                </div>
                <div className="grid w-[30%] grid-cols-2 gap-4">
                    {selectedFiles?.map((x, i) => (
                        <img key={i} alt="" src={x} />
                    ))}
                </div>
            </div>
            <ToastContainer/>
        </>
    );
};
