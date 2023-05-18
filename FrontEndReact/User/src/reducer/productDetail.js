const productDetailInit = {}

const productDetail = (state = productDetailInit, action) => {
    switch (action.type) {
        case "changeProductDetail":
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default productDetail;