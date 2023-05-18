import Product from "../components/product";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axiosListProduct from "../api/listProduct";

function SearchProduct(props) {
    let {searchData}=props;
  

    let [productResult,setProductResult] = useState([]);

    useEffect(() => {
        const searchProductByKeyword = async(searchData)=>{
            const resp = await axiosListProduct.get(`product/search/${searchData}`);
            setProductResult(resp.data);
            console.log(resp.data);
        }
        searchProductByKeyword(searchData)
        
      },[searchData]);

   

    

    return (
        <section>
            <div className="event-container row">
                <Link to="/">Trang chủ </Link>
                <p> / Tìm kiếm</p>
            </div>
            <div className="banner">
                <img src="../images/banner-dienThoai.png" alt="" />
            </div>
            <div className="row">
                <div className=" col-12 ">
                    <div className="headbox">
                        <h3>
                            Tìm thấy <span>{productResult.length}</span> kết quả phù hợp với từ khóa{" "}
                            <span>"{searchData}"</span>
                        </h3>
                    </div>
                    <div className="list-box  mb-5 ">
                        <div className="normal d-flex justify-content-between">
                            <div className="list-tab d-flex justify-content-center">
                                <p>Ưu tiên xem:</p>
                                <button className="btn btn-outline-primary">Bán chạy nhất</button>
                                <button className="btn btn-outline-primary">Giá thấp</button>
                                <button className="btn btn-outline-primary">Giá cao</button>
                            </div>
                            <div className="grid-list">
                                <select name="" id="">
                                    <option value="">Bán chạy nhất</option>
                                    <option value="">Giá thấp</option>
                                    <option value="">Giá cao</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-wrapper search d-flex align-content-between flex-wrap ">
                            {
                                productResult.map(item=><Product key={item.id} productItem={item} />)
                            }                         
                        </div>
                        <button className="btn btn-light align-middle">XEM THÊM</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ listProduct: state.listPhone , searchData: state.searchResult });
export default connect(mapStateToProps)(SearchProduct);