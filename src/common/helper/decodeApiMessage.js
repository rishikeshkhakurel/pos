import { useDispatch } from "react-redux";
import userSlice from "../../redux/slice/User.Slice";

const useDecodeApiMessage = () => {
  const dispatch = useDispatch();
  const decoder = (payload) => {
    if (!payload.requestAccess) {
      localStorage.clear();
      dispatch(userSlice.actions.setData({ login: false }));
    }
    if (payload.errors) return payload.errors.join();
    if (payload.message) return payload.message;
  };

  return decoder;
};

export default useDecodeApiMessage;
