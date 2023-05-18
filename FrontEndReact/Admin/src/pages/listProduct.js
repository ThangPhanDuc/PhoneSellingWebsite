import axiosListProduct from "../api/listProduct";
import { useState, useEffect } from "react"
import Product from "../components/product";
import { Navigate, useNavigate } from "react-router-dom"

import { connect } from "react-redux";
import { addProduct } from "../actions";

function ListProduct(props) {
    const { addProduct } = props;

    const [listProduct, setListProduct] = useState([]);
    const [listSearch, setListSearch] = useState([]);
    const nagative = useNavigate();

    useEffect(() => {
        getAllProduct();
    }, []);

    const getAllProduct = async () => {
        const resp = await axiosListProduct.get("product");
        setListProduct(resp.data);
        console.log(resp.data);
    }
    

    const addProduct1 = (action) => {
        addProduct(action)
        nagative("/form")
    }

    const deleteProduct = async (id) => {
        await axiosListProduct.delete(`product/${id}`);
        getAllProduct();
    }

    const handleSearch = (e) => {
        let search = e.target.value;
        if(search===""){
            console.log("adg");
            
            console.log(listSearch);
        }else{
            setListSearch([]);
            let search1=[]; 
            listProduct.filter((product)=>{
                if (product.name.toLowerCase().includes(search.toLowerCase())) {
                    search1.push(product);
                }            
            })
            setListSearch(search1)
        }
    }

    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Danh sách tất cả sản phẩm</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <a href="index.html">Admin Menu</a>
                        </li>
                        <li className="breadcrumb-item active">listProduct</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1" />
                            Danh sách sản phẩm {listProduct.length}
                            <input
                                onChange={handleSearch}
                                type="text"
                                placeholder="Search for"
                                className="mb-6 input-search"
                            />
                            <button className="btn btn-primary btn-add " onClick={() => addProduct1("Thêm")}>Thêm sản phẩm</button>
                        </div>
                        <div className="card-body">
                            <table id="datatablesSimple">
                                <thead>
                                    <tr className="text-center">
                                        <th>Stt</th>
                                        <th>Ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Giá cũ</th>
                                        <th>Xem</th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Giá cũ</th>
                                        <th>Chip</th>
                                        <th>Màn hình</th>
                                        <th>Ram</th>
                                        <th>Bộ nhớ</th>
                                        <th>Xem</th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        listProduct.map((item, index) => <Product key={item.id} product={item} index={index} deleteProduct={deleteProduct} />)
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

const mapDispatchToProps = { addProduct }
export default connect(null, mapDispatchToProps)(ListProduct);
