import { useState, useEffect } from "react"
import axiosListProduct from "../api/listProduct";

import User from "../components/user";
import user from "../components/user";

function ListUser() {
    const [listUser,setListUser] = useState([]);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        const resp = await axiosListProduct.get("user");
        setListUser(resp.data);
        console.log(resp.data);
    }
    

    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Danh sách User</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <a href="index.html">Admin Menu</a>
                        </li>
                        <li className="breadcrumb-item active">listUser</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1" />
                            Danh sách User 6
                            <input

                                type="text"
                                placeholder="Search for"
                                className="mb-6 input-search"
                            />
                            <button className="btn btn-primary btn-add " >Thêm người dùng</button>
                        </div>
                        <div className="card-body">
                            <table id="datatablesSimple">
                                <thead>
                                    <tr className="text-center">
                                        <th>Stt</th>
                                        <th>Ảnh</th>
                                        <th>Tên người dùng</th>
                                        <th>Tài khoản</th>
                                        <th>Mật khẩu</th>
                                        <th>Xem</th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr className="text-center">
                                        <th>Stt</th>
                                        <th>Ảnh</th>
                                        <th>Tên người dùng</th>
                                        <th>Tài khoản</th>
                                        <th>Mật khẩu</th>
                                        <th>Xem</th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        listUser.map((user, index) => <User user={user} key={user.id} index={index} />)
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

export default ListUser;

