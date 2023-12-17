import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, ...rest }) => (
    <>
        <Link to={`/product/${product._id}`}>
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
                            className="max-h-[200px]"
                            src={product.images[0]}
                            alt=""
                        />
                    </Box>
                    <Typography align="center" color="textPrimary" gutterBottom variant="h5">
                        <span className="text-lg font-semibold hover:text-sky-700">{product.name_product}{' '}{product.model}</span>
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
