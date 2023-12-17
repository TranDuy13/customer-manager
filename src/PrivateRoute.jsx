import { Outlet, Navigate } from "react-router";
import { LoginStatus } from "./hook/checkLg";

const PrivateRoute = () => {
    const { login1, checking } = LoginStatus();
    if (checking) {
        return (
            <>
                <div></div>
            </>
        );
    }
    return login1 && <Outlet />;
};
export default PrivateRoute;
