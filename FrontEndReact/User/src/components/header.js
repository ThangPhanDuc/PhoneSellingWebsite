import { Link, Outlet, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form"
import { searchProduct } from "../actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./login";


function Header(props) {
    let { cart, searchProduct, user } = props;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const Submitdata = (data) => {
        searchProduct(data);
        navigate("/tim-kiem-san-pham")
    }

    // quan ly an hien cua Login
    const [isLoginVisible, setLoginVisible] = useState(false);
    const handleSetLoginVisible = (toggle) => {
        setLoginVisible(toggle);
    }

    return (
        <>
            <header>
                <div className="header">
                    <div className="hdtop d-flex justify-content-between">
                        <Link to={"/"} className="logo">
                            <p>Home</p>
                        </Link>
                        <div className="search d-flex align-items-center">
                            <form onSubmit={handleSubmit(Submitdata)} action="" >
                                <input
                                    // type="text"
                                    {...register("dataSearch")}
                                    placeholder="  Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                                />
                                <button type="submit" className="align-items-center">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </button>
                            </form>
                        </div>
                        <ul className="hdmn d-flex justify-content-between">
                            <li>
                                <a href="../tinTuc">
                                    <i className="fa-solid fa-newspaper" />
                                    <p>Tin tức</p>
                                </a>
                            </li>
                            <li>
                                <Link onClick={() => setLoginVisible(true)}>
                                    <i className="fa-regular fa-user" />
                                    <p>{user.fullName}</p>
                                </Link>
                                {/* <ul className="subUser ">
                                    <li>
                                        <Link>
                                            <i className="fa-solid fa-list"></i>
                                            <p>Đơn hàng của tôi</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="fa-solid fa-bell"></i>
                                            <p>Thông báo của tôi</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i></i>
                                            <p>Thoát tài khoản</p>
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to={"/gio-hang"}>
                                    <i className="fa-solid fa-cart-shopping" />
                                    <p>Giỏ hàng</p>
                                    <b className="countTotolCart">{cart.length}</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className="d-flex justify-content-between">
                            <li>
                                <Link to={"/dien-thoai"}>
                                    <i className="fa-solid fa-mobile-screen" />
                                    <p>ĐIỆN THOẠI</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/laptop"}>
                                    <i className="fa-solid fa-laptop" />
                                    <p>LAPTOP</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/tablet">
                                    <i className="fa-solid fa-tablet-screen-button"></i>
                                    <p>MÁY TÍNH BẢNG</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/PC">
                                    <i className="fa-solid fa-desktop" />
                                    <p>PC</p>
                                </Link>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-headphones-simple" />
                                    <p>PHỤ KIỆN</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {
                isLoginVisible && <Login handleSetLoginVisible={handleSetLoginVisible} />
            }

        </>

    )
}

const mapStateToProps = state => ({ cart: state.cart, user: state.user });
const mapDispatchToProps = { searchProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Header);