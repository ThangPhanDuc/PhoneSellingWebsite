import axiosListProduct from "../api/listProduct";
import { useState, useEffect } from "react"
import Order from "../components/order";

function ListOrder() {
    const [listOrder,setlistOrder] = useState([]);
    useEffect(() => {
        getlistOrder();
    }, []);

    const getlistOrder = async () => {
        const resp = await axiosListProduct.get("order");
        setlistOrder(resp.data);
        console.log(listOrder);
    }

    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Danh sách tất cả đơn hàng</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <a href="index.html">Admin Menu</a>
                        </li>
                        <li className="breadcrumb-item active">listOrder</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1" />
                            Danh sách đơn hàng
                            <input

                                type="text"
                                placeholder="Search for"
                                className="mb-6 input-search"
                            />

                            <select name="" id="" className="status-order">
                                <option value="Chưa xác nhậnt">Tất cả</option>
                                <option value="Chưa xác nhậnt">Chưa xác nhận</option>
                                <option value="Giá Đã xác nhận">Đã xác nhận</option>
                                <option value="Đang giao hàng">Đang giao hàng</option>
                                <option value="Đã giao hàng">Đã giao hàng</option>
                                <option value="Chưa xác nhậnt">Đã hủy</option>
                            </select>
                        </div>
                        <div className="card-body">
                            <table id="datatablesSimple" className="order-table ">
                                <thead>
                                    <tr className="text-center justify-content-between s">
                                        <th>Stt</th>
                                        <th>Tên khách hàng</th>
                                        <tr className="d-flex justify-content-around pt-4">
                                            <th>Ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Giá</th>
                                        </tr>
                                        <th>Vouvher</th>
                                        <th>Tổng đơn hàng</th>
                                        <th>Trạng thái đơn hàng</th>
                                        <th>Cập nhập trạng thái</th>
                                    </tr>
                                </thead>
                                {/* <tfoot>
                                    <tr className="text-center justify-content-between s">
                                        <th>Stt</th>
                                        <th>Tên khách hàng</th>
                                        <tr className="d-flex justify-content-around">
                                            <th>Ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Giá</th>
                                        </tr>
                                        <th>Vouvher</th>
                                        <th>Tổng đơn hàng</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </tfoot> */}
                                <tbody>
                                    {
                                        listOrder.map((item,index) =><Order order={item} index={index} 
                                        getlistOrder={getlistOrder}/>)
                                    }
                                   

                                    
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright © Your Website 2022</div>
                        <div>
                            <a href="#">Privacy Policy</a>·
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ListOrder;

