import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";

import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";

import { Users as UsersIcon } from "../icons/users";

import { Logo } from "./logo";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/admin/products",
    icon: <UsersIcon fontSize="small" />,
    title: "Sản phẩm ",
  },
  {
    href: "/admin/producttype",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Loại sản phẩm",
  },
  {
    href: "/admin/account",
    icon: <UserIcon fontSize="small" />,
    title: "Tài khoản",
  },
];

export const DashboardSidebar = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });
  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
              <div
                style={{
                  paddingLeft: "20px",
                  fontWeight: 700,
                  color: "gray",
                  fontSize: "30px",
                }}
              >
                ADMIN
              </div>
            </Link>
          </Box>
          <Box sx={{ px: 2 }}></Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              to={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        ></Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      // onClose={onClose}
      // open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
