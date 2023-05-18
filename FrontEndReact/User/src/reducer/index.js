import { combineReducers } from "redux";
import cart from "./cart";
import productDetail from "./productDetail";
import searchResult from "./searchResult";
import listVoucher from "./listVoucher";
import user from "./user";

const reducer = combineReducers({
    cart,
    productDetail,
    searchResult,
    listVoucher,
    user
})

export default reducer;