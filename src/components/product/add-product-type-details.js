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

export const AddProductTypeDetails = (props) => {

  const formik = useFormik({
    initialValues: {
      type: '',

    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      type: Yup.string().max(255).required("Tên sản phẩm là bắt buộc"),
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
        <CardHeader  title="Loại sản phẩm" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.type && formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
                label="Loại"
                name="type"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                required
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
            Lưu
          </Button>
        </Box>
      </Card>
    </form>
  );
};
