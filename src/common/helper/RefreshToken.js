import http_config from "../config/httpconfig/http_config"
import axiosInstance from "./axiosInterceptor"

const RefreshToken=()=>{
    const refreshtoken=localStorage.getItem("refreshToken")
    axiosInstance(http_config.BASE_URL+"/auth/refreshtoken",{refreshtoken:refreshtoken} )
}

export default RefreshToken