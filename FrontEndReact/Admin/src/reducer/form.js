const formInit = {
    action: "Thêm",
    product: {}
}

const form = (state = formInit, action) => {
    switch (action.type) {
        case "viewProduct":
            state.action = action.action;
            state.product = action.product;
            return state;
        case "changeProduct":
            state.action = action.action;
            state.product = action.product;
            return state;
        case "addProduct":
            state.action = action.action
            state.product = {};
            return state;
            
        default:
            return state;
    }
}

export default form;