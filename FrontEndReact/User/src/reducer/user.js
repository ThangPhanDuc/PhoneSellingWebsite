const userInit = {
    fullName:"Tài Khoản"
};



const user = (state = userInit, action) => {
    switch (action.type) {
        case "login":
            state = action.user;
            return state;
        
        default:
            return state;
    }
}

export default user;