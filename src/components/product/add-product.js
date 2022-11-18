import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function AddProduct() {
  return (
    <Card >
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CameraAltIcon
            src
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
           
          </Typography>
          <Typography color="textSecondary" variant="body2">
           
          </Typography>
          <Typography color="textSecondary" variant="body2">
           
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Chèn ảnh sản phẩm
        </Button>
      </CardActions>
    </Card>
  );
}
export default AddProduct;
