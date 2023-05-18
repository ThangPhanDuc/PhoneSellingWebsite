import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axiosListProduct from "../api/listProduct";

import { login } from "../actions";

function Login(props) {
    let { handleSetLoginVisible,login } = props;

    let [userName, setUserName] = useState();
    let [password, setPassword] = useState();

    let [user, setUSer] = useState();

    const handleSubmit = async () => {
        const resp = await axiosListProduct.get("user/login", 
        {
            params:{
                userName:userName,
                password:password,
            }
        }
        );
        setUSer(resp.data);
        login(resp.data);
    }




    return (
        <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
                <button onClick={() => handleSetLoginVisible(false)} className="btnCloseLogin">X</button>
                <h3 className="text-center font-weight-light my-4">Login</h3>

            </div>
            <div className="card-body">
                <form>
                    <div className="form-floating mb-3">
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="inputEmail">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            id="inputRememberPassword"
                            type="checkbox"
                            defaultValue=""
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inputRememberPassword"
                        >
                            Remember Password
                        </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small" href="password.html">
                            Forgot Password?
                        </a>
                        <Link
                            onClick={() => handleSubmit()}
                            className="btn btn-primary" href="index.html">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
            <div className="card-footer text-center py-3">
                <div className="small">
                    <a href="register.html">Need an account? Sign up!</a>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps ={login}
export default connect(null,mapDispatchToProps)(Login);