import "./login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../components/features/auth/authSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { LoginAdmin } from "../components/Services/AuthService/sysService";
import { currentWeb } from "../components/Services";

function Login() {
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = "Login - Welcome back!";
    });
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = formData;
    const { user, token } = useSelector((state) => state.auth);
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await LoginAdmin(username, password);
        if (res.status===200) {
            dispatch(login(res?.data?.data));
            localStorage.setItem("_tok3n", res.data?.data?.token);
        }
    };
    useEffect(() => {
        if (user || token) {
            window.location.replace(currentWeb);
        }
    }, [token, user]);
    if (!token) {
        return (
            <>
                <div className="background">
                    <div className="form-panel">
                        <div className="headings">
                            <CoffeeOutlinedIcon className="coffee-icon" />
                            <h1>Admin</h1>
                        </div>

                        <div className="welcome">Hi, Welcome Back</div>
                        <span className="welcome2">Enter your credentials to continue</span>
                        <h6 className="subtitle"></h6>
                        <div>
                            <form className="form-lg" onSubmit={onSubmit}>
                                <div className="username-lg">
                                    <label htmlFor="name" className="username-placehoder"></label>
                                    <div className="usernamelg-input">
                                        <PersonOutlineOutlinedIcon className="icon-user" />
                                        <input
                                            type="username"
                                            className="username-ip"
                                            id="username"
                                            name="username"
                                            value={username}
                                            placeholder="Username"
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div className="usernamelg-input">
                                        <LockClockOutlinedIcon className="icon-user" />
                                        <input
                                            type="password"
                                            className="username-ip"
                                            id="password"
                                            name="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div className="submit-btn">
                                        <button className="btn-lg">Đăng nhập</button>
                                    </div>
                                </div>
                            </form>
                            <div className="hr-line">
                                <hr />
                            </div>
                            <div className="slogan">
                                <Link style={{ textDecoration: "none" }} to="/">
                                    Trang chủ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </>
        );
    }
}

export default Login;
