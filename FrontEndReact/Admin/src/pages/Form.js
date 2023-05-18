import React from 'react'
import "../App.css"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import axiosListProduct from "../api/listProduct";
import { Navigate, useNavigate } from "react-router-dom"

import { connect } from "react-redux"

const Form = (props) => {
    const { formData } = props;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submitdata = async (data) => {
        if (formData.action === "Thêm") {
            await axiosListProduct.post("product", data);
            navigate("/")
        } else if (formData.action === "Sửa") {
            await axiosListProduct.put(`product/${data.id}`, data )
            navigate("/")
        }else if (formData.action === "Xem") {
            navigate("/")
        }
    }



    return (
        <div className="form-container" >
            <h1>{formData.action} sản phẩm</h1>
            <form onSubmit={handleSubmit(submitdata)}>
                <label>
                    Id:
                    <input type={"text"} {...register("id",{value:formData.product.id})} ></input>
                </label>
                <label>
                    Tên sản phẩm:
                    <input type={"text"} {...register("name",{value:formData.product.name})} ></input>
                </label>
                <label>
                    Ảnh:
                    <input type={"text"} {...register("img",{value:formData.product.img})} ></input>
                </label>
                <label>
                    Giá bán:
                    <input type={"number"} {...register("price",{value:formData.product.price})} ></input>
                </label>
                <label>
                    Giá cũ:
                    <input type={"number"} {...register("oldPrice",{value:formData.product.oldPrice})} ></input>
                </label>
                <label>
                    cpu:
                    <input type={"text"} {...register("cpu",{value:formData.product.cpu})} ></input>
                </label>
                <label>
                    screen:
                    <input type={"text"} {...register("screen",{value:formData.product.screen})} ></input>
                </label>
                <label>
                    ram:
                    <input type={"text"} {...register("ram",{value:formData.product.ram})} ></input>
                </label>
                <label>
                    memory:
                    <input type={"text"} {...register("memory",{value:formData.product.memory})} ></input>
                </label>
                <label>
                    classify:
                    <input type={"text"} {...register("classify",{value:formData.product.classify})} ></input>
                </label>
                <button type='submit'  >{formData.action === "Xem" ? "Đóng" : formData.action}</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({ formData: state.form })
export default connect(mapStateToProps)(Form);