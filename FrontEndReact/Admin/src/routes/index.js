import ListProduct from "../pages/listProduct"
import ListOrder from "../pages/listOrder";
import ListPC from "../pages/listPC";
import ListPhone from "../pages/listPhone";
import ListLaptop from "../pages/listLaptop";
import ListTablet from "../pages/listTablet";
import ListUser from "../pages/listUser";
import ListVoucher from "../pages/listVoucher";
import Form from "../pages/Form";


const publicRoutes = [
    { path: "/", component: ListProduct },
    { path: "/danh-sach-don-hang", component: ListOrder },
    { path: "/danh-sach-PC", component: ListPC },
    { path: "/danh-sach-dien-thoai", component: ListPhone },
    { path: "/danh-sach-laptop", component: ListLaptop },
    { path: "/danh-sach-may-tinh-bang", component: ListTablet },
    { path: "/danh-sach-User", component: ListUser },
    { path: "/danh-sach-Voucher", component: ListVoucher },
    { path: "/form", component: Form },
]

export default publicRoutes;