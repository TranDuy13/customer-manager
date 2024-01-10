import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import Modal from '@material-ui/core/Modal';
import { deleteRangeProduct } from "../Services/Product/Product";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@material-ui/core";
import { AddProductDetails } from "../product/add-product-details";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 100 + rand();
  const left = 100 + rand();

  return {
    top: `${10}%`,
    left: `${30}%`,
  };
}
export const CustomerListResults = ({ customers, callback, ...rest }) => {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [modalStyle] = useState(getModalStyle);
    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = customers?.map((customer) => customer._id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };
    const handleDelete = async () => {
        const res = await deleteRangeProduct({ ids: selectedCustomerIds });
        if (res.status === 200) {
            toast.success("Xóa thành công!");
            callback();
            setSelectedCustomerIds([]);
        } else {
            toast.error("Có lỗi xảy ra vui lòng thử lại");
        }
    };
    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <div className="flex gap-3 mb-2">
                        <Button
                            onClick={handleDelete}
                            disabled={selectedCustomerIds.length === 0 || !selectedCustomerIds}
                            color="error"
                            variant="contained">
                            Xóa
                        </Button>
                        <Button
                            onClick={() => {
                                setOpen(!open);
                            }}
                            disabled={selectedCustomerIds.length !== 1}
                            variant="contained">
                            Sửa
                        </Button>
                    </div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedCustomerIds.length === customers?.length}
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0 &&
                                            selectedCustomerIds.length < customers?.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>Tên sản phẩm</TableCell>
                                <TableCell>Thương hiệu</TableCell>
                                <TableCell>Loại</TableCell>
                                <TableCell>Model</TableCell>
                                <TableCell>Thời gian tạo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers?.slice(0, limit)?.map((customer) => (
                                <TableRow
                                    hover
                                    key={customer._id}
                                    selected={selectedCustomerIds.indexOf(customer._id) !== -1}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIds.indexOf(customer._id) !== -1}
                                            onChange={(event) => handleSelectOne(event, customer._id)}
                                            value="true"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: "center",
                                                display: "flex",
                                            }}>
                                            <Avatar src={customer.images[0]} sx={{ mr: 2 }}></Avatar>
                                            <Typography color="textPrimary" variant="body1">
                                                {customer.name_product}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{customer.brand}</TableCell>
                                    <TableCell>{customer.types?.name}</TableCell>
                                    <TableCell>{customer.model}</TableCell>
                                    <TableCell>{format(new Date(customer.createdAt), "dd/MM/yyyy")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                
                <Modal
                    open={open}
                    className="flex justify-center items-center"
                    onClose={() => setOpen(!open)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    <Box  sx={{ width: 800, height: 900 }} className={classes.paper}>
                      <AddProductDetails/>
                    </Box>
                </Modal>
                <ToastContainer />
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={customers?.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

CustomerListResults.propTypes = {
    customers: PropTypes.array.isRequired,
};
