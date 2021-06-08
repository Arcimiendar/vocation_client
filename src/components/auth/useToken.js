import {useSelector, useDispatch} from "react-redux";

export default function useToken() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    let session_token = sessionStorage.getItem("token");
    if (session_token === 'null') {
        session_token = null;
    }
    if (token !== session_token) {
        saveToken(sessionStorage.getItem("token"));
    }

    function saveToken(token) {
        dispatch({type: 'SET_TOKEN', token: token});
        sessionStorage.setItem("token", token);
    }
    return [token, saveToken];
};