import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./features/auth/authSlice";

export const MenuList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const { anchorEl, open, ...other } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      {...other}
    >
      <Link style={{ textDecoration: "none", color: "#333333" }} to="/">
        <MenuItem
          sx={{
            pl: "30px",
            pr: "150px",
            pb: "20px",
            pt: "20px",
          }}
        >
          <HomeRoundedIcon fontSize="large" sx={{ pr: "10px" }} /> Trang chủ
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "#333333" }} to="/account">
        <MenuItem
          sx={{
            pl: "30px",
            pr: "150px",
            pb: "20px",
            pt: "20px",
          }}
        >
          <AccountCircleOutlinedIcon fontSize="large" sx={{ pr: "10px" }} /> Tài khoản
    
        </MenuItem>
      </Link>

      <Divider />
      <Link style={{ textDecoration: "none", color: "#333333" }} to="/products">
        <MenuItem
          sx={{
            pl: "30px",
            pr: "150px",
            pb: "20px",
            pt: "20px",
          }}
        >
          <ListItemIcon>
            <PostAddIcon fontSize="small" />
          </ListItemIcon>
          Thêm sản phẩm
        </MenuItem>
      </Link>
      <Button
        onClick={handleLogout}
        style={{ textDecoration: "none", color: "#333333" }}
      >
        <MenuItem
          sx={{
            pl: "30px",
            pr: "150px",
            pb: "20px",
            pt: "20px",
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Button>
    </Menu>
  );
};
