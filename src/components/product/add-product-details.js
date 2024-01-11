import * as Yup from "yup";
import { useFormik } from "formik";
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { CardActions, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { getAllProductType } from "../Services/ProductType/ProductTypeService";
import { CreateProduct, updateProductById } from "../Services/Product/Product";
import { ToastContainer, toast } from "react-toastify";
import { createFormData } from "../../utils/create-emotion-cache";

export const AddProductDetails = (props) => {
    const [ProductType, setProductType] = useState();
    console.log(props);
    const loadData = useCallback(async () => {
        const res = await getAllProductType();
        if (res.status === 200) {
            setProductType(res.data.data);
            formik.setValues({ types: res.data.data[0]?._id });
        }
    }, []);
    useEffect(() => {
        loadData();
    }, [loadData]);
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (e) => {
        const _files = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ..._files]);
        // Promise.all(
        //     Array.from(files).map((file) => {
        //         return new Promise((resolve) => {
        //             const reader = new FileReader();
        //             reader.onload = (event) => {
        //                 resolve(event.target.result);
        //             };
        //             reader.readAsDataURL(file);
        //         });
        //     })
        // ).then((base64Array) => {
        //     setSelectedFiles([...selectedFiles, ...base64Array]);
        // });
    };
    const formik = useFormik({
        initialValues: {
            name_product: "",
            types: "",
            from: "",
            code: "",
            description: "",
            model: "",
            brand: "",
        },
        onSubmit: async (values) => {
            debugger;
            const formData = {
                ...values,
                // files: selectedFiles
            };
            if (!props.valueEdit) {
                const data = createFormData(formData);
                if (selectedFiles.length > 0) {
                    selectedFiles?.forEach((file) => {
                        data.append("files", file);
                    });
                }
                const res = await CreateProduct(data);
                if (res.status === 200) {
                    toast.success("Tạo sản phẩm thành công!");
                } else {
                    toast.error("Tạo sản phẩm không thành công!");
                }
            } else {
                const res = await updateProductById(props.valueEdit?.data?._id, values);
                if (res.status === 200) {
                    toast.success("Cập nhật sản phẩm thành công!");
                    props.callback();
                } else {
                    toast.error("Cập nhật sản phẩm không thành công!");
                }
            }
        },
        validationSchema: Yup.object({}),
    });
    useEffect(() => {
        if (props.valueEdit?.data) {
            let clone_data = props.valueEdit?.data;
            formik.setValues({
                brand: clone_data.brand,
                code: clone_data.code,
                description: clone_data.description,
                from: clone_data.from,
                model: clone_data.model,
                name_product: clone_data.name_product,
                types: clone_data.types,
            });
        }
    }, [props]);
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
                                        <div>Tên sản phẩm</div>
                                        <input
                                            required
                                            name="name_product"
                                            onChange={formik.handleChange}
                                            value={formik.values?.name_product}
                                            className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div>Xuất xứ</div>
                                        <input
                                            required
                                            name="from"
                                            onChange={formik.handleChange}
                                            value={formik.values?.from}
                                            className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div>Thương hiệu</div>
                                        <input
                                            required
                                            name="brand"
                                            onChange={formik.handleChange}
                                            value={formik.values?.brand}
                                            className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div>Model</div>
                                        <input
                                            required
                                            name="model"
                                            onChange={formik.handleChange}
                                            value={formik.values?.model}
                                            className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div>Mã sản phẩm</div>
                                        <input
                                            required
                                            name="code"
                                            onChange={formik.handleChange}
                                            value={formik.values?.code}
                                            className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                        />
                                    </Grid>

                                    <Grid item md={6} xs={12}>
                                        <div>Loại sản phẩm</div>
                                        <select
                                            onChange={formik.handleChange}
                                            defaultValue={ProductType && ProductType[0]._id}
                                            className="w-full box-border border-[0.5px] p-2 border-slate-400 rounded-lg min-h-[40px]"
                                            name="types">
                                            {ProductType?.map((option) => (
                                                <option
                                                    key={option._id}
                                                    onChange={formik.handleChange}
                                                    value={option._id}>
                                                    {option.name}
                                                </option>
                                            ))}
                                        </select>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <input
                                            required
                                            name="description"
                                            onChange={formik.handleChange}
                                            value={formik.values?.description}
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
                                    Lưu sản phẩm
                                </Button>
                            </Box>
                        </Card>
                    </form>
                </div>
                <div className="2xl:grid w-[30%] xl:grid-cols-2 gap-4 grid-cols-1">
                    {selectedFiles?.map((x, i) => (
                        <div>
                            <div className="px-2 flex items-center rounded-xl cursor-pointer bg-slate-200 absolute">X</div>
                            <img
                                className="h-fit col-span-1 p-2 min-w-[150px]"
                                key={i}
                                alt=""
                                src={URL.createObjectURL(x)}
                            />
                        </div>
                    ))}
                    {props.valueEdit?.data?.images?.map((x, i) => (
                        <img className="h-fit col-span-1 p-2 min-w-[150px]" key={i} alt="" src={x} />
                    ))}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};
