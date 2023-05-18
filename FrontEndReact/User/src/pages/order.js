import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axiosListProduct from "../api/listProduct";
import { useEffect, useState } from "react";
import OrderItem from "../components/orderItem";

function Order(props) {
    let { user } = props;
    const [listOrder, setListOrder] = useState([]);

    useEffect(() => {
        const getListOrder = async () => {
            const resp = await axiosListProduct.get(`order/findByUser/${user.id}`);
            setListOrder(resp.data);
            console.log(listOrder);
        }

        getListOrder();
    }, [user]);



    return (
        <section>
            <div className="event-container row">
                <Link to={"/"}>Trang chủ </Link>
                <p> / Đơn hàng của tôi</p>
            </div>
            <div className="row">
                <div className="filter col-4 ">
                    <div className="user-info d-flex" >
                        <div className="avatar-login">
                            <img src="../images/img-user/img-user.png" alt="" />
                        </div>
                        <div className="client-login-infor">
                            <p className="client-login-name">{user.fullName}</p>
                            <p className="client-login-phone">{user.phone}</p>
                            <button className="client-login-edit btn">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="client-tabs">
                        <ul className="flex flex-wrap flex-column flex-align-baseline js-tab-cotrols">
                            <li className="tabs-item">
                                <Link className="tab-cotrols">
                                    {/* <i></i> */}
                                    <p>Lịch sử tích điểm</p>
                                </Link>
                            </li>
                            <li className="tabs-item">
                                <Link className="tab-cotrols">
                                    {/* <i></i> */}
                                    <p>Đơn hàng của tôi</p>
                                </Link>
                            </li>
                            <li className="tabs-item">
                                <Link className="tab-cotrols">
                                    {/* <i></i> */}
                                    <p>Thông báo của tôi</p>
                                </Link>
                            </li>
                            <li className="tabs-item">
                                <Link className="tab-cotrols">
                                    {/* <i></i> */}
                                    <p>Số địa chỉ nhậm hàng</p>
                                </Link>
                            </li>
                            <li className="tabs-item">
                                <Link className="tab-cotrols">
                                    {/* <i></i> */}
                                    <p>Đánh giá sản phẩm</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" col-8 list-box laptop shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="headbox  py-2 text-gray">
                        <h2 >Đơn hàng của tôi</h2>
                    </div>
                    <div className="order">
                        <div className="tab-filter d-flex py-2">
                            <div>
                                <a>Tất cả</a>
                            </div>
                            <div>
                                <a>Đặt hàng thành công</a>
                            </div>
                            <div>
                                <a>Đang giao hàng</a>
                            </div>
                            <div>
                                <a>Đơn hoàn tất</a>
                            </div>
                        </div>
                        <div className="block-search py-2">
                            <i></i>
                            <input type="text" className="forn-search-input" placeholder="Tìm kiếm theo sản phẩm, mã đơn hàng"></input>
                        </div>
                        <div className="client-content">
                            <ul className="client-list">
                                {
                                    listOrder.map(orderItem=><OrderItem orderItem={orderItem} />)
                                }
                                



                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Order);