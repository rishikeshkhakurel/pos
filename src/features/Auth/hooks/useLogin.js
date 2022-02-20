import { useState } from "react"
import { useDispatch } from "react-redux";
import userSlice from "../../../redux/slice/User.Slice"

const useLogin=()=>{
    const dispatch=useDispatch()
    const [loginValue, setLoginValue]=useState();
    const [error, seterror]=useState();

    const handleOnChange = (e) => {
        //update the value and stores in loginValue whenever the user types in input field
        setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
      };

    const onSubmit=(e)=>{
        e.preventDefault();
        if(loginValue.email==="admin" && loginValue.password==="password"){
            console.log("successfull login")
            dispatch(userSlice.actions.setData({ login: true }));
            localStorage.setItem('login',true);
        }else{
            seterror({error:"Please Enter correct email or password"})
        }

    }

    return {handleOnChange, onSubmit, error}
}

export default useLogin