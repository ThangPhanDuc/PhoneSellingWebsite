import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Admin Menu</div>
            <Link
              className="nav-link collapsed"
              to={"/"}
              // data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Tất cả các sản phẩm
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link to={"/danh-sach-dien-thoai"} className="nav-link" >
                  Danh sách Điện thoại
                </Link>
                <Link to={"danh-sach-laptop"} className="nav-link" >
                  Danh sách Laptop
                </Link>
                <Link className="nav-link" >
                  Danh sách Máy tính bảng
                </Link>
                <Link className="nav-link" >
                  Danh sách PC
                </Link>
              </nav>
            </div>
            <Link to={"/danh-sach-don-hang"} className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Danh sách đơn hàng
            </Link>
            <Link to={"/danh-sach-User"} className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Danh sách User
            </Link>
            <Link to={"/danh-sach-Voucher"} className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Danh sách Voucher
            </Link>

          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  )
}

export default Menu;