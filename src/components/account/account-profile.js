import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
function AccountProfile() {
  const {user}=useSelector((state)=>state.auth)
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
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user.data.admin.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
          
            {user.data.admin.address}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Tải ảnh lên
        </Button>
      </CardActions>
    </Card>
  );
}
export default AccountProfile;
