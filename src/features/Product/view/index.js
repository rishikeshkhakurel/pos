import { Box, FormControl, IconButton, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Table from "../../table/view/index";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import AddProduct from "./addProduct";

const headCells = [
  {
    numeric: false,
    disablePadding: true,
    id:"product_name",
    label: "Product Name",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Brand",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Edit",
  },
];

const num = [2, 3, 4]; // to identify number of object in rows .... if there is 3 object pass [1,2] if there is 5 object then pass [1,2,3,4] since a object must have padding none and fixed object

const Product = () => {
  const productdata = useSelector((state) => state.productSlice.data);
  const [rows, setRows] = useState(productdata);

  const requestSearch = async (searchedVal) => {
    const filteredRows = await productdata.filter((row) => {
      return ((row.product_name.toLowerCase().includes(searchedVal.toLowerCase()))  );
    });
    setRows(filteredRows);
  };


  useEffect(()=>{
    setRows(productdata)
    console.log(productdata)
  },[productdata])

  const MemoTable = useMemo(
    () => (
      <Table
        id="product"
        title="Product Details"
        rows={rows}
        headCells={headCells}
        num={num}
        deleteurl='/api/deleteProduct'
      />
    ),
    [rows]
  );
  return (
    <Box>
      <AddProduct />
      <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
        <TextField
          sx={{ ml: 1, flex: 1 }}
          id="filled-search"
          label="Search"
          type="search"
          onChange={(e) => requestSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </FormControl>
      <Box>{MemoTable}</Box>
    </Box>
  );
};

export default Product;
