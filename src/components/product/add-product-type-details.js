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
import { CreateProductType } from "../Services/ProductType/ProductTypeService";
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

export const AddProductTypeDetails = (props) => {

  const formik = useFormik({
    initialValues: {
      type: '',

    },
    onSubmit: async(values) => {
      const res = await CreateProductType(values)
      if(res.status===200){
        toast.success('Tạo sản phẩm thành công!')
      }else{
        toast.error('Có lỗi xảy ra!')
      }
    },
    validationSchema: Yup.object({
      type: Yup.string().max(255).required("Tên sản phẩm là bắt buộc"),
    }),
  });
  return (
 <>
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
    <ToastContainer/>
 </>
  );
};
