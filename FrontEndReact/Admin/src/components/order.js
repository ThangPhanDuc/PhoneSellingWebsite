import axiosListProduct from "../api/listProduct";

function Order(props) {
    let { order, index,getlistOrder } = props;

    const handleUpdateStatus =async(e)=>{
        let statusName = e.target.value;
        await axiosListProduct.put(`order/updateStatus/${order.id}/${statusName}`);
        getlistOrder();
        // alert("đã cập nhập đơn hàng thành công")
    }

    return (
        <tr className="justify-content-around ">
            <td>{index + 1}</td>
            <td>{order.user.userName}</td>
            {
                order.orderProducts.map((item) =>
                    <tr className="justify-content-around ">
                        <td className="w-25">
                            <img src={item.product.img} className="w-25 h-25 m-3" />
                        </td>
                        <td>{item.product.name}</td>

                        <td className="w-25 ps-5">{item.quantity}</td>
                        <td>{item.product.price}</td>
                    </tr>)
            }


            <td>{order.voucher.name}</td>
            <td>sum</td>
            <td>{order.status}</td>
            <td className="text-center">
                <select
                    onChange={handleUpdateStatus}
                    name="" id="" className="w-25" >
                    <option value="Chưa xác nhận">Chưa xác nhận</option>
                    <option value="Đã xác nhận">Đã xác nhận</option>
                    <option value="Đang giao hàng">Đang giao hàng</option>
                    <option value="Đã giao hàng">Đã giao hàng</option>
                    <option value="Đã hủy">Đã hủy</option>
                </select>
            </td>
        </tr>
    )
}

export default Order;