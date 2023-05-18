import { useState } from "react";


function OrderItem(props) {
    let { orderItem } = props;
    


    return (
        <li className="client-list-item">
            <div className="order-product">
                <div className="order-head">
                    <p className="order-head-txt">Đơn hàng #{orderItem.id}</p>
                    <p className="order-head-status">{orderItem.status}</p>
                </div>
                <div className="order-content">
                    <div className="list-product">
                        {
                            orderItem.orderProducts.map(item => {
                                return (
                                    <div className="list-product-item">
                                        <div className="list-product-body">
                                            <div className="list-product-picture">
                                                <a>
                                                    <img src={item.product.img}></img>
                                                </a>
                                            </div>
                                            <div className="list-product-info">
                                                <h3 className="list-product-name">
                                                    <a>{item.product.name}</a>
                                                </h3>
                                                <div className="list-product-group">
                                                    <div className="list-product-prices">
                                                        <p className="price-sale">{item.product.price}</p>
                                                        <p className="price-old">{item.product.oldPrice}</p>
                                                    </div>
                                                    <div className="list-product-quantity">
                                                        <p className="label-name">Số lượng: {item.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )


                            })
                        }




                    </div>
                    <div className="order-sum flex flex-between">
                        <div className="order-sum-link">
                            <a>Xem chi tiết đơn hàng</a>
                        </div>
                        <div className="order-sum-price">
                            <p className="lable-price-name">Tổng tiền</p>
                            <p className="lable-price-sum">12345678</p>
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
}

export default OrderItem;