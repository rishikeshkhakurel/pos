import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import productSlice from "../../../redux/slice/Product.Slice"

const useProduct = () => {
  const dispatch = useDispatch();
  const [formvalue, setformvalue] = useState("");

  // useEffect(() => {
  //   axiosInstance
  //     .get(http_config.BASE_URL + "/api/getProduct")
  //     .then((resp) => {
  //       console.log("product",resp)
  //       // dispatch(productSlice.actions.setData(resp.products ));
  //     });
  // }, [dispatch]);

  function createData(SN, product_name, category, brand, status) {
    return {
      SN,
      product_name,
      category,
      brand,
      status,
    };
  }

  const rows = [
    createData(1, "Wrap", "Main Course", "brand", false),
    createData(2, "veg Wrap", "Main Course", "brand", true),
    createData(3, "c. Wrap", "Main Course", "brand", true),
    createData(4, "Wrap", "Main Course", "brand", true),
    createData(5, "Wrap", "Main Course", "brand", true),
    createData(6, "Wrap", "Main Course", "brand", true),
    createData(7, "Wrap", "Main Course", "brand", true),
  ];

  useEffect(() => {
    dispatch(productSlice.actions.setData(rows));
  }, [dispatch]);

  const handleProductAdd = (e) => {
    e.preventDefault();

    console.log(formvalue);

    axiosInstance
      .post(http_config.BASE_URL + "/api/addProduct", formvalue)
      .then((resp) => {
        console.log(resp);
      });
  };

  const handleProductEdit = (e) => {
    e.preventDefault();

    console.log(formvalue);

    axiosInstance
      .post(http_config.BASE_URL + "/api/updateProduct", formvalue)
      .then((resp) => {
        console.log(resp);
      });
  };

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  return {
    handleProductAdd,
    handleProductEdit,
    handleOnChange,
    setformvalue,
    formvalue,
  };
};

export default useProduct;
