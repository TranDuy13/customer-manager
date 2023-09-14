import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, ...rest }) => (
    <>
        <Link to="/product">
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "240px",
                    height: "100%",
                }}>
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pb: 2,
                        }}>
                        <img
                            src=" https://bizweb.dktcdn.net/thumb/large/100/199/851/products/krp4-23cvmhj-kayaba-hydraulic-pump-bst-3.jpg"
                            alt=""
                        />
                    </Box>
                    <Typography align="center" color="textPrimary" gutterBottom variant="h5">
                        <span className="text-lg font-semibold hover:text-sky-700">Máy bơm thủy lực 1SGH124LK</span>
                    </Typography>
                    <Typography align="center" color="textPrimary" variant="body1">
                        {product.description}
                    </Typography>
                </CardContent>
                <Box sx={{ flexGrow: 1 }} />
                <Divider />

                <Box
                    sx={{
                        backgroundColor: "5048E5",
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <button className="bg-[#2d46b4] text-white p-[10px]"> Xem sản phẩm</button>
                </Box>
            </Card>
        </Link>
    </>
);

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};
