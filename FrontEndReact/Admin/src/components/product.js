import { connect } from "react-redux";
import { viewProduct,changeProduct } from "../actions";
import { Navigate, useNavigate } from "react-router-dom"

function Product(props) {
    let { product, index, viewProduct,changeProduct,deleteProduct } = props;

    const navigate = useNavigate();

    const viewProduct1 = (action, product) => {
        viewProduct(action, product);
        navigate("/form")
    }

    const changeProduct1 = (action, product) => {
        changeProduct(action, product);
        navigate("/form")
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td> 
                <img src={product.img} className="w-50 h-50 m-3" />
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.oldPrice}</td>
           

            <td>
                <button className="btn btn-success" onClick={() => viewProduct1("Xem", product)}>Xem</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => changeProduct1("Sửa", product)}>Sửa</button>
            </td>
            <td>
                <button className="btn btn-warning" onClick={()=>deleteProduct(product.id)}>Xóa</button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = { viewProduct,changeProduct }
export default connect(null, mapDispatchToProps)(Product);