import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useProduct from "../hooks/useProduct";

function AddProduct() {
  const {
    handleProductAdd,
    handleProductEdit,
    handleOnChange,
    formvalue,
    setformvalue,
  } = useProduct();

  // const editdata = useSelector((state) => state.editSlice.data);
  // useEffect(() => {
  //   if (editdata.id === "product") {
  //     console.log(editdata);
  //     setformvalue(editdata.data);
  //   }
  // }, [editdata, setformvalue]);
  return (
    <Paper sx={{ mt: 2, mb: 2 }}>
      {/* <form onSubmit={!editdata.id==='product'? handleProductAdd : handleProductEdit}> */}
        <Paper
          container="div"
          sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
        >
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Product Name"
            name="ProductName"
            required
            value={formvalue.ProdutName}
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
          />
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Category"
            name="Category"
            value={formvalue.Category}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Brand"
            name="Brand"
            value={formvalue.Brand}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
          <FormControlLabel
            sx={{ ml: 1, flex: 1 }}
            control={
              <Checkbox
                defaultChecked
                onChange={(e) => {
                  console.log("clicked")
                }}
              />
            }
            label="Status"
          />
        </Paper>
        
        <Paper container="div" sx={{ mt: 2, ml: 1 }}>
          <Button type="submit" variant="contained">
            {/* {editdata.id === "product" ? "Update" : "Submit"} */}
            Submit
          </Button>
        </Paper>
      {/* </form> */}
    </Paper>
  );
}

export default AddProduct;
