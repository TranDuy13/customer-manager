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


function Login() {
  useEffect(() => {
    document.title = "Login - Welcome back!";
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user || isSuccess) {
      navigate("/admin");
    }
    dispatch(reset());
  }, [isError, message, isSuccess, navigate, dispatch,user]);
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
              <Link style={{textDecoration:'none'}} to='/'>Trang chủ</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
