import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verify } from "../components/Services/AuthService/sysService";
import { login, reset } from "../components/features/auth/authSlice";
import { currentWeb } from "../components/Services";
import { useLocation } from "react-router-dom";
export const LoginStatus = () => {
    const [login1, setLogin] = useState(false);
    const location = useLocation()
    const [checking, setChecking] = useState(true);
    const getAuth = useCallback(async () => {
        setChecking(true);
        
        const res = await Verify();
        if (res.status === 200) {
            setLogin(true);
        } else {
            setLogin(false)
            localStorage.removeItem("_tok3n");
            window.location.replace(currentWeb);
        }
        setChecking(false);
    }, [location.pathname]);
    useEffect(() => {
        getAuth();
    }, [getAuth]);
    return { login1, checking };
};
