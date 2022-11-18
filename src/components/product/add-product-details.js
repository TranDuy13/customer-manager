import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

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

  const formik = useFormik({
    initialValues: {
      name_product: '',
      type: '',
      from: '',
      code: '',
      detail: '',
      model: '',
      brand:''
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      name_product: Yup.string().max(255).required("Tên sản phẩm là bắt buộc"),
      from: Yup.number().required("Loại của sản phẩm là bắt buộc"),
      code: Yup.string().max(255).required("Mã sản phẩm là bắt buộc."),
      detail: Yup.string().max(2000).required("Mô tả chi tiết sản phẩm là bắt buộc."),
      model: Yup.string().max(255).required("Model sản phẩm là bắt buộc."),
      brand: Yup.string().max(255).required("Mô tả chi tiết sản phẩm là bắt buộc."),

    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} >
      <Card>
        <CardHeader subheader="Sửa thông tin sản phẩm" title="Sản phẩm" />
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
                name="type"
                onChange={formik.handleChange}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
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
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Lưu sản phẩm
          </Button>
        </Box>
      </Card>
    </form>
  );
};
